import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ title, addItem}) => {
    const [text, setText] = useState('');
    const onChange = (textValue) => setText(textValue);
  return (
   <View>
       <TextInput placeholder="Add Item..." style = {StyleSheet.input} 
       onChangeText={onChange}/>
       <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
           <Text style={styles.btnText}><Icon name="plus" size={20}/>Add Item</Text>
       </TouchableOpacity>
   </View>
  );
};

const styles = StyleSheet.create({
  input: {
      height: 60,
      padding: 10,
      fontSize: 30,
  },
  btn: {
      backgroundColor: '#BF40BF',
      padding: 10,
      margin: 5,
  },
  btnText: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
  },
});

export default AddItem;

