import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

//Drawer first Item screen
class SubmitForm extends Component {
  render() {
    const { containerStyle, textStyle } = styles; //destructure style Object
    return (
      <View style={containerStyle}>
        <Text style={textStyle}>You got a damn good Discount</Text>
      </View>
    );
  }
}
//al the styles of component
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  textStyle: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold"
  }
});
export { SubmitForm };
