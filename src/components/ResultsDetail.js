import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
const ResultsDetail = function({result})
{
    return(
        <View style = {styles.continer}>
            <Image
            style = {styles.imageStyle} 
            source = {{uri:result.image_url}}/>
            <Text style = {styles.textName}>{result.name}</Text>
            <Text >{result.rating} Stars, {result.review_count} Reviews</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    continer:{
        marginRight:10,

    },
    imageStyle:{
        height:150,
        width:200,
        borderRadius:4,
        
    
        
    },
    textName:{
        fontSize:14,
        fontWeight:'bold'
    }

});

export default ResultsDetail;