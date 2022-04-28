import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
  Text,
} from 'react-native';

import Button from './Button';

const Product = ({
  name,
  tagline,
  taglineCTA,
  image,
  primaryButtonText,
  secondaryButtonText,
}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={image}
      resizeMode="cover">
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.tagline}>
          {tagline} <Text style={styles.taglineUnderline}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title={primaryButtonText} type="primary" onPress={null} />
        <Button title={secondaryButtonText} type="secondary" onPress={null} />
      </View>
    </ImageBackground>
  );
};

export default Product;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  details: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: 40,
  },
  tagline: {
    fontSize: 16,
    color: '#5c5e62',
  },
  taglineUnderline: {
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
});
