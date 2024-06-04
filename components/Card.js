import { View, StyleSheet } from "react-native"
import Colors from "../constants/colors"

function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginHorizontal: 28,
        borderRadius: 8,
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primary,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 2 , height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})

export default Card