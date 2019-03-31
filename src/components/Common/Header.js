import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Header = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.headerText}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  view: {
    backgroundColor: "#f8f8f8",
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  text: {
    fontSize: 20,
    color: 'green'
  }
});
export  {Header}