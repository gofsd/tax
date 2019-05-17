import { StyleSheet } from "react-native";

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
});
export default styles;
