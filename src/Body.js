import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import data from './dummy-data';

const apiKey = 'cF6U1EyBeISRWUAurEgGBtenLezAOuhcvL1O79Rt'

export default function ShowImg(props) {
    const [ imageInfo, getImageInfo ] = useState(null);
    
    useEffect(() => {
       
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        //axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            getImageInfo(res.data);
            //console.log();
        })
        .catch(err => console.error(err));
    }, [])
    return (
        <div>
            <img src = {imageInfo.url} alt = 'astronomy picture of the day' />
            <p>  </p>
        </div>
    )
}