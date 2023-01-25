import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { ImageAssets } from '../images/ImageAssets';

const Route3Econ = () => {
    return (
        <View style={styles.RouteContainer}>
            <Image source={ImageAssets.Econ_Comercio} style={styles.IconEconomyRoute}></Image>
            <View style={styles.Triangle}></View>
            <View>
                <Image source={ImageAssets.Econ_MaterialesAvanzados} style={styles.IconEconomyRoute}></Image>
            </View>
            <View style={styles.Triangle}></View>
            <View>
                <Image source={ImageAssets.Econ_Cientifico} style={styles.IconEconomyRoute}></Image>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    RouteContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    IconEconomyRoute: {
        height: 40,
        width: 40,
    },
    Triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
        transform: [{ rotate: "90deg" }],
    },
})

export default Route3Econ;