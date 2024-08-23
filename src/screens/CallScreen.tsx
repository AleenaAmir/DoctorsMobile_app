import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CallScreen = ({ navigation, route }) => {
  const { doctor } = route.params;

  return (
    <ImageBackground source={{ uri: doctor.avatar }} style={styles.backgroundImage} blurRadius={2}>
      <View style={styles.container}>
        <View style={styles.timerContainer}>
          <FontAwesome name="circle" size={10} color="red" />
          <Text style={styles.timerText}>19:00 Minute</Text>
        </View>

        <View style={styles.profileContainer}>
          <Image source={{ uri: doctor.avatar }} style={styles.avatar} />
          <Text style={styles.doctorName}>{doctor.name}</Text>
        </View>

        <Text style={styles.recordingText}>Audio Recording is Active</Text>

        <View style={styles.callControls}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="microphone-slash" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.endCallButton} onPress={() => navigation.goBack()}>
            <FontAwesome name="phone" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="volume-up" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  timerContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  timerText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 14,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  doctorName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  recordingText: {
    color: '#fff',
    marginBottom: 60,
    fontSize: 16,
  },
  callControls: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  iconButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 15,
    borderRadius: 50,
  },
  endCallButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 50,
  },
});
