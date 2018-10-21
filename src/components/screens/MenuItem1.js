import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

//Drawer first Item screen
class MenuItem1 extends Component {
  render() {
    const { containerStyle, textStyle } = styles; //destructure style Object
    return (
      <View style={containerStyle}>
        <Text style={textStyle}>MENU ITEM 1</Text>
        <Button block onPress={() => this.props.navigation.navigate("Home")}>
          <Text>GO BACK</Text>
        </Button>
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
    fontSize: 20
  }
});
export { MenuItem1 };
