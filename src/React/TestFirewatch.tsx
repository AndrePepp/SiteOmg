import { useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import pepp0 from '../PeppImg/pepp0.png'
import pepp1 from '../PeppImg/pepp1.png'
import pepp2 from '../PeppImg/pepp2.png'
import pepp3 from '../PeppImg/pepp3.png'
import pepp4 from '../PeppImg/pepp4.png'
import pepp5 from '../PeppImg/pepp5.PNG'
import pepp6 from '../PeppImg/pepp6.PNG'
import './Test.css'


const TestFirewatch = ({children}:any) => {

    return <div style={{height:'98vh',position:'relative',overflow: 'hidden'}}>
        <Parallax pages={3}>
            <ParallaxLayer offset={0} speed={0.2} >
                <img src={pepp0} />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.18}>
                <img src={pepp1} />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.12}> 
                <img src={pepp2} />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.25}>
                <img src={pepp3} />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={-0.01}>
                <div style={{
                        position: "relative",
                    }}
                >
                    <img src={pepp4} style={{ position: 'absolute'}} />
                    <img src={pepp5} style={{ position: 'absolute'}} />
                    <img src={pepp6} style={{ position: 'absolute'}} />
                </div>
            </ParallaxLayer>
            <div style={{marginTop:'900px'}}>
            {children}
            </div>
        </Parallax>
    </div>
};


export default TestFirewatch