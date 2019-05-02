import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Form, Item, Label,Input, Tab, Tabs, View, FooterTab } from "native-base";

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
						<Title>{"Лiсництво 1, квартал 1, видiл 1, Поточний"}</Title>
					</Body>

					<Right />
				</Header>

				<Tabs>
					<Tab heading="1" >
					<Tabs>
					<Tab heading="M1" >
						<Tabs>
							<Tab heading="Поточний">
							<Form>

            <Item floatingLabel>
							<Label>Пiдприэмство</Label>

              <Input  />
            </Item>
            <Item floatingLabel>
							<Label>Лiсництво</Label>

              <Input  />
            </Item>
						<Item floatingLabel>
							<Label>Рiк теперiшнього лiсовпорядкування</Label>

              <Input  />
            </Item>
            <Item floatingLabel>
							<Label>Площа лiсництва, га</Label>

              <Input  />
            </Item>
						<Item floatingLabel>
								<Label>Адмiнiстративна область</Label>

              <Input/>
            </Item>
          </Form>
							</Tab>
							<Tab heading="Попередн.">
							<Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
							</Tab>
						</Tabs>
					</Tab>
					<Tab heading="M2" />
					<Tab heading="M3" />
					<Tab heading="M4" />
					<Tab heading="M5" />
					<Tab heading="M6" />
					<Tab heading="M7" />
					<Tab heading="M8" />
					<Tab heading="M9" />
					<Tab heading="M10" />
					<Tab heading="M11" />
					<Tab heading="M12" />
					<Tab heading="M13" />
					<Tab heading="M14" />
					<Tab heading="M15" />
        </Tabs>
					</Tab>
					<Tab heading="2" />
					<Tab heading="3" />
					<Tab heading="4" />
					<Tab heading="5" />
					<Tab heading="6" />
					<Tab heading="7" />
					<Tab heading="8" />
					<Tab heading="9" />
					<Tab heading="10" />
					<Tab heading="11" />
					<Tab heading="12" />
					<Tab heading="13" />
					<Tab heading="14" />
					<Tab heading="15" />
        </Tabs>



									<Footer >
				<FooterTab>
            <Button vertical>
              <Icon name="settings" />
              <Text>Налаштування</Text>
            </Button>
            <Button vertical>
              <Icon name="grid" />
              <Text>Видалити</Text>
            </Button>
            <Button vertical active>
              <Icon active name="paper" />
              <Text>Зберегти</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate("SelectDepartmentsAndMaquette")}>
              <Icon name="add" />
              <Text>Макети/Видiли</Text>
            </Button>
          </FooterTab>
					</Footer>
			</Container>
		);
	}
}

export default BlankPage;
