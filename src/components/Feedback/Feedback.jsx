import './Feedback.css';


export default function Feedback({optionsType, totalFeedback, positiveFeedback}) {
   
    return (
        <>
            <ul className="feedback-list">
                <li className="feedback-list-item">Good: {optionsType.good}</li>
                <li className="feedback-list-item">Neutral: {optionsType.neutral}</li>
                <li className="feedback-list-item">Bad: {optionsType.bad}</li>
                <li className="feedback-list-item">totalFeedback: {totalFeedback}</li>
                <li className="feedback-list-item">Positive: {positiveFeedback} %</li>
            </ul>
        </>
    )
};