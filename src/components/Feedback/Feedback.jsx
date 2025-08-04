import roundToDecimal from '../../helper-functions/roundToDecimal';
import './Feedback.css';


export default function Feedback({
    optionsGood,
    optionsNeutral,
    optionsBad
}) {
    const total = optionsGood + optionsNeutral + optionsBad;
    let positive;

    if (total === 0) {
        positive = 0;
    } else {
        if (optionsGood || optionsNeutral) {
            positive = 100;
        } else if (!optionsGood && !optionsNeutral) {
            positive = 0;
        }
        positive = roundToDecimal(((optionsGood + optionsNeutral) / total) * 100);
    }
   
    return (
        <>
            <ul className="feedback-list">
                <li className="feedback-list-item">Good: {optionsGood}</li>
                <li className="feedback-list-item">Neutral: {optionsNeutral}</li>
                <li className="feedback-list-item">Bad: {optionsBad}</li>
                <li className="feedback-list-item">Total: {total}</li>
                <li className="feedback-list-item">Positive: {positive} %</li>
            </ul>
        </>
    )
};