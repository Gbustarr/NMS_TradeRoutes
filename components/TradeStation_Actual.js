import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { ImageAssets } from '../images/ImageAssets';


const TradeStation_Actual = () => {

    return (
        <View style={styles.Card}>
            <View style={styles.IconContainer}>

                <Image source={ImageAssets.Econ_Comercio} style={styles.Icon}></Image>
                <Text style={styles.EconomyLevelText}> Comercio </Text>
            </View>
            <View style={styles.CircleContainer}>
                <View style={styles.Circle1}></View>
                <View style={styles.Circle2}></View>
                <View style={styles.Circle3}></View>
            </View>
            <View style={styles.InfoContainer}>
                <Text style={styles.InfoTitleText}>Base Oxford</Text>
                <Text style={styles.InfoSubTitleText}>Rico</Text>
            </View>
            <View style={styles.ButtonsContainer}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={{ textAlign: 'center',fontSize:11 }}>Editar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, }}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={{ textAlign: 'center' }}>Registrar Visita</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )

};
//Colors:
//Cientifica: #3e46cc
//Comercio: #3e46cc
//Materiales Avanzados: #7c367d
//Mineria: #fe7f25
//Fabricación: #fe7f25
//Generación de energias: #fe7f25
//Tecnologia: #fe7f25

const styles = StyleSheet.create({
    Card: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: '#3e46cc',
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
    Button: {
        padding: 1,
        backgroundColor: 'rgb(200,200,200)',
        borderRadius: 2,
        elevation: 5,
        color: 'black',


    },
    Circle1: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: "green",
        elevation: 5,
    },
    Circle2: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: "green",
        elevation: 5,
    },
    Circle3: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: "green",
        elevation: 5,
    },
    Icon: {

        height: 80,
        width: 80,
    },
    EconomyLevelText: {
        textAlign: 'center',
        color: 'white',
    },
    InfoTitleText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
    InfoSubTitleText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
    },

});

export default TradeStation_Actual;