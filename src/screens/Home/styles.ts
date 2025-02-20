import { Button, StyleSheet} from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FDFCFE',
    marginTop: 48,
  },
  eventDate: {
    fontSize: 16,
    color: '#6B6B6B',
  },
  input:{
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    flex: 1,
  }, 
  buttonText: {
    color: 'white',
  },
  button: { 
   width: 56,
   height: 56,
   borderRadius: 5,
   backgroundColor: '#31CF67',
   alignItems: 'center',
   justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText:{
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});
