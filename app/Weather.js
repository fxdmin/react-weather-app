import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient:["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle : "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient:["#89F7FE", "#66A6FF"],
        title : "Drizzle",
        subtitle : "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient:["#00C6FB", "#005BEA"],
        title:"Rain",
        subtitle : "Take your umbrella"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient:["#7DE2FC", "#B9B6E5"],
        title : "Snow",
        subtitle : "Do you wanna build a snowman?"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient:["#89F7FE", "#66A6FF"],
        title:"Atmosphere",
        subtitle:"Atmosphere"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient:["#FF7300", "#FEF253"],
        title : "Sunny",
        subtitle : "It's a lovely day!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient:["#D7D2CC", "#304352"],
        title : "Clouds",
        subtitle : "It's gloomy"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient:["#4DA0B0", "#D39D38"],
        title : "Haze",
        subtitle : "Just don't go outside"
    },
    Mist: {
        iconName: "weather-fog",
        gradient:["#4DA0B0", "#D39D38"],
        title : "Mist",
        subtitle : "It's like you have no glasses on."
    },
    Smoke: {
        iconName: "weather-fog",
        gradient:["#4DA0B0", "#D39D38"],
        title : "Smoke",
        subtitle : "The situation is very unclear"
    },
    Dust: {
        iconName: "weather-fog",
        gradient:["#4DA0B0", "#D39D38"],
        title : "Dust",
        subtitle : "Thanks a lot China"
    },
    Fog: {
        iconName: "weather-fog",
        gradient:["#4DA0B0", "#D39D38"],
        title : "Fog",
        subtitle : "It's like you have no glasses on."
    },
    Sand: {
        iconName: "weather-fog",
        gradient:["#4DA0B0", "#D39D38"],
        title : "Sand",
        subtitle : ""
    }
};

export default function Weather({temp, condition}){
    return(
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                size={96}
                name={weatherOptions[condition].iconName} 
                color="white"
                />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
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
        "Sand"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    temp:{
        fontSize: 42,
        color:"white"
    },
    halfContainer: {
        flex:1,
        justifyContent :"center",
        alignItems: "center"
    },
    title: {
        color : "white",
        fontSize : 44,
        fontWeight : "300",
        marginBottom :10,
        textAlign : "left"
    },
    subtitle: {
        fontWeight: "600",
        color : "white",
        fontSize :24,
        textAlign: "left"
    },
    textContainer: {
        paddingHorizontal: 50,
        alignItems : "flex-start",
        justifyContent: "center",
        flex:1
    }
});