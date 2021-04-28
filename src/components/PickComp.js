import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,Image,FlatList} from 'react-native';
import { withNavigation } from 'react-navigation';
import yelp from '../api/yelp';


const PickComp = ({navigation})=>{
    //console.log(navigation.getParam("id"));
    //console.log(navigation.getParam("id"));
    const[result,setResult] = useState(null);
    const id = navigation.getParam("id");
    const getResturant = async function(id){
        const response = await yelp.get(`/${id}`);
        setResult(response.data);

    }
    useEffect(function(){
        getResturant(id)
    },[])
    console.log(result);
    if (result === null)
    {
        return null;
    }
    return(
        <View>
            <Text>{result.name} </Text>
            <FlatList
            data = {result.photos}
            keyExtractor = {function(photo){
                return photo
            }}
            renderItem = {function({item}){
                 return <Image style = {styles.imageStyle} source = {{uri:item}}/>
            }}
            
            />

        </View>
    )
}


styles = StyleSheet.create({
    imageStyle:{
        height:200,
        width:200,
        alignSelf:"flex-end"
    }
});

export default withNavigation(PickComp);