import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import Item from "./components/listItem";
import AddNote from "./components/addNote";
import Sandbox from "./components/sandbox";

export default function App() {
  const [notes, setNotes] = useState([
    {
      key: 1,
      title: "Course enrolement",
      content: "we've enrolled two times for the course",
      date: "12/12/2021",
    },
    {
      key: 2,
      title: "Interview preparation",
      content: "we've prepared for the interview",
      date: "12/12/2021",
    },
  ]);
  const pressHandler = (key) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.key != key);
    });
  };
  const submitHandler = (title, content, date) => {
    if (title.length != 0 && content.length != 0 && date.length != 0) {
      setNotes((prevNotes) => {
        return [
          { key: Math.random().toString(), title, content, date },
          ...prevNotes,
        ];
      });
    } else {
      Alert.alert("OOPS!", "Fill all the fields please...", [
        { text: "understood", onPress: () => console.log("closing") },
        { text: "info", onPress: () => console.log("info") },
      ]);
    }
  };
  return (
      // <Sandbox />
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddNote submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.key}
              data={notes}
              renderItem={({ item }) => (
                <Item item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
  },
  content: {
    flex:2,
    padding: 40,
    // backgroundColor:'grey',
  },
  list: {
    flex:1,
    marginTop: 20,
    // backgroundColor:'yellow',
  },
  item: {},
});
