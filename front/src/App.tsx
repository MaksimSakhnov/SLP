import React, {useEffect, useRef, useState} from 'react';
import {Stage, Layer, Image} from 'react-konva';
import {Wagonet} from "./components/Wagonet/Wagonet";
import {Option} from "./components/Option/Option";
import backgroundImage from "./assets/background.png";
import './App.css'


const background = new window.Image();
background.src = backgroundImage;

const PIZZA_URL = 'https://pivo.by/images/2021/01/seth-and-rileys-garage-hard-californian-pear-drink-1000x650.jpg'
const BURGER_URL = 'https://pivo.by/images/2021/04/lidskae-kalekcyja-majstra-new-design-1000x667.jpg'
const WATER_URL = 'https://grizly.club/uploads/posts/2022-12/1672067760_grizly-club-p-trafaret-luzhi-32.jpg'

export const App = () => {
    const wagonetY = window.innerHeight / 2 - 100;
    const [direction, setDirection] = useState<null | 'change' | 'noChange'>(null);
    const wagonetRef = useRef<any>()
    const [wagonetCoords, setWagonetCoords] = useState<{ x: number, y: number }>({x: 50, y: wagonetY})
    const [isMoving, setIsMoving] = useState(false)
    const [option1Image, setOption1Image] = useState(PIZZA_URL)
    const [option2Image, setOption2Image] = useState(BURGER_URL)
    const [openResult, setOpenResult] = useState(false)

    useEffect(() => {
        debugger
        if (direction === 'noChange') {
            window.scrollTo({left: 0, top: 0, behavior: "smooth"})
            setIsMoving(true)

            if (wagonetRef.current) {
                wagonetRef.current.to({
                    x: window.innerWidth - 200,
                    y: 50,
                    duration: 2,
                    onFinish: () => {

                        setOption1Image(WATER_URL)
                        setOpenResult(true)
                        setTimeout(() => {
                            setWagonetCoords({x: window.innerWidth - 200, y: 50})
                            setDirection(null)
                            setIsMoving(false)
                            setOption1Image(PIZZA_URL)
                        }, 500)

                    },
                    onUpdate: () => {
                        console.log('upd')
                    }
                })
            }

        } else if (direction === 'change') {
            window.scrollTo({left: 0, top: 0, behavior: "smooth"})
            setIsMoving(true)
            if (wagonetRef.current) {
                wagonetRef.current.to({
                    x: window.innerWidth - 200,
                    y: window.innerHeight - 200,
                    duration: 2,
                    onFinish: () => {

                        setOption2Image(WATER_URL)
                        setOpenResult(true)


                        setTimeout(() => {
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
        <div className={"container"}>

            {openResult && (<div className={'result'}>
                <div className={'result_description'}>70% сделали такой же выбор, как и вы!</div>
                <button className={'btn'} onClick={() => setOpenResult(false)}>Далее!</button>
            </div>)}

            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Image
                        image={background}
                        x={0}
                        y={0}
                        width={window.innerWidth}
                        height={window.innerHeight}
                    />
                    <Option x={window.innerWidth - 400} y={50} width={200} height={100}
                            url={'./../../assets/five-guys.svg'}/>
                    <Option x={window.innerWidth - 400} y={window.innerHeight - 200} width={200} height={100}
                            url={'./assets/one-guy.svg'}/>
                    <Wagonet x={wagonetCoords.x} y={wagonetCoords.y} height={200} width={300} customRef={wagonetRef}/>
                </Layer>
            </Stage>
            <div style={{width: '100%', display: 'flex', gap: '5vw', justifyContent: 'center', alignItems: 'center'}}>
                <button disabled={isMoving} className={'btn'} onClick={() => setDirection('change')}>Ехать вниз</button>
                <button disabled={isMoving} className={'btn'} onClick={() => setDirection('noChange')}>Ехать вверх
                </button>
            </div>
        </div>

    );
};

