import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Route3Econ from './Route3Econ';
import Route4Econ from './Route4Econ';


//<Route4Econ></Route4Econ>
const HeaderHelper = () => {
    return (
        <View style={styles.Contenedor}>
            <View style={styles.PreviousContainer}>
                <Text>Estación anterior</Text>
            </View>
            <View style={styles.RouteContainer}>
                <Route3Econ></Route3Econ>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Contenedor: {
        backgroundColor: 'yellow',
        flexDirection: 'row',
        padding: 10,
    },
    PreviousContainer: {
        flex: 1,

    },
    RouteContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    
    

});

export default HeaderHelper;