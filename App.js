
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class FaceAPI extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { Alert.alert('Foto 1', '') }}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          <Text>Select a Photo</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { Alert.alert('Foto 2', '') }}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text>Select a Video</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});

AppRegistry.registerComponent('FaceAPI', () => FaceAPI);
