import * as React from "react";
import { Picker, Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Form, Item, Label,Input, Tab, Tabs, View, FooterTab } from "native-base";
import ModalSelector from "react-native-modal-selector";

import styles from "./styles";
export interface Props {
	navigation: any;
}



export interface State {}
class BlankPage extends React.Component<Props, State> {
	state = {
		      selected2: undefined
	}
	  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
	}

	selectedItem = (date, lable) => {
		return (
			<Item style={{flexDirection: "column"}}>
							<Text style={{fontSize: 20}}>{lable}</Text>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: 800 }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
							{date.filter(it=>{
								return it.NAME != null;
							}).map((it, idx, arr) =>
							(<Picker.Item label={it.NAME} value={lable + idx}/>))}

              </Picker>
            </Item>
);
	}

	render() {
		console.log(this.props, "from main screen");
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
							<Label>Виділ</Label>

              <Input  />
            </Item>
            <Item floatingLabel>
							<Label>Підвиділ</Label>

              <Input  />
            </Item>
						<Item floatingLabel>
							<Label>Площа виділу (підвиділу) </Label>

              <Input  />
            </Item>
								{
									this.selectedItem(this.props.KAKZ, "Категорія земель")
								}
																{
									this.selectedItem(this.props.KAKI, "Ознака земель переданих в тимчасове користування")
								}
 								{
									this.selectedItem(this.props.KAZU, "Ознака особливо захисних ділянок лісів")
								}


            <Item floatingLabel>
							<Label>Рік таксації</Label>

              <Input  />
            </Item>

          </Form>
							</Tab>
							<Tab heading="Попередн.">
							<Form>
							<Item floatingLabel>
							<Label>Виділ</Label>

              <Input  />
            </Item>
            <Item floatingLabel>
							<Label>Підвиділ</Label>

              <Input  />
            </Item>
						<Item floatingLabel>
							<Label>Площа виділу (підвиділу) </Label>

              <Input  />
            </Item>
								{
									this.selectedItem(this.props.KAKZ, "Категорія земель")
								}
								{
									this.selectedItem(this.props.KAKI, "Ознака земель переданих в тимчасове користування")
								}
 								{
									this.selectedItem(this.props.KAZU, "Ознака особливо захисних ділянок лісів")
								}


            <Item floatingLabel>
							<Label>Рік таксації</Label>

              <Input  />
            </Item>

          </Form>

							</Tab>
						</Tabs>
					</Tab>
       </Tabs>
					</Tab>

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
