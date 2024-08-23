import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card, Button} from 'react-native-paper';

const SingleView = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dstnwi5iq/image/upload/v1723529183/Onboarding_Preview_1_menduq.png',
        }}
        style={styles.image}
      />
      <View style={styles.headerIcons}></View>
      <Card style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.heading}>
            More Comfortable Chat With the Doctor
          </Text>

          <Button
            mode="contained"
            style={styles.cartButton}
            labelStyle={styles.cartButtonLabel}>
            <Text>GET STARTED</Text>
          </Button>
        </View>
      </Card>
    </ScrollView>
  );
};
export default SingleView;

const styles = StyleSheet.create({
  heading: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 554,
  },
  headerIcons: {
    position: 'absolute',
    top: 40,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -70,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#999',
    marginBottom: 20,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f39c12',
    padding: 5,
    borderRadius: 5,
  },
  ratingText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  optionSection: {
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    backgroundColor: '#00512C',
    flex: 1,
    marginHorizontal: 5,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
 
});
