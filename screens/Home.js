
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TradeStation_Actual from '../components/TradeStation_Actual';
import HeaderHelper from '../components/HeaderHelper';


const Home = () => {

    return (
        <SafeAreaView >
            <View style={styles.Container}>
                <View>
                    <HeaderHelper></HeaderHelper>
                </View>

                <View style={styles.ActualTradeStation}>
                    <TradeStation_Actual />
                </View>
                
            </View>



        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'red',
        alignContent: 'center',
        justifyContent: 'center',
    },
    ActualTradeStation: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
    },

});

export default Home;
