import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button2, Card, CardSection, Input, Spinner } from "./Common";
import firebase from "firebase";

export default class LogInForm extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({
      error: "",
      loading: true
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }
  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      error: "",
      loading: false
    });
  }
  onLoginFail() {
    this.setState({
      error: "Authentication Failed",
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button2 onPress={this.onButtonPress.bind(this)}>Log In</Button2>;
  }
  render() {
    console.log(this.state);

    return (
      <Card>
        <CardSection>
          <Input
            placeholder={"user@gmail.com"}
            label={"Email"}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label={"Password"}
            placeholder={"Password"}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorText}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
});
