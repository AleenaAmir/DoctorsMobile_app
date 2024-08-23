import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type DoctorProfileRouteProp = RouteProp<RootStackParamList, 'DoctorProfile'>;

const DoctorProfileCard = ({ navigation }) => {
  const route = useRoute<DoctorProfileRouteProp>();
  const doctor = route.params?.doctor;
  if (!doctor) {
    return <Text>No doctor data</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="chevron-left" size={20} color="#333" />
      </TouchableOpacity>

      <Text style={styles.headerText}>My Appointment</Text>
      
      <View style={styles.card}>
        <Image source={{ uri: doctor.avatar }} style={styles.image} />
        
        {/* Doctor Info Section */}
        <View style={styles.infoContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.name}>{doctor.name}</Text>
            <Text style={styles.specialization}>{doctor.specialization} | {doctor.clinic}</Text>
          </View>
          <View style={styles.rightContainer}>
            <FontAwesome name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>
              {doctor.rating.value} ({doctor.rating.reviews} reviews)
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        {doctor.stats.map((stat) => (
          <View key={stat.id} style={styles.stat}>
            <Text style={styles.statIcon}>{stat.icon}</Text>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.aboutTitle}>About Me</Text>
      <Text style={styles.aboutText}>{doctor.about}</Text>

      <TouchableOpacity style={styles.callButton} onPress={() => navigation.navigate('CallScreen', { doctor })}>
        <FontAwesome name="phone" size={20} color="#fff" />
        <Text style={styles.callButtonText}>{doctor.availability}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoctorProfileCard;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 10,
  },
  callButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c4ddc',
    paddingVertical: 15, // Control the height of the button
    borderRadius: 10,
    marginTop: 20,
  },
  callButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10, // Space between the icon and the text
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
   
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 370,
    height: 247,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 15,
  },
  infoContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 40,
  },
  leftContainer: {
    flex: 1, 
  },
  rightContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  specialization: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    marginLeft: 5,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  stat: {
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 24,
    marginBottom: 20,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom:10,
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  aboutTitle: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    
    lineHeight:24,
    color: '#101010',
  },
  aboutText: {
    fontSize: 14,
    color: '#939393',
    paddingHorizontal: 10,
    marginBottom: 20,
  },

});
