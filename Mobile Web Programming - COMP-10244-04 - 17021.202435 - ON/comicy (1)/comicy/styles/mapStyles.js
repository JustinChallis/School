import { StyleSheet, Dimensions} from 'react-native';

export const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '85%',
  },
  buttonRow : {
    flexDirection: "row",
    alignSelf: "center",
    flex: 1,
    height: '15%'
  },
  button: {
    backgroundColor: '#6200EE', // A modern purple color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30, // Rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 }, // Offset shadow
    shadowOpacity: 0.1, // Soft shadow opacity
    shadowRadius: 5, // Radius of the shadow
    elevation: 4, // Shadow for Android
    transition: 'background-color 0.3s ease', // Smooth transition for color change on press
  },
  buttonText: {
    color: 'white',
    fontSize: 48,
    fontWeight: '600', // Bold font for emphasis
    textTransform: 'uppercase', // All uppercase letters for a clean look
  }
});