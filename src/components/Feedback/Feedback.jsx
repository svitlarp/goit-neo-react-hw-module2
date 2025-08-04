import './Feedback.css';


export default function Feedback() {
    const good = 1;
    const neutral = 2;
    const bad = 3;
    const total = 6;
    const positive = '50 %';
    
    return (
        <>
            <ul className="feedback-list">
                <li className="feedback-list-item">Good: {good}</li>
                <li className="feedback-list-item">Neutral: {neutral}</li>
                <li className="feedback-list-item">Bad: {bad}</li>
                <li className="feedback-list-item">Total: {total}</li>
                <li className="feedback-list-item">Positive: {positive}</li>
            </ul>
        </>
    )
};