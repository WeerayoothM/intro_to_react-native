import React from 'react'
import { View, Text,Image, StyleSheet } from 'react-native'

function Header(props) {
    return (
        <View style={styles.header} >
            <Text style={styles.text} >{props.title}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:60,
        padding:15,
        backgroundColor:'cornflowerblue'
    },
    text:{
        color :'#fff',
        fontSize:24,
        textAlign:'center'
    }
})

Header.defaultProps ={
    title:'My Books List'
}
export default Header
