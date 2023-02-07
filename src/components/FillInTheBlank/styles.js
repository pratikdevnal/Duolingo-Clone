import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
  },
  blank: {
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    width: 100,
  },
  optionsContainer: {
    flex: 1,
  },
});

export default styles;
