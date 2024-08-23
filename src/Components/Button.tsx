import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const array = [
  {
    id: '1',
    name: '🔥 All',
  },
  {
    id: '2',
    name: '🤒 Fever',
  },
  {
    id: '3',
    name: '🤧 Cough',
  },
  {
    id: '4',
    name: '🤢 Nauseated',
  },
];

const Button = () => {
  const [selectedId, setSelectedId] = useState('1'); // Default to the first item being selected

  const handlePress = (id) => {
    setSelectedId(id); // Update the selected ID when a button is pressed
  };

  return (
    <FlatList
      data={array}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            selectedId === item.id && styles.selectedButton,
          ]}
          onPress={() => handlePress(item.id)}
        >
          <Text style={[styles.buttonText, selectedId === item.id && styles.selectedButtonText]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default Button;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonContainer: {
    backgroundColor: '#F5F5F7', // Light background for non-selected buttons
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: '#4c4ddc', // Blue background for the selected button
  },
  buttonText: {
    color: '#000', // Text color for non-selected buttons
    fontWeight: '500',
  },
  selectedButtonText: {
    color: '#FFFFFF', // White text color for the selected button
    fontWeight: 'bold',
  },
});
