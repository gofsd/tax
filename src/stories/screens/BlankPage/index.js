import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Form, Item, Label,Input, Tab, Tabs, View } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}



export interface State {}
class BlankPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header hasTabs>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Blank Page"}</Title>
					</Body>

					<Right />
				</Header>
				<Tabs>
          <Tab heading="Tab1" >
		  <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
          </Form>
		  </Tab>
          <Tab heading="Tab2" >
		  <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>

		  </Tab>
        </Tabs>
				<Content padder />
				<Footer >
					<Content>
					<Button full block primary>
            			<Text>Search</Text>
          			</Button>
				</Content>

				</Footer>
			</Container>
		);
	}
}

export default BlankPage;
