import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Navigator,
    Left,
    TouchableOpacity,
} from "react-native";
import { Button, Right, Icon } from 'native-base';


class CompteScreen extends React.Component {
    constructor(props) {
        super(props);

        // Props are now accessible from here

    }

    //Barre de navigation
    static navigationOptions = ({ navigation }) => {
        return {

            headerRight: (
              <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
                 <Icon type="AntDesign" name="solution1" style={{ fontSize: 25, color: '#282828', marginRight: 10 }} />
              </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('ProfilMenu')}>
                    <Icon type="AntDesign" name="solution1" style={{ fontSize: 25, color: '#282828', marginRight: 10 }} />
                </TouchableOpacity>
            )

        };
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: 'blue' }}>
                    <Image source={require('./../assets/multimedia.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                </View>

                <View style={styles.ButtonCreation}>
                    <Button block rounded infos style={{
                        width: '100%',
                        justifyContent: 'center',

                    }}>
                        <Text>Ajouter un produit</Text>

                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ButtonCreation: {
        backgroundColor: '#F0F0F0',
        flex: 2,
        justifyContent: 'center',

    }

})

export default CompteScreen;