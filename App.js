import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";
import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "59fd839806a34ceafc609b2f8ffb328e";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({isLoading: false, temp: data.main.temp });
  };

  getLocation = async() => {
    try{
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      // Send to API and get weather!
      this.getWeather(latitude, longitude);
    } catch(error){
        Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount(){
    this.getLocation();
  } 
  render(){
    const { isLoading, temp } = this.state;
    return isLoading? <Loading />: <Weather temp={Math.round(temp*10)/10}/>;
  }
}
