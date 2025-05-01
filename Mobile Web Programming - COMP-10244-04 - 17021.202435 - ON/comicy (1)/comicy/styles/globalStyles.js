import { StyleSheet, Dimensions} from 'react-native';

// Get the screen dimensions
export const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    width: width, // Set image width to match screen width
    height: height, // Set image height to match screen height
  },
  scrollView: {
    flex: 1,
    width: width,
    height: height,
  },
  textContainer: {
    position: 'absolute',
    top: '50%', // Position vertically at the center
    left: '50%', // Position horizontally at the center
    transform: [{ translateX: -150 }, { translateY: -30 }], // Adjust to center the text based on its size
    zIndex: 1, // Ensure the text appears above the images
    textAlign: 'center',
    width: '90%', // This ensures the text container is wide enough but still allows wrapping
    paddingHorizontal: 10, // Adds some padding to prevent text from touching the screen edges
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 5,
    marginBottom: 10,
    flexWrap: 'wrap', // This ensures that the title text wraps to the next line if it's too long
  },
  subheader: {
    fontSize: 24,
    fontWeight: '300', // Lighter weight for the subheader
    color: '#fff',
    textAlign: 'center',
    textShadowColor: '#000', // Optional: Adds shadow to improve readability
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
    opacity: 0.8, // Slightly more transparent than the title for a subtle effect
    flexWrap: 'wrap', // This ensures that the subheader text wraps as well
  },
});