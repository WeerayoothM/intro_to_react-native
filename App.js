import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'uuid-random';
import AddItem from './components/AddItem';
import {useLocalObservable, useLocalStore} from 'mobx-react-lite';

const createBooksStore = () => {
  return {
    title: 'My Books List',
    books: [
      {id: uuid(), text: 'HTML'},
      {id: uuid(), text: 'JavaScript'},
      {id: uuid(), text: 'Reactkjs'},
      {id: uuid(), text: 'Nodejs'},
    ],
    deleteItem(id) {
      this.books = this.books.filter((item) => item.id != id);
    },
  };
};
export const BooksStoreContext = React.createContext(null);

const App = () => {
  console.log('App');
  const [items, setItems] = useState([
    {id: uuid(), text: 'HTML'},
    {id: uuid(), text: 'JavaScript'},
    {id: uuid(), text: 'React'},
    {id: uuid(), text: 'Node'},
  ]);
  const booksStore = useLocalObservable(createBooksStore);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'กรุณาใส่ข้อมูล', {text: 'OK'});
      return;
    }
    setItems((prevItems) => {
      return [{id: uuid(), text}, ...prevItems];
    });
  };

  return (
    <BooksStoreContext.Provider value={booksStore}>
      <View style={styles.container}>
        <Header title="My Books List" />
        <AddItem addItem={addItem} />
        <ListItem />
      </View>
    </BooksStoreContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
