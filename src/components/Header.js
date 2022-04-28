import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
        resizeMode="contain"
      />
      <Image
        style={styles.menu}
        source={require('../assets/images/menu.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    top: 50,
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
  },
  menu: {
    width: 25,
    height: 25,
  },
});
