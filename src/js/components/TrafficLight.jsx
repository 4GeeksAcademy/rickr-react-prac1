import { useState } from 'react';

import '../../styles/trafficLight.css'

const TrafficLight = () => {
    const [color, setColor] = useState('');


    return (
        <>
            <div className="traffic-light-stem"></div>
            <div className="traffic-light-body">
                <div 
                    className={color === 'red' ? 'light red selected' : 'light red'}
                    onClick={() => setColor('red')}
                ></div>
                <div 
                    className={color === 'yellow' ? 'light yellow selected' : 'light yellow'}
                    onClick={() => setColor('yellow')}                
                ></div>
                <div 
                    className={color === 'green' ? 'light green selected' : 'light green'}
                    onClick={() => setColor('green')}                    
                ></div>
            </div>
        </>
    );
}

export default TrafficLight;
