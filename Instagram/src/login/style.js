import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      position: "relative",
    },
    language: {
      color: "#A9A9A9",
      fontSize: 12,
      marginTop: 50,
      fontWeight: 600,
    },
    logo: {
      width: 100,
      height: 100,
      marginVertical: 50,
    },
    input: {
      width: "90%",
      margin: 5,
      borderWidth: 2,
      padding: 10,
      borderColor: "#A9A9A9",
      borderRadius: 5,
      placeholderTextColor: "#A9A9A9",
      fontWeight: 600,
    },
    buttonEntrar: {
      width: "90%",
      marginVertical: 5,
      borderWidth: 2,
      padding: 10,
      borderColor: "#1E90FF",
      borderRadius: 50,
      backgroundColor: "#1E90FF",
    },
    footer: {
      width: "100%",
      alignItems: "center",
      position: "absolute",
      bottom: 10,
    },
    buttonCadastrar: {
      width: "90%",
      borderWidth: 2,
      padding: 10,
      borderColor: "#1E90FF",
      borderRadius: 50,
      backgroundColor: "transparent",
    },
    meta: {
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
    },
  })