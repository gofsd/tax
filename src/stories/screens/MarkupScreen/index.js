import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
import {FooterTab, Left, Right} from "../BlankPage";

class Login extends React.Component {
	renderButtons = () => {
		let buttons = [];

		for (let i = 0; i < 8; i++) {
			buttons.push(
				<Button
					key={i}
					style={{height: 70, width: 70, flex: 1, justifyContent: 'center', backgroundColor: '#333333'}}
				>
					<Text style={{fontSize: 17}}>{i}</Text>
				</Button>
			)
		}
		return buttons
	};

	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title style={{width: '100%', margin: 'auto'}}>{"Лiсництво 1, квартал 1, видiл 1, Поточний"}</Title>
					</Body>
				</Header>
				<Content style={{height: '100%', backgroundColor: '#000', display: 'flex'}}>
					<View style={{ height: 1000, width: 70, overflowY: 'scroll', backgroundColor: 'red'}}>
						{this.renderButtons()}
					</View>
				</Content>
				<Footer/>
			</Container>
		);
	}
}

export default Login;
