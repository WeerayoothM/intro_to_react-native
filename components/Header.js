import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {BooksStoreContext} from '../App';

function Header(props) {
  console.log('Header');
  const booksStore = useContext(BooksStoreContext);
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{booksStore?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'cornflowerblue',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
});

Header.defaultProps = {
  title: 'My Books List',
};
export default Header;
