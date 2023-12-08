import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerGreeting}>Good Afternoon!</Text>
      <Text style={styles.headerDate}>Wednesday, December 6th.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 190,
    backgroundColor: '#375D7F',
    paddingTop: 100,
    paddingLeft: 20,
  },
  headerGreeting: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  headerDate: {
    color: '#E2E2E2',
    marginTop: 10,
    fontSize: 15,
  },
});

export default Header;
