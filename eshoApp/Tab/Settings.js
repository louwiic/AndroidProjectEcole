import React from 'react';
import { Image, View, Text, StyleSheet, Button, Left, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  DrawerItems
} from 'react-navigation';

class Settings extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello page settings</Text>
      </View>
    );
  }
}

export default Settings;





