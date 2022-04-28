import React from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';

const Button = ({onPress, title, type}) => {
  const backgroundColor = type === 'primary' ? '#000000' : '#ffffff';
  const color = type === 'primary' ? '#ffffff' : '#000000';

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.container, {backgroundColor}]}>
        <Text style={[styles.text, {color}]}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    borderRadius: 24,
    padding: 16,
    marginVertical: 8,
  },
  text: {
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
