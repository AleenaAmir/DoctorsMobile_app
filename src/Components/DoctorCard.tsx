import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // You can use FontAwesome for the star icon
import {doctors} from './doctors';
import { RootStackParamList } from '../App';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const DoctorCard = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'DoctorProfile'>>();

  return (
    <FlatList
      data={doctors}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('DoctorProfile', {doctor: item})}>
          <View style={styles.card}>
            <Image source={{uri: item.avatar}} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={14} color="#FFD700" />
                <Text style={styles.rating}>{item.rating.value}</Text>
              </View>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.specialization}>{item.specialization}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      horizontal
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
  },
  card: {
    marginRight: 25,
    width: 156, // Set a fixed width for each card
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 156,
    height: 134,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  infoContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 5,
    padding: 5,
  },
  rating: {
    fontSize: 14,
    color: '#333',
  },
  specialization: {
    fontSize: 12,
    color: '#888',

    textAlign: 'center',
  },
});
