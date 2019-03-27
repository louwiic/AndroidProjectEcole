import React, { Component } from "react";
import { Font } from 'expo';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Navigator,
  TouchableOpacity,
  Dimensions
} from "react-native";
import CatalogueScreen from '../CatalogueScreen/'
import { Container, Card, Title, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Header, Item, Input, Content, List, ListItem, } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { SearchBar, Avatar } from 'react-native-elements';
import IconWithBadge from './IconWithBadge'


//badge panier
const PanierIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3}  />;
};

class Home extends React.Component {

  state = {
    fontLoaded: false,
  };


  componentDidMount() {
    Font.loadAsync({
      'Raleway': require('../../assets/fonts/Raleway/Raleway-Italic.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  //Barre de navigation
  static navigationOptions = ({ navigation }) => {
    return {

      Title: 'home',
      headerTitle: (
        <Image source={require('../../assets/shop.png')} style={{ width: 125, height: 50, marginLeft: 60 }} />

      ),
      //Heading style
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', '#68c7d0'),

      },
      headerTitleStyle: {
        fontSize: 23,
        fontFamily: 'Roboto',
      },
      //Heading text color
      headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
      headerRight: (
        <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
          <PanierIconWithBadge name='md-cart' size={30} />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Catalogue')}>
          <Ionicons style={{ marginTop: 10, marginLeft: 5, color: '#282828' }} name='ios-menu' size={30} />
        </TouchableOpacity>
      ),
    };
  };


  state = {
    search: '',
  };

  onClick = (e) => (
    console.log(e.target)
  )
  render() {

    const { search } = this.state;
    let screenWidth = Dimensions.get('window').width;
    let screenheight = Dimensions.get('window').height;
    return (
      <Container style={styles.container}>

        {/* Barre de recherche */}
        <View style={{ flex: 2 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <Item style={{ height: 40, width: 340, backgroundColor: 'white', borderRadius: 20 }}>
              <Icon style={{ marginLeft: 10 }} name="ios-search" />
              <Input placeholder="Trouver un produit..."
                onChangeText={this.updateSearch}
                value={search}
              />
            </Item>
          </View>

          {/* ScrollView Horizontal du menu */}
          <ScrollView style={{ flex: 1 }}>
            <ScrollView
              style={{ marginTop: 15 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                paddingStart: 5,
                paddingEnd: 5,

              }}
            >

              {/* Thumbnail du menu */}
              <TouchableOpacity onPress={() => alert('Open')}>
                <View style={{ marginLeft: 10 }}>
                  <Thumbnail style={{ marginHorizontal: 5, marginLeft: 10, borderColor: '#dee0df', borderWidth: 2, }}
                    source={require('../../assets/hdd.jpg')} />
                  <Text style={{ textAlign: 'center' }}>Piéce</Text>
                </View>
              </TouchableOpacity>

              <View style={{ marginLeft: 10 }}>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#dee0df', borderWidth: 2, }}
                  source={require('../../assets/print.png')} />
                <Text style={{ textAlign: 'center' }}>Périphérique</Text>
              </View>

              <View style={{ marginLeft: 10 }}>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#dee0df', borderWidth: 2, }}
                  source={require('../../assets/smartphone.png')} />
                <Text style={{ textAlign: 'center' }}>Portables</Text>
              </View>

              <View style={{ marginLeft: 10 }}>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#dee0df', borderWidth: 2, }}
                  source={require('../../assets/pc.png')} />
                <Text style={{ textAlign: 'center' }}>Ordinateur</Text>
              </View>

              <View style={{ marginLeft: 10 }}>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#dee0df', borderWidth: 2, }}
                  source={require('../../assets/network.jpg')} />
                <Text style={{ textAlign: 'center' }}>Réseaux</Text>
              </View>

              <View style={{ marginLeft: 10 }}>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#dee0df', borderWidth: 2, }}
                  source={require('../../assets/accesoire.png')} />
                <Text style={{ textAlign: 'center' }}>Accesoires</Text>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Thumbnail style={{ marginHorizontal: 5, borderColor: '#dee0df', borderWidth: 2, }}
                  source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
                <Text style={{ textAlign: 'center' }}>example uri</Text>
              </View>

            </ScrollView>

            {/* Card 1 */}
            <View style={{ marginTop: 20, flex: 1, justifyContent: 'space-around', flexDirection: 'row' }}>
              <Card>
                <CardItem cardBody>
                  <Image key={{ 'id': 1 }} source={require('../../assets/pc.jpg')} style={{ justifyContent: 'center', alignItems: 'center', width: 300, height: 300 }} />
                </CardItem>
                <CardItem footer>
                  <Text>Asus ZenBooks</Text>
                </CardItem>
              </Card>
            </View>

            {/* Card 2 */}
            <View style={{ marginTop: 20, flex: 1, justifyContent: 'space-around', flexDirection: 'row' }}>

              <Card>
                <CardItem cardBody>
                  <Image source={require('../../assets/ecran.jpg')} style={{ justifyContent: 'center', alignItems: 'center', width: 300, height: 300 }} />
                </CardItem>
                <CardItem footer>
                  <Text>Ecran AOC 27"</Text>
                </CardItem>
              </Card>
            </View>

            {/*Card aligné */}
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <View style={{ width: 150, height: 200, marginLeft: 10, marginRight: 10 }}>
                <Card>
                  <CardItem cardBody>
                    <Image source={require('../../assets/product1.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                  <CardItem footer>
                    <Text>GeekyAnts</Text>
                  </CardItem>
                </Card>
              </View>

              <View style={{ width: 150, height: 200, marginLeft: 10, marginRight: 10 }}>
                <Card>
                  <CardItem cardBody>
                    <Image source={require('../../assets/product1.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                </Card>
              </View>

            </View>

          </ScrollView>


        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',

  }

})
export default Home;