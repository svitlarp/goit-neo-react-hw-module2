import './Options.css';


export default function Options({
    optionsGood,
    setOptionsGood,
    optionsNeutral,
    setOptionsNeutral,
    optionsBad,
    setOptionsBad
}) {

    return (
        <>
            <button className="options-button" onClick={() => setOptionsGood(optionsGood + 1)}>Good {optionsGood}</button>
            <button className="options-button" onClick={() => setOptionsNeutral(optionsNeutral + 1)}>Neutral { optionsNeutral}</button>
            <button className="options-button" onClick={() => setOptionsBad(optionsBad + 1)}>Bad { optionsBad}</button>
            <button className="options-button" onClick={() => { return setOptionsGood(0), setOptionsNeutral(0), setOptionsBad(0) }}>Reset</button>
        </>
    )
};