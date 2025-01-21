import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native';
import BackgroundImage from '../assets/background.jpg'; // Import the background image


// Import local images for cars (You can replace with actual car images)
import MazdaRx7ImageFD from '../assets/mazdarx7fd.jpg';
import MazdaRx7ImageFC from '../assets/mazdarx7fc.jpg';
import ToyotaAE86Image from '../assets/toyotaae86.jpg';
import SubaruWRXImage from '../assets/subaruwrx.jpg';
import NissanS13Image from '../assets/nissans13.jpg';
import NissanGTRImage from '../assets/nissangtr.jpg';
import HondaCivicImage from '../assets/hondacivic.jpg';
import NissanSilEightyImage from '../assets/nissansileighty.jpg';
import TitleLogo from '../assets/title.png'; // Import the logo image

// Car details and driver bios
const cars = [
  {
    id: 1,
    name: "Keisuke's Mazda Rx7 FD3s",
    description: 'A rotary engine sports car, known for its lightweight and excellent handling.',
    image: MazdaRx7ImageFD,
    carDetails: {
      engine: '13B Rotary Engine',
      horsepower: '280 HP',
      topSpeed: '250 km/h',
      zeroTo100: '5.5 seconds',
    },
    driverBio:
      'Keisuke Takahashi is the hot-headed and skilled driver of the Akagi Red Suns. Known for his fearless racing style, he is often seen competing fiercely with other drivers.',
  },
  {
    id: 2,
    name: "Ryosuke's Mazda Rx7 FC3s",
    description: 'A more refined version of the RX7, with enhanced aerodynamics and power.',
    image: MazdaRx7ImageFC,
    carDetails: {
      engine: '13B Rotary Engine',
      horsepower: '230 HP',
      topSpeed: '220 km/h',
      zeroTo100: '6 seconds',
    },
    driverBio:
      'Ryosuke Takahashi is the calm and strategic older brother of Keisuke. He is known for his incredible tactical thinking and leadership of the Red Suns.',
  },
  {
    id: 3,
    name: "Takumi's Toyota AE86 Trueno",
    description: 'A lightweight, agile car known for its precision and balance on the mountain roads.',
    image: ToyotaAE86Image,
    carDetails: {
      engine: '4A-GE Inline-4 Engine',
      horsepower: '130 HP',
      topSpeed: '200 km/h',
      zeroTo100: '8 seconds',
    },
    driverBio:
      'Takumi Fujiwara is the main character of Initial D, a young driver with exceptional skills. His car, the AE86, is famous for being an underdog in street racing.',
  },
  {
    id: 4,
    name: "Bunta's Subaru WRX Impreza",
    description: 'A high-performance all-wheel-drive car with powerful turbocharged engine.',
    image: SubaruWRXImage,
    carDetails: {
      engine: '2.0L Turbocharged Boxer Engine',
      horsepower: '280 HP',
      topSpeed: '240 km/h',
      zeroTo100: '6 seconds',
    },
    driverBio:
      'Bunta Fujiwara is the father of Takumi and one of the best street racers. Although he is often seen as a mentor to Takumi, Bunta is a seasoned racer in his own right.',
  },
  {
    id: 5,
    name: "Iketani's Nissan S13 Silvia",
    description: 'A popular car in street racing, with strong handling and a solid engine.',
    image: NissanS13Image,
    carDetails: {
      engine: 'SR20DET Inline-4 Turbo Engine',
      horsepower: '200 HP',
      topSpeed: '210 km/h',
      zeroTo100: '7 seconds',
    },
    driverBio:
      'Iketani is one of the racers from the Akina Speed Stars. He is known for being the more calm and collected member, yet still enthusiastic about racing.',
  },
  {
    id: 6,
    name: "Nakazato's Nissan R32 GTR",
    description: 'A legendary Nissan GT-R, known for its speed and handling in motorsports.',
    image: NissanGTRImage,
    carDetails: {
      engine: 'RB26DETT Inline-6 Turbo Engine',
      horsepower: '280 HP',
      topSpeed: '280 km/h',
      zeroTo100: '5.4 seconds',
    },
    driverBio:
      'Nakazato from the NightKids is known for his aggressive and skilled driving. He is a tough competitor and one of the strongest racers in the series.',
  },
  {
    id: 7,
    name: "Shingo's Honda Civic EG6",
    description: 'A quick and nimble front-wheel-drive car, often used in street racing.',
    image: HondaCivicImage,
    carDetails: {
      engine: 'B16A Inline-4 Engine',
      horsepower: '160 HP',
      topSpeed: '210 km/h',
      zeroTo100: '7.8 seconds',
    },
    driverBio:
      'Shingo is a young, cocky racer from the NightKids. He is known for his reckless driving and trash-talking style.',
  },
  {
    id: 8,
    name: "Mako's Nissan SilEighty",
    description:
      'A hybrid of the Nissan Silvia and Nissan 180SX, known for its good balance and handling.',
    image: NissanSilEightyImage,
    carDetails: {
      engine: 'SR20DET Inline-4 Turbo Engine',
      horsepower: '220 HP',
      topSpeed: '230 km/h',
      zeroTo100: '6.5 seconds',
    },
    driverBio:
      'Mako Sato is a skilled racer and member of Impact Blue, known for her smooth and calculated driving style. She is often seen racing alongside her partner, Sayuki, in the famous SilEighty.',
  },
];

export default function Home({ navigation }) {
  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
    <View style={styles.container}>
      {/* Logo and title */}
      <View style={styles.overlay} />
      <View style={styles.header}>
        <Image source={TitleLogo} style={styles.logo} />
        <Text style={styles.title}>Car List</Text>
      </View>

      <FlatList
        data={cars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.carItem}
            onPress={() =>
              navigation.navigate('Details', {
                name: item.name,
                description: item.description,
                image: item.image,
                carDetails: item.carDetails,
                driverBio: item.driverBio,
              })
            }
          >
            <Image source={item.image} style={styles.carImage} />
            <View style={styles.textContainer}>
              <Text style={styles.carName}>{item.name}</Text>
              <Text style={styles.carDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 150, // Adjust logo width
    height: 50, // Adjust logo height
    marginRight: 8, // Space between logo and title
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  carItem: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
    alignItems: 'center',
  },
  carImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carDescription: {
    fontSize: 14,
    color: '#777',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire screen
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
  },
});
