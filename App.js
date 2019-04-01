import React from "react";
import { StyleSheet, View, Image } from "react-native";
import firebase from "firebase";
import {
  Header,
  Button2,
  Spinner,
  CardSection,
  Card
} from "./src/components/Common";
import LogInForm from "./src/components/LogInForm";

export default class App extends React.Component {
  state = {
    loggedIn: null
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA6TeV5rv3Gi2Il7CXDpnBTXZ-F6iBhbJ4",
      authDomain: "auth-7ae7e.firebaseapp.com",
      databaseURL: "https://auth-7ae7e.firebaseio.com",
      projectId: "auth-7ae7e",
      storageBucket: "auth-7ae7e.appspot.com",
      messagingSenderId: "146235045664"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  onButtonPress() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Image
                style={styles.imageContainer}
                source={{
                  uri: "https://media.giphy.com/media/sfvVcEvsC6BoI/giphy.gif"
                }}
              />
            </CardSection>
            <CardSection>
              <Button2 onPress={this.onButtonPress.bind(this)}>Log Out</Button2>
            </CardSection>
          </Card>
        );
      case false:
        return <LogInForm />;
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Log In"} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  imageContainer: {
    height: 400,
    flex: 1,
    width: null,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  }
});
