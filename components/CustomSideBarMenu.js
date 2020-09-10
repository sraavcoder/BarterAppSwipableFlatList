import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer'

import firebase from 'firebase';

export default class CustomSideBarMenu extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props} />
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
            onPress={() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
            }}>
            <Text style={styles.logOutText} >Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerItemsContainer: {
    flex: 0.8
  },
  logOutContainer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  logOutButton: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  logOutText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f65c5c'
  }
})
