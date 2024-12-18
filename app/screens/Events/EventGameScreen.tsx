import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EventGameScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/event1.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        <Image
          source={require('../../assets/sports.png')}
          style={styles.sportImg}
        />
        <ImageBackground
          source={require('../../assets/sticker.png')}
          resizeMode={'cover'}
          style={styles.stickerImg}>
          <View style={styles.overlay}>
            <Text style={styles.text}>
              Не упустите шанспровести незабываемый вечер в веселой и дружеской
              атмосфере нашего ресторана!
            </Text>
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default EventGameScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    paddingBottom: 60,
  },
  sportImg: {
    position: 'absolute',
    left: -50,
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  stickerImg: {
    position: 'absolute',
    bottom: 100,
    left: 50,
    width: 350,
    height: 350,
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    position: 'absolute',
    bottom: 110,
    left: 100,
    width: '50%',
  },
});