import React from 'react';
import { Image, View, Text, StyleSheet, Button, Left, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import { Icon } from 'native-base'
import CatalogueScreen from './MyScreen/CatalogueScreen';
import CompteScreen from './MyScreen/CompteScreen';
import HomeScreen from './MyScreen/Home/HomeScreen';
import ProfileMenuScreen from './MyScreen/ProfileMenuScreen'


/*
    Un stack navigator permet de définir les différentes pages
    de navigation entre les écrans
*/
const HomeNavigator = createStackNavigator({
    Home: HomeScreen,
    Compte: CompteScreen

}, {
        //configuration options...
    });

const CompteNavigator = createStackNavigator({
    Compte: CompteScreen,
    ProfilMenu: ProfileMenuScreen
}, {
        //configuration options...
    });

/*
    Navigation du bas (affiche le menu du bas)
    Qui contient les stackNavigator (navigation entre écran)
*/

const AppTabNavigator = createBottomTabNavigator({
    Home: HomeNavigator,
    Compte: CompteNavigator,
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;

                console.log(routeName);
                /*return <Image style={{
                  width: 24,
                  height: 24,
                }} source={IC_MASK}/>;*/

                //let IconComponent = Ionicons;
                let iconName;
                let iconeType;             
                switch (routeName) {

                    case 'Home':
                        iconeType = 'MaterialCommunityIcons';
                        iconName = `home${focused ? '' : '-outline'}`;
                        iconColor = '{{ color: `blue`}}';
                        break;

                    case 'Catalogue':
                        iconName = `clipboard-text${focused ? '' : '-outline'}`;

                        break;

                }

                // You can return any component that you like here!
                return <Icon name={iconName} type={iconeType} size={25} color={tintColor} />;

            },
        }),
        tabBarOptions: {
            activeTintColor: '#565346',
            activeBackgroundColor: '#f9f9f9',
            inactiveTintColor: 'gray',
        },

    });

export default AppContainer = createAppContainer(AppTabNavigator);