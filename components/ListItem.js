import {Observer, useObserver} from 'mobx-react-lite';
import React, {useContext} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {BooksStoreContext} from '../App';

function ListItem({item, deleteItem}) {
  console.log('ListItem');
  const booksStore = useContext(BooksStoreContext);
  const rederItem = ({item}) => (
    <Observer>
      {() => (
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            <Button
              title="X"
              color="firebrick"
              onPress={() => booksStore?.deleteItem(item.id)}
            />
          </View>
        </TouchableOpacity>
      )}
    </Observer>
  );

  //   return <FlatList data={booksStore?.books} renderItem={rederItem} />;
  return (
    <Observer>
      {() => <FlatList data={booksStore?.books} renderItem={rederItem} />}
    </Observer>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
