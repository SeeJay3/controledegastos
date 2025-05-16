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
  
  title: {
    color: colors.gray[500],
    fontFamily: fontFamily.bold,
    fontSize: 28,
    textAlign: 'center',
    marginTop: 24,
  },
  
  buttonText: {
    color: colors.gray[100],
    fontSize: 18,
    fontFamily: fontFamily.bold,
    letterSpacing: 0.75,
  },
  
  inputContainer: {
    width: "100%",
    marginBottom: 24,
  },
  
  input: {
    width: "100%",
    backgroundColor: colors.gray[100],
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: fontFamily.regular,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.gray[300],
    marginBottom: 16,
    color: colors.gray[500],
  },
  
  buttonContainer: {
    width: "100%",
    marginTop: 16,
  },
  
  button: {
    width: "100%",
    paddingVertical: 16,
    backgroundColor: colors.green.base,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    shadowColor: colors.green.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
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
});