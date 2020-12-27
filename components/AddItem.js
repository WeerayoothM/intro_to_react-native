import React ,{useState}from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button } from 'react-native'
const AddItem = ({addItem}) => {
    const [text,setText] =useState('')
    const onChange = textvalue => setText(textvalue)
    return (
        <View>
            <TextInput onChangeText={onChange} placeholder='Add Book...' style={styles.input}/>
            <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)}>
                <Text style={styles.btnText}>
                    {/* <Button title='+'/> */}
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16
    },
    btn:{
        backgroundColor:'darkgreen',
        padding:9,
        margin:5
    },
    btnText:{
        color:'skyblue',
        fontSize:20,
        textAlign:'center'
    }
})
