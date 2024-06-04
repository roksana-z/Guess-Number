import { StyleSheet, View, Text  } from 'react-native';
import Colors from '../constants/colors';


function Title({children, style}) {
    return (
        <View style={[styles.outerContainer]}>
            <View style={[styles.container, style]} >
                <Text style={styles.text}>{children}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        alignItems: 'center',
    },
    container: {
        padding: 10,
        paddingHorizontal: 50,
        borderWidth: 5,
        borderColor: Colors.primary,
    },
    text: {
        color: Colors.primary,
        fontSize: 24,
        fontWeight: 'bold',
    }
})

export default Title;