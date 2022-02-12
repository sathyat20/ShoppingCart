import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert, ImageBackground} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const image = { uri: "https://reactjs.org/logo-og.png" };

const App = () => { 

  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Chicken'},
    {id: uuidv4(), text: 'Peanut Butter'},
    {id: uuidv4(), text: 'Breadsticks'},
    {id: uuidv4(), text: 'Duck'},
    {id: uuidv4(), text: 'Eggs'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    });
  }

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'No item entered', 
        'Please enter an item when adding to your shopping list', 
        [
          {text: 'Understood',
          style: 'cancel',
        },
      ],
      {cancelable: true},
      );
    } else {
      setItems(prevItems => {
      return [{id: uuidv4(), text}, ...prevItems];
      });
    }
  };

  return (

    <View style = {styles.container}>
      <ImageBackground style = {styles.backgroundImage} source={require('./gradient.png')}>
        <Header title='Shopping Cart'/>
        <AddItem addItem = {addItem}/>
        <FlatList data={items} renderItem={({item}) => 
          <ListItem item={item} deleteItem={deleteItem} />
        }/>
      </ImageBackground>
    </View>
  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#E9CCA0'
   
  }, 

  backgroundImage:{
    width: '100%',
    height: '100%',
    flex: 1,

    },

  image: {
    flex: 1,
    justifyContent: "center"
  },

});



export default App;

