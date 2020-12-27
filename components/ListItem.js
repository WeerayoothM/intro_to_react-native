import React from 'react';
import { View, Text,Button,TouchableOpacity, StyleSheet } from 'react-native';

function ListItem({item,deleteItem}) {
    return (
        <TouchableOpacity style={styles.listItem} >
            <View style={styles.listItemView} >
                <Text style={styles.listItemText}>{item.text}</Text>
                <Button title='X' color='firebrick' onPress={()=>deleteItem(item.id)}/>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee'
    },
    listItemView:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    listItemText:{
        fontSize:18
    }
})

export default ListItem
