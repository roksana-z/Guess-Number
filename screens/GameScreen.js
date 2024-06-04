import {  Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import { useState, useEffect, memo, useCallback } from "react";
import Card from "../components/Card";
import {Ionicons} from "@expo/vector-icons"


let minBoundary = 1
let maxBoundary = 100

function GameScreen({enteredNumber, gameOverHandler}) {
    const generateRandonNumber = (min, max, exclude) => {
        if (min === max) return exclude
        console.log('generate random')
        const rndNumb = Math.floor(Math.random() * (max - min)) + min;
    
        if (rndNumb === exclude) {
            return generateRandonNumber(min, max, exclude)
        } 
        return rndNumb
    }

    const rndNumb = generateRandonNumber(minBoundary, maxBoundary, enteredNumber)
    const [currentGuess, setCurrentGuess] = useState(rndNumb)

    useEffect(() => {
        console.log(currentGuess, enteredNumber)
        if (currentGuess == enteredNumber) {

            gameOverHandler()
        }
    }, [currentGuess, enteredNumber, guessHandler])

 

    function guessHandler(direction) {
        if ((direction === 'lower' && currentGuess < enteredNumber) ||
        (direction === 'higher' && currentGuess > enteredNumber)) {
            Alert.alert("Don't lie", "play honest", [{text: 'sorry!', style: 'cancel'}])
            return
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRndmNumb = generateRandonNumber(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndmNumb)
    }

    return (
        <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            <Title style={styles.currentGuess}>{currentGuess}</Title>
            <Card >
                <Text>Higher or lower</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.butonContainer}> 
                        <PrimaryButton onPress={guessHandler.bind(this, 'higher')}>
                            <Ionicons name="add" size={16} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.butonContainer}>
                        <PrimaryButton onPress={guessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={16} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                {/* log rounds */}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    currentGuess: {
       paddingVertical: 30
    },
    
    container: {
        margin: 20,
        gap: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    butonContainer: {
        flex: 1
    }
})

export default GameScreen;