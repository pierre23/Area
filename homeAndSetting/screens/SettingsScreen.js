import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SubscribePopup } from '../components/subscribePopup'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props)
    this.state = {
      popUp: {
        name: '',
        key: 0,
        isOpen: false,
        logo: '',
        field: [],
        callBack: ''
      },
      closePopUp: false
    }
  }

  onPress(item) {
    if (!this.state.popUp.isOpen.false) {
      this.setState({
        popUp:
        {
          name: item.name,
          key: this.state.popUp.key + 1,
          isOpen: true,
          logo: item.logo,
          field: item.field,
          callBack: item.callBack
        },
        closePop: false
      });
    }
  }

  closePopUp() {
    console.log("close function");
    this.setState({
      popUp: {
        key: 0,
        isOpen: false,
        logo: '',
        field: [],
        callBack: ''
      },
    })
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer} containerViewStyle={{borderRadius:25}}>
        <TouchableOpacity style={styles.item} onPress={() => this.onPress(item)}>
          <Image style={styles.imageItem} source={{ uri: item.logo }}></Image>
        </TouchableOpacity>
      </View>
    );
  };

  render() {

    var productList = [];

    if (this.state.popUp.isOpen == true) {

      productList.push(
        <View key={this.state.popUp.key * 1000} style={ styles.backgroundPopUp }></View>
      )
      productList.push(
          <SubscribePopup name={this.state.popUp.name} key={this.state.popUp.key} logo={this.state.popUp.logo} content={this.state.popUp.field} closed={this.closePopUp.bind(this)}></SubscribePopup>
      );
    }

    return (
      <View style={styles.background}>
        <Text style={styles.baseTitle}>Manage Your Services</Text>
        <FlatList
          data={[{ key: 'a', name: "Twitter", field: ["Username", "Email", "Password"], logo: "https://blog.internet-formation.fr/wp-content/uploads/2015/09/logo-twitter-design-600x112.png" },
          { key: 'b', name: "Epitech", field: ["Username", "Email", "Password"], logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Epitech.png" },
          { key: 'c', name: "Gmail", field: ["Username", "Email", "Password"], logo: "http://casaveneziausa.com/wp-content/uploads/parser/gmail-logo-1.png" },
          { key: 'd', name: "Weather", field: ["Username", "Email", "Password"], logo: "https://images-eu.ssl-images-amazon.com/images/I/41wkG24yDkL.png" },
          { key: 'e', name: "twitter", field: ["Username", "Email", "Password"], logo: "https://blog.internet-formation.fr/wp-content/uploads/2015/09/logo-twitter-design-600x112.png" },
          { key: 'f', name: "twitter", field: ["Username", "Email", "Password"], logo: "https://blog.internet-formation.fr/wp-content/uploads/2015/09/logo-twitter-design-600x112.png" },
          { key: 'g', name: "twitter", field: ["Username", "Email", "Password"], logo: "https://blog.internet-formation.fr/wp-content/uploads/2015/09/logo-twitter-design-600x112.png" }]}
          renderItem={this.renderItem}
          numColumns={2}
        />
        {productList}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  backgroundPopUp: {
    opacity: 0,
    backgroundColor: 'yellow',
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  baseTitle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
    color: '#1C3341',
    textAlign: 'center',
    fontFamily: 'roboto'
  },
  background: {
    backgroundColor: '#6bb983',
    flex: 1
  },

  itemContainer: {
    flex: 1,
    paddingBottom: 40,
    alignItems: 'center',
    width: Dimensions.get('screen').width / 2,
    justifyContent: 'center'
  },

  item: {
    flex: 1,
    alignItems: 'center',
    width: ((Dimensions.get('window').width / 2) / 6) * 4,
    height: ((Dimensions.get('window').width / 2) / 6) * 4,
    backgroundColor: '#1C3341',
    justifyContent: 'center'
  },
  imageItem: {
    flex: 1,
    alignSelf: 'stretch',
    // alignItems: 'center',
    // width: undefined,
    // height: undefined,
    resizeMode: 'contain',
    justifyContent: 'center'
  },
  logout: {
    fontSize: 15,
    color: '#1c3341',
    textAlign: 'left',
    paddingLeft: 5,
    fontFamily: 'roboto'
  }
})

