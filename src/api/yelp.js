import axios from 'axios';


export default axios.create({
//root url
baseURL: 'https://api.yelp.com/v3/businesses',
headers:{
  Authorization:'Bearer MoM7NadnzoYs1vhV_nQ_nDegzfXIlRd6HdGavOOq-co_lQqA4fpB33QTtENRRdFNsjR9nV_EXWE0hAWwPMEQmRfaaZc12mDa5-RZZ91ms3Ob-gSKWxkwrCE74-qDYHYx'
}
});
