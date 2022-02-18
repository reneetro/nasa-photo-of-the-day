import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = 'cF6U1EyBeISRWUAurEgGBtenLezAOuhcvL1O79Rt'

export default function ShowImg() {
    const [imageInfo, setImageInfo] = useState(null);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then(res => {
            setImageInfo(res.data);
            console.log(imageInfo);
        })
        .catch(err => console.error(err));
    }, []);

    if (!imageInfo) return null;

    let display;
    if(imageInfo.media_type === 'image') {
        display = <img src = {imageInfo.hdurl} alt = {imageInfo.title} />
    } else if (imageInfo.media_type === 'video') {
        display = <iframe src = {imageInfo.url} title = {imageInfo.title}></iframe>
    } else {
        display = <h2> Sorry! Media is unavailable :( </h2>
    }

    return (
        <div>
           {display}
            <h2> {imageInfo.title} </h2>
            <div className= 'info'>
                <p>Date: {imageInfo.date}</p>
                <p>Description: {imageInfo.explanation} </p>
                <p>Copyright: {imageInfo.copyright}</p>
            </div>
        </div>
    );
}