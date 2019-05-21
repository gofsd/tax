import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	containerInputNumber: {
		flexDirection: "column",
		alignItems: "flex-start",
		borderBottomWidth: 0,
		marginLeft: 0,
		color: "#fff",
		borderColor: "#000",
		marginTop: 5
	},
	pickerLabel: {
		fontSize: 17,
		marginLeft: 12,
		marginTop: 5
	},
	inputNumber: {
		width: "96%",
		borderRadius: 8,
		flex: 0,
		borderColor: "#D9D5DC",
		borderWidth: 2,
		marginBottom: 5,
		backgroundColor: "#fafafa",
		height: 40,
		marginLeft: 5,
		paddingLeft: 10,
		paddingRight: 10
	},
	row: {
		flex: 1,
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
		alignItems: "center",
	},
	searchBarContainerStyle: {
		marginBottom: 10,
		flexDirection: "row",
		height: 40,
		shadowOpacity: 1.0,
		shadowRadius: 5,
		shadowOffset: {
			width: 1,
			height: 1
		},
		backgroundColor: "rgba(255,255,255,1)",
		shadowColor: "#d3d3d3",
		borderRadius: 10,
		elevation: 3,
		marginLeft: 10,
		marginRight: 10
	},

	selectLabelTextStyle: {
		color: "#000",
		textAlign: "left",
		width: "99%",
		padding: 10,
		flexDirection: "row"
	},
	placeHolderTextStyle: {
		color: "#000",
		padding: 10,
		textAlign: "left",
		width: "99%",
		flexDirection: "row"
	},
	dropDownImageStyle: {
		marginLeft: 10,
		width: 10,
		height: 10,
		alignSelf: "center"
	},

	pickerStyle: {
		marginLeft: 18,
		paddingRight: 25,
		marginRight: 18,
		marginBottom: 2,
		borderWidth:2,
		backgroundColor: "rgba(255,255,255,1)",
		borderColor: "#D9D5DC",
		borderRadius: 8,
		flexDirection: "row"
	}
});
export default styles;
