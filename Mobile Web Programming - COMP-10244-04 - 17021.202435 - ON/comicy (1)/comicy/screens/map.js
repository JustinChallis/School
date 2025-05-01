import { View, Text, TouchableHighlight,} from 'react-native';
import MapView from 'react-native-maps';
import { mapStyles } from '../styles/mapStyles';
import { useState } from 'react';
import { Marker } from 'react-native-maps';
import {charLocation} from '../assets/data.js';

export default function MapScreen() {
  
  // Keep track of whether the libraries and fire stations are being displayed or not
  const [charLocationOn, setcharLocationOn] = useState(false);

  // Data for markers to be displayed on the map, initially empty
  const [markers, setMarkers] = useState([]);
  
  // Returns an array of marker data to display based on the booleans displayChars and 
  // displayFires that indicate whether to display the libraries and firestations or not
  function createMarkersArray(displayChars)
  {
    // Start off with an empty array of markers
    let markers_array = [];
    
    // If we DO want to display the libraries, add library marker data to the array
    if (displayChars)
    {
      // Loop through the libraries JSON array of data and build an object with 
      // the data specifically needed for a library marker
      for (i = 0; i < charLocation.length; i++)
      {
        markers_array.push( 
          {
            latlng: { latitude: parseFloat(charLocation[i].LATITUDE),                          
                      longitude: parseFloat(charLocation[i].LONGITUDE) },
            title: charLocation[i].NAME,
            image: './assets/' + charLocation[i].IMAGE,
            description: charLocation[i].ADDRESS + ", " + charLocation[i].COMMUNITY,
            pinColor: '#5050DB'
          }
        );
      }
    }
    
    // return the markers array, which could even be empty if both displayFires and 
    // displayChars were false!
    return markers_array;
  }

  // Handle the user pressing the library button
  function _onPressShowChars()
  {
    // If we were already displaying the library markers, we no longer want to 
    // display them, if we weren't displaying the library markers, then we DO 
    // want to display them
    if (!charLocationOn) displayChars = true;
    else displayChars = false; 
    
    // Fetch the relevant marker data and set the markers state
    the_markers = createMarkersArray(displayChars);
    setMarkers( the_markers );
    
    // Flip the onLibraries state to true if it was false and false if it was true
    setcharLocationOn(!charLocationOn);
  }

  return (
    <View style={mapStyles.container}>
      <MapView style={mapStyles.map}
               initialRegion={{latitude: 43.2557, 
                               longitude: -79.8711,
                               latitudeDelta: 0.30,
                               longitudeDelta: 0.30}} >

        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            // image={marker.image}
            description={marker.description}
            pinColor={marker.pinColor}
          />
        ))}

      </MapView>
      <View style={mapStyles.buttonRow}>
        <TouchableHighlight onPress={_onPressShowChars} underlayColor="white">
          <View style={[mapStyles.button, 
                       {backgroundColor: charLocationOn ? '#90E090' : '#ff726f' }]}>
            <Text style={mapStyles.buttonText}>Characters</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

