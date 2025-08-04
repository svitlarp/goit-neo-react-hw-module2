import './Feedback.css';


export default function Feedback({
    optionsGood,
    optionsNeutral,
    optionsBad
}) {
    const total = 6;
    const positive = '50 %';
    
    return (
        <>
            <ul className="feedback-list">
                <li className="feedback-list-item">Good: {optionsGood}</li>
                <li className="feedback-list-item">Neutral: {optionsNeutral}</li>
                <li className="feedback-list-item">Bad: {optionsBad}</li>
                <li className="feedback-list-item">Total: {total}</li>
                <li className="feedback-list-item">Positive: {positive}</li>
            </ul>
        </>
    )
};