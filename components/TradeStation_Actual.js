import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { ImageAssets } from '../images/ImageAssets';


const TradeStation_Actual = () => {

    return (
        <View style={styles.Card}>
            <View style={styles.IconContainer}>
                <Text style={styles.EconomyLevelText}> Rico </Text>
                <Image source={ImageAssets.Econ_Comercio} style={styles.Icon}></Image>
            </View>
            <View style={styles.CircleContainer}>
                <View style={styles.Circle1}></View>
                <View style={styles.Circle2}></View>
                <View style={styles.Circle3}></View>
            </View>
            <View style={styles.InfoContainer}>
                <Text style={styles.InfoTitleText}>BASE 1</Text>
                <Text style={styles.InfoSubTitleText}>Comercio</Text>
            </View>
            <View style={styles.ButtonsContainer}>
                <Button title='Registrar Visita' >

                </Button>

            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    Card: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: 'red',
        height: 130,
        flexDirection: 'row',
    },
    IconContainer: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'lightblue',
        //height: 110,
        //width: 100,
        borderWidth: 1,
        borderColor: 'black',
    },
    CircleContainer: {
        flex: 1,
        flexDirection: 'column',
        //width: 30,
        //height: 110,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    
    InfoContainer: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        //width: 200,
        //height: 110,
        backgroundColor: 'orange',
    },
    ButtonsContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        flexDirection: 'column',
        //width: 30,
        //height: 110,
        backgroundColor: 'green',
    },
    Circle1: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: "red",
    },
    Circle2: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: "red",
    },
    Circle3: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: "red",
    },
    Icon: {

        height: 80,
        width: 80,
    },
    EconomyLevelText: {
        textAlign: 'center',
    },
    InfoTitleText: {
        textAlign: 'center',
        fontSize: 20,
    },
    InfoSubTitleText: {
        textAlign: 'center',
        fontSize: 15,
    },

});

export default TradeStation_Actual;