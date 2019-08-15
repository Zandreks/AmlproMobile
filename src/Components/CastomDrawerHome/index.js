import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import style from "./Style/index";
const drawerCover = require("./img/bacgrounnImng.png");
const drawerImage = require("./img/drawer.png");
const datas = [
  {
    name: "Главное",
    route: "HomeScren",
    icon: "home",
    bg: "#C5F442",
    key: 0
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    global.currentScreenIndex = !!global.currentScreenIndex
      ? global.currentScreenIndex
      : 0;
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#1A5256" }}
        >
          <Image source={drawerCover} style={style.drawerCover} />
          {/* <Image square style={style.drawerImage} source={drawerImage} /> */}

          <List
            dataArray={datas}
            renderRow={data => (
              <ListItem
                button
                onPress={() => {
                  global.currentScreenIndex = data.key;
                  this.props.navigation.navigate(data.route);
                }}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#fff", fontSize: 26, width: 30 }}
                  />
                  <Text
                    style={
                      (style.text,
                      {
                        color:
                          global.currentScreenIndex === data.key
                            ? "red"
                            : "#fff"
                      })
                    }
                  >
                    {data.name}
                  </Text>
                </Left>
                {data.types && (
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text style={style.badgeText}>{`${
                        data.types
                      } Types`}</Text>
                    </Badge>
                  </Right>
                )}
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
