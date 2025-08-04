import './Options.css';


export default function Options({optionsType, updateOptions, totalFeedback, resetOptions}) {

    return (
        <>
            <button className="options-button" onClick={() => updateOptions('good')}>Good {optionsType.good}</button>
            <button className="options-button" onClick={() => updateOptions('neutral')}>Neutral { optionsType.neutral}</button>
            <button className="options-button" onClick={() => updateOptions('bad')}>Bad {optionsType.bad}</button>
            {totalFeedback > 0 && <button
                className="options-button"
                onClick={() => resetOptions()}>
                Reset
            </button>
            }
        </>
    )
};