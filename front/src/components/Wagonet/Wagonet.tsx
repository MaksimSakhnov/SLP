import React, {useState} from "react";
import Konva from "konva";
import {Image} from "react-konva";
import {WagonetType} from "./Wagonet.type";
import train from './../../assets/train.png'
import useImage from 'use-image';


export const Wagonet = ({x, y, width, height, customRef, url}: WagonetType) => {
    const [image] = useImage(url)
    const [color, setColor] = useState('green');



    return (
        <Image
            image={image}
            ref={(node) => {
                if(customRef){
                    customRef.current = node;
                }
            }}
            x={x}
            y={y}
            width={width}
            height={height}
        />
    );
};