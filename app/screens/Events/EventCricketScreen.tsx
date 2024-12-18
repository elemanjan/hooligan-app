import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../styles/colors.ts';

const EventCricketScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/event3.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Крикетный день</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Погрузитесь в мир увлекательных крикетных матчей в атмосфере,
            созданной специально для любителей этой игры, и насладитесь
            изысканными блюдами!
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default EventCricketScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)', // Полупрозрачный фон
  },
  container: {
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    color: COLORS.secondary,
    fontWeight: '600',
  },
  titleContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 16,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  textContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    padding: 12,
    paddingVertical: 8,
  },
});