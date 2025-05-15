import { StyleSheet } from "react-native";
import { colors } from "../../styles/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 16,
    backgroundColor: colors.gray[100],
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

  title: {
    color: colors.gray[500],
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 24,
  },

  inputContainer: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row', 
    alignItems: 'center'
  },

  input: {
    width: '100%',
    backgroundColor: colors.gray[200],
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.gray[300],
  },

  buttonContainer: {
    width: '100%',
    marginTop: 8,
  },

  button: {
    width: 'auto',
    paddingVertical: 12,
    backgroundColor: colors.green.base,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 0
  },

  buttonText: {
    color: colors.green.soft,
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactions: {
    flex: 1,
    paddingBottom: 24, 
    paddingTop: 14,
  },
});
