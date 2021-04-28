import yelp from '../api/yelp'
import React,{useState,useEffect} from 'react';
export default ()=>
{
  const[results, setResults] = useState([]);
  const[errorMsg, setMsg] = useState("");

  const searchApi = async function(searchTerm){
    try{
    const response = await yelp.get('/search',{
      params:{
        limit:50,
        term:searchTerm,
        location: 'new york'
      }
    });
    setResults(response.data.businesses);
  }catch(err){
    setMsg("somthing went wrong")
  }
}
useEffect(function(){
  searchApi('pasta');
},[])
return [searchApi,results,errorMsg];
}
