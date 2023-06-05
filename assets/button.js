import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,Alert

} from "react-native";

export default function Button({btnLabel,Press}) {
    // const [fontLoaded, setFontLoaded] = useState(false);
    // const loadFonts = async () => {
    //     await Font.loadAsync({
    //         'inter': require('../assets/Inter/static/Inter-Regular.ttf'),
    //     });
    //     setFontLoaded(true);
    // };
    // if (!fontLoaded) {
    //     return (
    //         <AppLoading
    //             startAsync={loadFonts}
    //             onFinish={() => setFontLoaded(true)}
    //             onError={console.warn}
    //         />
    //     );
    // }
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={Press}
        >
            <Text style={styles.buttonText}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.63)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 100
    },
    buttonText: {
        color: '#24ff00',
        fontSize: 25,
        fontWeight: 500,
        // fontFamily: 'inter'
    },
})
