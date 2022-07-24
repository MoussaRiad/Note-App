import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

export default function Header(){
    return (
        <View style={styles.head}>
            <Text style={styles.title}>Noti</Text>
        </View>
    );
}
    const styles = StyleSheet.create({
        head:{
            height:80,
            paddingTop:30,
            backgroundColor:'crimson',
        },
        title:{
            fontSize:25,
            fontWeight:'bold',
            textAlign:'center',
            color:'#fff',
        },
    })
