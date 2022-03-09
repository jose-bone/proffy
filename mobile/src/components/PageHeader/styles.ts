import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#8257E5",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
});
