import React, { useState } from 'react';
import axios from 'axios';
import data from './dummy-data';


export default function ShowImg(props) {
    const [imageInfo, getImageInfo ] = useState(data);
    const selected = imageInfo.map(info => {
        console.log( info.url );
        return info.url;
    })

    return (
        <div>
            <iframe width="320" height="240" 
                 src={selected}>
            </iframe>
        </div>
    )
}