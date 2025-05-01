import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, ScrollView, Image, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from './screens/home';
import MapScreen from './screens/map';
import SearchScreen from './screens/search';
// My App
// function HeartScreen() {
//   return (
//     <View>
//       <Text>Favourites Screen</Text>
//     </View>
//   );
// }
// else if (route.name === "Favourites") {
// return <Ionicons name="heart" size={size} color={color} />;
// }

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {

            if (route.name === 'Home') {
              return <Ionicons name="home" size={size} color={color} />;
            } else if (route.name === 'Map') {
              return <Ionicons name="map" size={size} color={color} />;
            } else {
              return <Ionicons name="search" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

