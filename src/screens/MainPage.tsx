
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card, Button} from 'react-native-paper';

const MainPage = ({navigation}) => {
  
  return (
    <ScrollView>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dstnwi5iq/image/upload/v1723529183/Onboarding_Preview_1_menduq.png',
        }}
        style={styles.image}
      />
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.heading}>
            More Comfortable Chat With the Doctor
          </Text>
          <Text style={styles.subHeading}>
            Book an appointment with doctor. Chat with 
             doctor via appointment letter and get your best
             consultationt.
          </Text>
          <Image
            src="https://res.cloudinary.com/dstnwi5iq/image/upload/v1723534917/Slider_Indicator_k3kium.png"
            style={styles.imagedot}
          />
          <Button style={styles.cartButton} labelStyle={styles.cartButtonLabel} onPress={() => navigation.navigate("HomeScreen")}>
            <Text>GET STARTED</Text>
          </Button>
        </View>
      </Card>
    </ScrollView>
  );
};
export default MainPage;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 554,
  },
  heading: {
    paddingVertical: 10,  
    paddingHorizontal: 35,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'center',
 
  },
  subHeading: {
    fontSize: 14,
    color: '#939393',
    lineHeight: 20,
    paddingLeft: 27.5,
    paddingRight: 27.5,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    height:370,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -70,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardContent: {
    marginTop: 20,
    padding: 20, // Add padding to ensure the content doesn't touch the edges
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: '#4C4DDC',
    paddingVertical: 10,
    textAlign: 'center',
    width: 352,
    height: 66,
    borderRadius: 20,
    marginBottom: 10,
  },
  imagedot: {
    width: 60,
    height: 10,
    marginBottom: 20,
  },
  cartButtonLabel: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24.38,
  },
});
