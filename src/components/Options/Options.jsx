import { useState } from "react";
import './Options.css';


export default function Options() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    return (
        <>
            <button className="options-button" onClick={() => setGood(good + 1)}>Good {good}</button>
            <button className="options-button" onClick={() => setNeutral(neutral + 1)}>Neutral { neutral}</button>
            <button className="options-button" onClick={() => setBad(bad + 1)}>Bad { bad}</button>
            <button className="options-button" onClick={() => { return setGood(0), setNeutral(0), setBad(0) }}>Reset</button>
        </>
    )
};