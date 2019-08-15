import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import CastomDraweHome from "../Components/CastomDrawerHome";
import { Icon } from "native-base";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import Home from "../screen/Home/";
import Test from "../screen/Test";

const HomeRott = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Главное",
          headerLeft: (
            <View style={{ paddingLeft: 10 }}>
              <Icon
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                size={30}
                style={{ color: "#fff" }}
              />
            </View>
          )
        };
      }
    }
    // Detail: {
    //   screen: Detail,
    //   navigationOptions: ({ navigation }) => {
    //     return {
    //       headerTitle: "Detail"
    //     };
    //   }
    // }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: "#1A5256"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    HomeScren: {
      screen: HomeRott
    }
  },
  {
    contentComponent: props => <CastomDraweHome {...props} />,
    initialRouteName: "HomeScren",
    contentOptions: {
      activeTintColor: "#e91e63"
    }
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);

class HomeRouters extends Component {
  render() {
    return <AppContainer />;
  }
}
export default HomeRouters;
