import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  SwipeRow,
  View
} from "native-base";
import ActionButton from "react-native-action-button";


import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right >
          <Button transparent>
              <Icon
                active
                name="setting"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {this.props.list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("BlankPage", {
                    name: { item }
                  })}
              >
                  <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}

      right={
        <Button danger onPress={() => alert("Trash")}>
          <Icon active name="trash" />
        </Button>
      }
      left={
        <Button success onPress={() => alert("Add")}>
          <Icon active name="add" />
        </Button>
      }
      body={
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Body style={{alignItems:"flex-start"}}>
            <Text >
              {item}
            </Text>
            <Text note>{item}</Text>
            </Body>
            <Right padder>
              <Text note>{item}</Text>
              <Text note>{item} USD</Text>
            </Right>
          </View>
      }
    />
              </ListItem>
            ))}
          </List>
        </Content>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor="#9b59b6" title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor="#3498db" title="Search" onPress={() =>
                  this.props.navigation.navigate("BlankPage", {
                    name: { text: "Some text" }
                  })}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>

        </ActionButton>
      </Container>
    );
  }
}

export default Home;
