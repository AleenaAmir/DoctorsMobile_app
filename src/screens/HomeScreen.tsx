import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../Components/Button';
import DoctorCard from '../Components/DoctorCard';
import TopDoctors from '../Components/TopDoctors';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search);
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <ImageBackground
          source={{
            uri: 'https://res.cloudinary.com/dstnwi5iq/image/upload/v1723709589/Texture_zztppe.png',
          }}
          style={styles.img}>
          <View style={styles.container}>
            <View>
              <Image
                source={{
                  uri: 'https://res.cloudinary.com/dstnwi5iq/image/upload/v1694783110/beeqfew4or9sxwrtggzw.png',
                }}
                style={styles.profile}
              />
            </View>
            <View>
              <Text style={styles.text}>Hello, Welcome 🎉</Text>
              <Text style={styles.textname}>Aleena Abdul Ghafoor</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Icon name="bell-badge-outline" size={24} color="#FFFFFF" />
            </View>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.customSearchBar}>
              <Icon
                name="account-search"
                size={20}
                color="rgba(255, 255, 255, 0.6)"
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search Doctor..."
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                onChangeText={updateSearch}
                value={search}
              />
            </View>
          </View>
        </ImageBackground>
        <Button />
        <View>
          <Text style={styles.heading}>Favorite Doctor</Text>
        </View>
        <DoctorCard />
        <View>
          <Text style={styles.heading}>Top Doctor</Text>
        </View>
        <TopDoctors/>
        
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
   fontWeight:"bold",
   paddingVertical:5,
   paddingHorizontal:10,
    fontSize: 16,
    lineHeight: 24,
    color: '#101010',
  },
  img: {
    backgroundColor: '#4c4ddc',
    height: 220,
    width: '100%',
    padding: 20,
  },
  container: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  textname: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profile: {
    height: 48,
    width: 48,
    borderRadius: 100,
  },
  searchContainer: {
    marginTop: 40,
    marginHorizontal: 15,
  },
  customSearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4C4DDC',
    borderRadius: 15,
    height: 60,
    borderWidth: 2,
    borderColor: 'rgba(237, 237, 252, 0.2)',
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
});
