import React, {useEffect, useRef, useState} from 'react';
import {Stage, Layer, Rect, Text, Transformer} from 'react-konva';
import Konva from 'konva';
import {ColoredRect} from "./components/Rectangle/Rectangle";
import {Wagonet} from "./components/Wagonet/Wagonet";


const WAGONET_URL = 'https://xn--80ac5aetf.xn--p1ai/wp-content/uploads/2018/02/t170.jpeg'
const PIZZA_URL = 'https://pivo.by/images/2021/01/seth-and-rileys-garage-hard-californian-pear-drink-1000x650.jpg'
const BURGER_URL = 'https://pivo.by/images/2021/04/lidskae-kalekcyja-majstra-new-design-1000x667.jpg'
const GRASS_URL = 'https://w7.pngwing.com/pngs/23/955/png-transparent-butterflies-hovering-above-green-grass-illustration-grasses-butterfly-bushes-rectangle-butterfly-group-grass.png'
const WATER_URL = 'https://grizly.club/uploads/posts/2022-12/1672067760_grizly-club-p-trafaret-luzhi-32.jpg'

export const App = () => {
    const wagonetY = window.innerHeight / 2
    const [direction, setDirection] = useState<null | 'change' | 'noChange'>(null);
    const wagonetRef = useRef<any>()
    const [wagonetCoords, setWagonetCoords] = useState<{ x: number, y: number }>({x: 50, y: wagonetY})
    const [isMoving, setIsMoving] = useState(false)
    const [option1Image, setOption1Image] = useState(PIZZA_URL)
    const [option2Image, setOption2Image] = useState(BURGER_URL)

    useEffect(() => {
        if (direction === 'noChange') {
            setIsMoving(true)
            if (wagonetRef.current) {
                wagonetRef.current.to({
                    x: window.innerWidth - 200,
                    y: 50,
                    duration: 2,
                    onFinish: () => {
                        setOption1Image(WATER_URL)
                        setTimeout(()=>{
                            setWagonetCoords({x: window.innerWidth - 200, y: 50})
                            setDirection(null)
                            setIsMoving(false)
                            setOption1Image(PIZZA_URL)
                        }, 500)

                    }
                })
            }

        } else if (direction === 'change') {
            setIsMoving(true)
            if (wagonetRef.current) {
                wagonetRef.current.to({
                    x: window.innerWidth - 200,
                    y: window.innerHeight - 200,
                    duration: 2,
                    onFinish: () => {

                        setOption2Image(WATER_URL)
                        setTimeout(()=>{
                            setWagonetCoords({x: window.innerWidth - 200, y: window.innerHeight - 200})
                            setDirection(null)
                            setIsMoving(false)
                            setOption2Image(BURGER_URL)
                        }, 500)

                    }
                })
            }
        } else {
            setWagonetCoords({x: 50, y: wagonetY})
        }
    }, [direction, wagonetY])

    return (
        <>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Rect x={0} y={0} width={window.innerWidth} height={window.innerHeight} />
                    <Wagonet x={window.innerWidth - 400} y={50} width={200} height={100} url={option1Image}/>
                    <Wagonet x={window.innerWidth - 400} y={window.innerHeight - 200} width={200} height={100} url={option2Image}/>
                    <Wagonet x={300} y={760} width={200} height={100} url={GRASS_URL}/>
                    <Wagonet x={500} y={210} width={329} height={100} url={GRASS_URL}/>
                    <Wagonet x={720} y={770} width={256} height={100} url={GRASS_URL}/>
                    <Wagonet x={900} y={110} width={256} height={100} url={GRASS_URL}/>
                    <Wagonet x={window.innerWidth - 400} y={window.innerHeight / 2 - 200} width={256} height={100} url={GRASS_URL}/>
                    <Wagonet x={wagonetCoords.x} y={wagonetCoords.y} height={200} width={300} customRef={wagonetRef} url={WAGONET_URL}/>
                </Layer>
            </Stage>
            <div style={{width: '100%', display: 'flex', gap: '5vw', justifyContent: 'center', alignItems: 'center'}}>
                <button disabled={isMoving} onClick={() => setDirection('change')}>Ехать вниз</button>
                <button disabled={isMoving} onClick={() => setDirection('noChange')}>Ехать вверх</button>
            </div>
        </>

    );
};

