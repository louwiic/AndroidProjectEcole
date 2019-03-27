import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Navigator
  } from "react-native";
import { Button } from 'react-native-elements';
class CatalogueScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>Go to Home Screen</Text>
                
                <Button 
                        title="click me"
                        onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}

export default CatalogueScreen;