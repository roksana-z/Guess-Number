import {View, Text, Pressable, StyleSheet} from 'react-native'
import Colors from '../constants/colors';

function PrimaryButton({children, onPress}) {


    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable  style={(pressedData) => pressedData.pressed ? [styles.buttonContainer, styles.pressed]: styles.buttonContainer} onPress={onPress}  android_ripple={{color: Colors.primary3}}>
                    <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 2,
        padding: 10,
        backgroundColor: Colors.primary2,
        overflow: 'hidden',
        
    },
    buttonText: {
        textAlign: 'center',
        color: Colors.text
    },
    buttonOuterContainer: {
        margin: 8,
        borderRadius: 28,
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.75
    }
})

export default PrimaryButton;