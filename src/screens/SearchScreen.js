import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = (/*props*/)=>{
  const[term,setTerm] = useState("");
  const[searchApi,results,errorMsg] = useResults();
  const filterResults = function(price){
    //price is === $ or $$ or $$$
    return results.filter(result => {
      
      return result.price === price;
    });

  }
  

  return(
    <View style = {{flex:1}}>
    <SearchBar
     term = {term}
     termSubmit = {async function(){searchApi(term)}}
     onTermChange = {(newTerm)=> setTerm(newTerm)}/>
    {/* <Text> {term} </Text> */}
    {/* <Text>we found {results.length} resturants </Text> */}
    {errorMsg ? <Text>{errorMsg}</Text>:null}
    <ScrollView>
    <ResultsList
    // props = {props}
    results = {filterResults("$")}
    title = "Cost Effective"/>
    <ResultsList
    // props = {props}
    results = {filterResults("$$")}
    title = "Bit pricier"/>
    <ResultsList
    // props = {props}
    results = {filterResults("$$$")}
     title = "Big Spender"/>
     </ScrollView>
    </View>
);
};
const styles = StyleSheet.create({

})

export default SearchScreen;
