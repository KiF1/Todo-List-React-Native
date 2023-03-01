import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 65,
    padding: 10,
    backgroundColor: '#333333',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  content: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
  },
  completed: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    textDecorationLine: 'line-through',
  },
  button: {
    width: 25,
    height: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
})