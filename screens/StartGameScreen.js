import { TextInput, Text, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton"
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";

function StartGameScren({setPickedNumber}) {
    [inputNumber, setInputNumber] = useState('')

    function numberInputHandler(enteredText) {
        setInputNumber(enteredText)
    }

    function resetInputHandler() {
        setInputNumber('')
    }

    function confirmHandler() {
        if (inputNumber.length === 0) {
            Alert.alert('Empty input', 'type number',
             [{test: 'Okay', style: 'default', onPress: resetInputHandler}])
            return
        }
        setPickedNumber(inputNumber)
    }

    return (
        <View style={styles.container}>
            <Title>Guess my Number</Title>
            <Card>
                <Text style={styles.cardTitle}>Enter a Number</Text>
                <TextInput value={inputNumber} onChangeText={numberInputHandler} maxLength={2} style={styles.textInput} keyboardType="number-pad" />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>  
                </View>
                </View>
            </Card>
        </View>
            )


}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        alignItems: 'stretch',
    },
    cardTitle: {
        fontSize: 24,
        color: Colors.text
    },
    textInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 2,
        color: Colors.secondary,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})

export default StartGameScren;