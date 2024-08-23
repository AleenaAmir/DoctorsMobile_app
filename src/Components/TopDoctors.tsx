import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {doctors} from './doctors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { RootStackParamList } from '../App';

const DoctorCard = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'DoctorProfile'>>();
  return (
    <FlatList
      data={doctors}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('DoctorProfile', {doctor: item})}>
          <View style={styles.card}>
            <Image
              source={{uri: item.avatar}}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.infoContainer}>
              <View style={styles.header}>
                <Text style={styles.name}>{item.name}</Text>
                <FontAwesome name="ellipsis-h" size={20} color="#999" />
              </View>
              <Text style={styles.specialization}>
                {item.specialization}|{item.clinic}
              </Text>
              <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={16} color="#FFD700" />
                <Text style={styles.rating}>{item.rating.value} </Text>
                <Text style={styles.reviews}>
                  ({item.rating.reviews} reviews)
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#00000',
  },
  specialization: {
    fontSize: 12,
    color: '#939393',
    lineHeight: 18,
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 5,
  },
  reviews: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
});
