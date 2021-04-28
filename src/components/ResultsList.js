import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import { withNavigation } from 'react-navigation';
const ResultsList = function({ title, results, navigation })
{
  if(results.length === 0)
  {
    return null;
  }
  return <View style = {styles.container}>

  <Text style = {styles.titleStyle}> {title}</Text>
  <Text style = {styles.resultsStyle}>Results  {results.length}</Text>
  <FlatList
  showsHorizontalScrollIndicator = {false}
  horizontal = {true}
  data = {results}
  keyExtractor = {function(result){ return result.id}}
  renderItem = {function({item}){
    return (
    <TouchableOpacity onPress = {()=>navigation.navigate("RestPick",{id:item.id})}>
    <ResultsDetail result = {item}
    />
    </TouchableOpacity>
    )
  }}
  />

  </View>

}




const styles = StyleSheet.create({
  container:{
      marginBottom:10
  },
  titleStyle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginRight:5
  },
  resultsStyle:{
    fontSize: 14,
    alignSelf: 'flex-end',
    marginRight:10
    

  }

})

export default withNavigation(ResultsList);
