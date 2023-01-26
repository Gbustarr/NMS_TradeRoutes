import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { ImageAssets } from '../images/ImageAssets';


const TradeStation_Actual = () => {

    return (
        <TouchableOpacity style={styles.Card}>

                <View style={styles.IconContainer}>
                    <Image source={ImageAssets.Econ_Tecnologia} style={styles.Icon}></Image>
                </View>
                <View style={styles.CircleContainer}>
                    <View style={styles.Circle1}></View>
                    <View style={styles.Circle2}></View>
                    <View style={styles.Circle3}></View>
                </View>
                <View style={styles.InfoContainer}>
                    <Text style={styles.InfoTitleText}>Base Andromeda</Text>
                </View>
                <View style={styles.ButtonsContainer}>
                </View>
          
        </TouchableOpacity>
    )

};
//Colors:
//Cientifica: #3e46cc
//Comercio: #3e46cc
//Materiales Avanzados: #7c367d
//Mineria: #fe7f25
//Fabricación: #fe7f25
//Generación de energias: #fe7f25
//Tecnologia: #9ad9ea

const styles = StyleSheet.create({
    Card: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        height: 130,
        flexDirection: 'row',
        elevation: 10,
        borderRadius: 5,

    },
    IconContainer: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        //backgroundColor: 'lightblue',
        //height: 110,
        //width: 100,
        //borderWidth: 1,
        //borderColor: 'black',
        elevation: 2,

    },
    CircleContainer: {
        flex: 1,
        flexDirection: 'column',
        //width: 30,
        //height: 110,
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },

    InfoContainer: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        //width: 200,
        //height: 110,
        //backgroundColor: 'orange',
    },
    ButtonsContainer: {
        flex: 2,
        flexDirection: 'column',
        //width: 30,
        //height: 110,
        //backgroundColor: 'green',
    },
    
    Circle1: {
        width: 5,
        height: 5,
        borderRadius: 5 / 2,
        backgroundColor: "gray",
        elevation: 5,
    },
    Circle2: {
        width: 5,
        height: 5,
        borderRadius: 5 / 2,
        backgroundColor: "gray",
        elevation: 5,
    },
    Circle3: {
        width: 5,
        height: 5,
        borderRadius: 5 / 2,
        backgroundColor: "red",
        elevation: 5,
    },
    Icon: {

        height: 20,
        width: 20,
    },
    
    InfoTitleText: {
        textAlign: 'center',
        fontSize: 10,
        color: 'black',
    },
    InfoSubTitleText: {
        textAlign: 'center',
        fontSize: 8,
        color: 'black',
    },

});

export default TradeStation_Actual;