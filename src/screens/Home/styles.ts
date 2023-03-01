import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
  },
  header: {
    height: 170,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
    zIndex: 15,
  },
  form: {
    flex: 1,
    position: 'absolute',
    bottom: -25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    height: 45,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    padding: 8,
    borderRadius: 8,
  },
  button: {
    padding: 16,
    height: 45,
    backgroundColor: '#1E6F9F',
    borderRadius: 8,
  },
  content: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24,
  },
  informations: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    marginTop: 16,
    paddingBottom: 16,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    gap: 8,
  },
  blue: {
    fontSize: 16,
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  purple: {
    fontSize: 16,
    color: '#8284FA',
    fontWeight: 'bold',
  },
  number: {
    paddingHorizontal: 7,
    backgroundColor: '#333333',
    color: '#D9D9D9',
    fontSize: 16,
    borderRadius: 20,
  },
  notask: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  imagenotask: {
    marginVertical: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080',
  }
})