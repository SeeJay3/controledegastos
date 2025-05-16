import { StyleSheet } from "react-native"
import { colors } from "../../styles/color"
import { fontFamily } from "../../styles/font-family"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.gray[200],
    shadowColor: colors.gray[500],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  description: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: colors.gray[500],
    flex: 1,
    marginRight: 12,
  },
  amount: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    marginTop: 8,
    color: colors.green.base,
  },
  local: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    marginTop: 4,
    color: colors.gray[400],
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  category: {
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[400],
    backgroundColor: colors.gray[200],
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  date: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[400],
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 12,
  },
})