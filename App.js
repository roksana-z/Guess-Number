import { StyleSheet, ImageBackground, SafeAreaView  } from 'react-native';
import StartGameScren from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import { useState } from "react";
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState('')
  const [gameIsOver, setGameIsOver] = useState(true)

  function pickedNumberHandler(pickedNumber) {
    setPickedNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler() {
    setGameIsOver(true)
  }

  let screen = <StartGameScren setPickedNumber={pickedNumberHandler} />

  if (pickedNumber) {
    screen = <GameScreen gameOverHandler={gameOverHandler} enteredNumber={pickedNumber}/>
  }

  if (gameIsOver && pickedNumber) {
    console.log('game over')
    screen = <GameOverScreen />
  }
 

  return (
      <LinearGradient colors={['#a7be5c2f', 'yellow']} style={styles.container}>
        <ImageBackground imageStyle={styles.imageStyle} style={styles.container}
         resizeMode='cover' source={require('./assets/riho-kroll-m4sGYaHYN5o-unsplash.jpg')}>
          <SafeAreaView >{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15
  },
});
