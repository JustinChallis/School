import React, { useEffect, useState, useRef} from "react";
import { View, Text, ScrollView, Image} from 'react-native';
import { styles, width, height } from '../styles/globalStyles';
import {charLocation} from "../assets/data";

export default function HomeScreen() {
    // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const images = [
    require('../assets/superman.png'),
    require('../assets/batman1.jpg'),
    require('../assets/joker.jpg'),
    require('../assets/spiderman.png'),
    require('../assets/doom.jpg'),
    require('../assets/octo.jpg'),
    require('../assets/strange.jpg'),
    require('../assets/poivy.jpg'),
    require('../assets/captain.jpg'),
    require('../assets/pin.png'),
  ];

  useEffect(() => {
    // Set up an interval to change the image index every 1 second
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image when reaching the end
    }, 2000); // 2 second interval

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, [images.length]);

  // Scroll to the current image when the index changes
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: currentIndex * width, animated: true }); 
    }
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        ref={scrollViewRef}
      >
        {/* Images */}
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} resizeMode="contain" />
        ))}
      </ScrollView>

      {/* Centered Title */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Comicy</Text>
        <Text style={styles.subheader}>The Ultimate Comic Character Encyclopedia</Text>
      </View>
    </View>
  );
}