import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    // height: '100%',
    paddingTop: 30,

  },
  boxOne: {
    // flex: 1,
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    // flex: 2,
    backgroundColor: 'gold',
    padding: 20,
    // alignSelf: 'flex-end',
  },
  boxThree: {
    // flex: 1,
    backgroundColor: 'coral',
    padding: 10,
  },
  boxFour: {
    // flex: 3,
    backgroundColor: 'skyblue',
    padding: 30,
    // alignSelf: 'flex-start',
  }
});