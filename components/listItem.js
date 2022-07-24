import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons';

export default function listItem({item,pressHandler}) {

  return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
    <View style={styles.items}>
        <MaterialIcons name='delete' size={22} color='crimson' />
        <Text style={styles.itemText}>
            {item.title}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
        
    </View>
        
    </TouchableOpacity>
  )
}
const styles =StyleSheet.create({
    items:{
        padding:15,
        marginTop:15,
        borderColor:'crimson',
        borderWidth:1.5,
        borderStyle:'dashed',
        borderRadius:10,
        fontSize:18,
        flexDirection:'row',
    },
    itemText:{
        paddingLeft:10,
    },
    date:{
        color:'crimson',
        // backgroundColor:'orange',
        marginLeft:10,
        fontSize:15,
    },
})
