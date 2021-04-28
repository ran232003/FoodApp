import React from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
//https://icons.expo.fyi/ for icons
import { Feather } from '@expo/vector-icons';
const SearchBar = ({term,onTermChange,termSubmit})=>{
  return(
    <View style = {styles.searchBackground}>
    <Feather name="search" style = {styles.iconStyle}   />
    <TextInput
    style = {styles.inputStyle}
    placeholder = "search"
    value = {term}
    onChangeText = {newTerm => onTermChange(newTerm)}
    autoCapitalize ="none"
    onEndEditing = {function(){termSubmit()}}
    />

    </View>
);
};
const styles = StyleSheet.create({
  searchBackground:{
    marginTop: 10,
    backgroundColor: '#DFDCDB',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection:'row-reverse'
  },
  inputStyle:{
    flex: 1,
    fontSize: 18
  },
  iconStyle:{
    fontSize:36,
    color:"black",
    alignSelf: 'center'


  }

})

export default SearchBar;
