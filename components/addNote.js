import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import {React,useState} from 'react'

export default function addNote({submitHandler}) {

    const [title,setTitle]= useState('');
    const [content,setContent]=useState('');
    const [date,setDate]=useState('')

    const titleHandler = (val)=>{
        setTitle(val)
    }
    const contentHandler =(val)=>{
        setContent(val)
    }
    const dateHandler=(val)=>{
        setDate(val)
    }

    return (
        <View>
            <Text style={styles.title}>Add Note</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='enter title...'
                    onChangeText={titleHandler}
                />
                <TextInput
                    style={styles.input}
                    placeholder='enter content...'
                    onChangeText={contentHandler}
                />
                <TextInput
                    style={styles.input}
                    placeholder='enter date...'
                    onChangeText={dateHandler}
                />
            </View>
            <Button onPress={()=> submitHandler(title,content,date)} title='add note' color ='crimson'/>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        margin:4,
    },
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },
})