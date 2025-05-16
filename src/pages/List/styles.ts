import { StyleSheet } from "react-native";
import { colors } from "../../styles/color";
import { fontFamily } from "../../styles/font-family";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: colors.gray[100],
  },
  
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: colors.gray[200],
  },
  
  transactions: {
    flex: 1,
    paddingBottom: 24,
  },
  
  title: {
    color: colors.gray[500],
    fontFamily: fontFamily.bold,
    fontSize: 28,
    textAlign: 'center',
    marginTop: 24,
  },
})