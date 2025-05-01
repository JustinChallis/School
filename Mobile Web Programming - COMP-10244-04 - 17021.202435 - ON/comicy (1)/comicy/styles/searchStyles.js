import { StyleSheet, Dimensions} from 'react-native';

export const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  searchbar: {
    margin: 10,
    borderRadius: 25,
    elevation: 4, // Shadow for Android
  },
  resultItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  resultText: {
    fontSize: 18,
    color: '#333',
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#aaa',
  },
});