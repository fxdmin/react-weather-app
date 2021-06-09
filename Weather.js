import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function Weather({temp}){
    return(
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <Ionicons size={96} name="cloud-outline" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer}/>
        </View>
    );
}   

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    },
    temp:{
        fontSize: 42
    },
    halfContainer: {
        flex:1,
        justifyContent :"center",
        alignItems: "center"
    }
});