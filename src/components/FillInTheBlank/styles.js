import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
    height: 60,
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 18,
  },
  blank: {
    borderBottomWidth: 2,
    borderColor: "lightgrey",
    width: 100,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",

    alignItems: "center",
    // justifyContent: "center",
    alignContent: "center",

    flexWrap: "wrap",
    // backgroundColor:"red",
    // width:'100%',
    //         flexDirection:"row",
    //         flex:1,
    flexWrap: "wrap",
    justifyContent: "space-between",
    // alignContent: "space-between",
  },
});

export default styles;
