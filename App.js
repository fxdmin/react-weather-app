import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";
import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "59fd839806a34ceafc609b2f8ffb328e";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      console.log(data);
  };

  getLocation = async() => {
    try{
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      // Send to API and get weather!
      this.getWeather(latitude, longitude);
      this.setState({isLoading: false });
    } catch(error){
        Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount(){
    this.getLocation();
  } 
  render(){
    const { isLoading } = this.state;
    return isLoading? <Loading />: null;
  }
}
