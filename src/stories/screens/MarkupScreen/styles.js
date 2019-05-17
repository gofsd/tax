import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#FBFAFA",
	},
	shadow: {
		flex: 1,
		width: undefined,
		height: undefined,
	},
	bg: {
		flex: 1,
		marginTop: deviceHeight / 1.75,
		paddingTop: 20,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 30,
		bottom: 0,
	},
	input: {
		marginBottom: 20,
	},
	btn: {
		marginTop: 20,
		alignSelf: "center",
	},
	buttonPagination: {
		justifyContent: "center",
		backgroundColor: "#333333",
		borderStyle: "solid",
		borderWidth: 1,
		flex: 1,
		borderColor: "#000",
},
leftButtonsContainer: {
		width: 75,
		flexGrow: 0,
		flexShrink: 0,
		backgroundColor: "#000",
},
rightButtonsContainer: {
		width: 75,
		flexGrow: 0,
		flexShrink: 0,
		backgroundColor: "#000",
},
buttonRightAdd: {
	width: 75,
	height: 75,
	flex: 0,
	backgroundColor: "#333",
	borderWidth: 1,
	borderColor: "#000"
}
});
export default styles;
