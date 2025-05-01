import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { searchStyles }  from '../styles/searchStyles';
import {charLocation} from '../assets/data';

const SearchScreen = () => {
  
// Array of local images
const characters = [];

for (i = 0; i < charLocation.length; i++){ 
  characters.push(
    {
    title: charLocation[i].NAME, 
    type: charLocation[i].TYPE,
    description: charLocation[i].DESCRIPTION,
    location: charLocation[i].COMMUNITY 
    }
  )
  
  }

  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter results based on search query
  const filteredResults = characters.filter(result =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={searchStyles.container}>
      {/* Searchbar at the top */}
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={searchStyles.searchbar}
      />

      {/* Displaying filtered search results */}
      <FlatList
        data={filteredResults}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SearchResultItem result={item} />}
        ListEmptyComponent={<Text style={searchStyles.noResults}>No results found</Text>}
      />
    </View>
  );
};

// Result Item with Dropdown for More Details
const SearchResultItem = ({ result }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={searchStyles.resultItem}>
      <Text style={searchStyles.resultText}>{result.title}</Text>
      
      {/* Dropdown button to toggle visibility of details */}
      <TouchableOpacity onPress={() => setExpanded(!expanded)} style={searchStyles.dropdownButton}>
        <Text style={searchStyles.dropdownButtonText}>{expanded ? 'Less info' : 'Learn more'}</Text>
      </TouchableOpacity>

      {/* Show additional details when expanded */}
      {expanded && (
        <View style={searchStyles.detailsContainer}>
          <Text style={searchStyles.detailsText}>Description: {result.description}</Text>
          <Text style={searchStyles.detailsText}>Location: {result.location}</Text>
          <Text style={searchStyles.detailsText}>Type: {result.type}</Text>
        </View>
      )}
    </View>
  );
};

export default SearchScreen;