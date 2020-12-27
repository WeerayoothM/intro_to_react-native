import React, { useState } from 'react';
import { View, Text,FlatList, StyleSheet ,Alert} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import uuid from 'uuid-random'
import AddItem from './components/AddItem'
const App = () => {

  const [items, setItems] = useState([
    {id : uuid(),text:"HTML"},
    {id : uuid(),text:"JavaScript"},
    {id : uuid(),text:"React"},
    {id : uuid(),text:"Node"},
  ]);

  const deleteItem =(id) =>{
    setItems(prevItems =>{
      return prevItems.filter(item=> item.id != id)
    })
  }

  const addItem = (text)=>{
    if (!text){
      Alert.alert('Error','กรุณาใส่ข้อมูล',{text:'OK'})
      return;
    }
    setItems(prevItems =>{
      return [{id : uuid(),text},...prevItems , ]
    })
  }

  return (

    <View style={styles.container}>
      <Header title="My Books List"/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => 
        <ListItem item ={item} deleteItem={deleteItem}/> }/>
    </View>


  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },

})


export default App;
