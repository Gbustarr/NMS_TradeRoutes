
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TradeStation_Actual from '../components/TradeStation_Actual';


const Home = () => {

    return (
        <SafeAreaView >

            <View style={styles.ActualTradeStation}>
                <TradeStation_Actual />
            </View>
            
  

        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    ActualTradeStation: {
        paddingTop: 100,
        height: 100,
        flexDirection: 'row',
    }
});

export default Home;
