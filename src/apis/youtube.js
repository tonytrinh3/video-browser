import axios from 'axios';


const KEY =  'AIzaSyAkCPkhsX3PvEy-EJI9iOKrdANZhSaqWi4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },


});