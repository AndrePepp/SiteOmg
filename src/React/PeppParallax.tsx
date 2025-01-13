import '../Css/peppimg.css'
import { useEffect } from 'react';

function pepp(){
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const layers = document.querySelectorAll('.keyart_layer');

            layers.forEach((layer, index) => {
                let speed = 0.2 + index * 0.04;
                if(index == 8)speed = 0;
                if(index == 7 || index == 6)speed = 0.3;
                layer.style.transform = `translateY(${scrollTop * speed}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <>
             <div className='keyart' id='parallax'>
                <div className = 'keyart_layer' id='art-0'></div>
                <div className = 'keyart_layer' id='art-1'></div>
                <div className = 'keyart_layer' id='art-2'></div>
                <div className = 'keyart_layer' id='art-3'></div>
                <div className = 'keyart_layer' id='art-4'></div>
                <div className = 'keyart_layer' id='art-5'></div>
                <div className = 'keyart_layer' id='art-6'></div>
                <div className = 'keyart_layer' id='art-7'></div>
                <div className = 'keyart_layer' id='art-8'></div>
             </div>

        </>
    );
}

export default pepp;