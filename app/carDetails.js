import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import BackgroundImage from '../assets/background.jpg'; // Import the background image

export default function CarDetails({ route }) {
  const { name, description, image, carDetails, driverBio } = route.params;

  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          {/* Image with rounded borders */}
          <Image source={image} style={styles.carImage} resizeMode="cover" />
          
          <View style={styles.textContainer}>
            {/* Car Name */}
            <Text style={styles.carName}>{name}</Text>
            
            {/* Car Description */}
            <Text style={styles.carDescription}>{description}</Text>

            {/* Driver Bio */}
            <Text style={styles.sectionTitle}>Driver Bio:</Text>
            <Text style={styles.carText}>{driverBio}</Text>

            {/* Car Details Section */}
            <Text style={styles.sectionTitle}>Car Details:</Text>
            <View>
              <Text style={styles.carText}>Engine: {carDetails.engine}</Text>
              <Text style={styles.carText}>Horsepower: {carDetails.horsepower}</Text>
              <Text style={styles.carText}>Top Speed: {carDetails.topSpeed}</Text>
              <Text style={styles.carText}>0 to 100 km/h: {carDetails.zeroTo100}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  carImage: {
    width: '100%',
    height: 250,
  },
  textContainer: {
    padding: 16,
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  carDescription: {
    fontSize: 16,
    color: '#777',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  carText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});
