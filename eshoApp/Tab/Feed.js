import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Navigator
} from "react-native";

import { Container, Card, Title, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Header, Item, Input, Content, List, ListItem, } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { SearchBar, Avatar } from 'react-native-elements';
import DetailsScreen from '../Components/Screens/DetailsScreen'
import Home from '../Components/Screens/Home/Home'



class Feed extends React.Component {

    static navigationOptions = {
        title: 'Feed'
      };
    

    render() {

        return (
            <View>
                <Text>Hello Feed</Text>
            </View>
        )
    }

}

export default Feed

