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
  
  transactions: {
    flex: 1,
    paddingBottom: 24, 
  },
  
  title: {
    color: colors.gray[500],
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 24,
  },
}
)