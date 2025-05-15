import { StyleSheet } from "react-native";
import { colors } from "../../styles/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: colors.gray[100],
  },
  
  title: {
    color: colors.gray[500],
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginVertical: 32,
    letterSpacing: 0.25,
  },
  
  buttonText: {
    color: "#FFFFFF", 
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.75,
  },
  
  inputContainer: {
    width: "100%",
    marginBottom: 24,
  },
  
  input: {
    width: "100%",
    backgroundColor: colors.gray[200],
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[300],
    marginBottom: 16,
  },
  
  buttonContainer: {
    width: "100%",
    marginTop: 16,
  },
  
  button: {
    width: "100%",
    paddingVertical: 16,
    backgroundColor: colors.green.base,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
});