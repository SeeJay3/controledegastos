import { StyleSheet } from "react-native";
import { colors } from "../../styles/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.gray[100], 
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[500], 
  },
  
  transactions: {
    flex: 1,
    paddingBottom: 24, 
  },
  
  title: {
    color: colors.gray[500], 
    fontWeight: "bold",
    fontSize: 28, 
    textAlign: "center",
    marginVertical: 8,
    letterSpacing: 0.3, 
  },
  button: {

  },
}
)