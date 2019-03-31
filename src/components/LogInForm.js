import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Button2, Card, CardSection } from "./Common";

export default class LogInForm extends React.Component {
  state={
    email: '',
    password: ''
  }
  render() {
    console.log(this.state);

    return (
      <Card>
        <CardSection>
<TextInput
value = {this.state.email}
onChangeText= {email => this.setState({email})}
style={styles.textContainer}>
</TextInput>

        </CardSection>
        <CardSection >
          <TextInput
            value={this.state.password}
           onChangeText={password => this.setState({ password })}
           style={ styles.textContainer }>
          </TextInput>
        </CardSection>
        <CardSection>
          <Button2>Log In</Button2>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    height: 20, width: 100

  }
});
