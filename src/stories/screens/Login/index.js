import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
import DeviceInfo from "react-native-device-info";
const DeviceUUID = DeviceInfo.getUniqueID();



class Login extends React.Component{
	render() {
		return (
			<Container>
				<Header style={{ height: 200, backgroundColor: "#333" }}>
					<Body style={{ alignItems: "center", backgroundColor: "#333" }}>
						{/* <Icon name="flash" style={{ fontSize: 104 }} /> */}
						<Image
						  style={{width: 200, height: 150}}
              source={require("../../../img/logo.jpg")}
            />
						<Title>Таксатор</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}>
								{`ID пристрою: ${DeviceUUID}`}
							</Text>
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button style={{backgroundColor: "#333"}} block onPress={() => this.props.onLogin()}>
							<Text>Вхід</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "transparent" }}>
				</Footer>
			</Container>
		);
	}
}

export default Login;
