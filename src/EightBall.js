import React, {useState} from 'react';
import answers from './answers';
import './Eightball.css';

const EightBall = () => {
    const genAnsIdx = () => Math.floor(Math.random() *20);

    const [response, setResponse] = useState(answers[20]);


    return(
    <div className={response.color} onClick= {() => setResponse(answers[genAnsIdx()])}>
        <p>{response.msg}</p>

    </div>
    )

}

export default EightBall;