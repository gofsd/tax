import {StyleSheet} from "react-native";

const styles: any = StyleSheet.create({
    containerAcordion: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#ddd",
        width: "96%",
        marginLeft: 5,
        marginBottom: 15
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "#ddd",
        alignItems: "center",
    },
    buttonsContainerAccordion: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "#ddd",
        alignItems: "center",
        marginTop: 5,
    },
    buttonContent: {
        width: "90%",
        backgroundColor: "#fff",
        borderColor: "#555",
        borderWidth: 1,
        paddingRight: 10
    },
    buttonDelete: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#ddd",
        borderWidth: 1,
        alignItems: "center",
        borderColor: "transparent",
        width: "10%",
        justifyContent: "center"
    },
    deleteIcon: {
        color: "#000",
        marginLeft: 0,
        marginRight: 0,
    },
    addButton: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#ddd",
        borderWidth: 1,
        alignItems: "center",
        borderColor: "transparent",
        width: "10%",
        justifyContent: "center"
    },
    textAddButton: {
//   width: "90%",
        marginLeft: 10
    },
    textColor: {
        color: "#000",
        marginRight: 0,
        marginLeft: 0,
        // margin: "auto"
    },
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
