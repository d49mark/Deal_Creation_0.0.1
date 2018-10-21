import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import React from "react";
import { Button } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { ParentComp, MenuItem1, SubmitForm } from "../screens";

//Stacknaviagtor is main naviagtor which ahs drawer navigator nested in it and name of other navigator shows which screen they belngs to
const ParentCompNavigation = createStackNavigator({
  Home: {
    screen: ParentComp,
    navigationOptions: ({ navigation }) => ({
      title: "KREDX Deal Creation",
      //provide menu Icon
      headerLeft: (
        <Button transparent onPress={() => navigation.toggleDrawer()}>
          <Icon name="md-menu" size={30} color="white" />
        </Button>
      ),
      headerStyle: {
        backgroundColor: "#0F52BA"
      },
      headerTintColor: "white",

      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerBackTitle: null
    })
  },
  SubmitFormScreen: {
    screen: SubmitForm
  }
});
const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: ParentCompNavigation,
      navigationOptions: {
        header: null
      }
    },
    MenuItem1: {
      //didnt created seperated navigator as screen doesnt have navigations
      screen: MenuItem1,
      navigationOptions: {
        title: "MENU ITEM 2",

        headerStyle: {
          backgroundColor: "#0F52BA"
        },
        headerTintColor: "white",

        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerBackTitle: null
      }
    }
  },
  {
    //config for drawer
    drawerPosition: "left",
    drawerWidth: 300,
    backgroundColor: "white"
  }
);

//Main navigator
const RootNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "HomeScreen"
  }
);

export { RootNavigator };
