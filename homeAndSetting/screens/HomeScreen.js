import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

import { WidgetModalScreen } from '../components/WidgetModal';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <View style={styles.headerPage}>
        <View style={styles.item} />
        <View style={styles.item}><Text style={styles.baseTitle}>Widgets</Text></View>
        <View style={styles.item}>
          <WidgetModalScreen />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerPage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  item: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: "yellow"
  },
  baseTitle: {
    marginTop: '17%',
    marginBottom: '16%',
    fontSize: 25,
    color: '#1C3341',
    fontFamily: 'roboto',
  },
  imageButton: {
    aspectRatio: 0.5,
    resizeMode: 'contain'
    // resizeMode: 'contain'
  }
});
