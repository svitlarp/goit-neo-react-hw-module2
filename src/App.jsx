import { useEffect, useState } from "react";
import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback"
import Options from "./components/Options/Options"
import Notification from "./components/Notification/Notification";
import roundToDecimal from "./helper-functions/roundToDecimal";

function App() {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function resetOptions() {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  let totalFeedback = options.good + options.neutral + options.bad;

  function updateFeedback(feedbackType) {
    if (!['good', 'neutral', 'bad'].includes(feedbackType)) return;
    setOptions(oldOptions => ({
      ...oldOptions,
      [feedbackType]: oldOptions[feedbackType] + 1,
    }));
  }

  // Calculate PositiveFeedback result
  let positiveFeedback;
  if (totalFeedback === 0) {
    positiveFeedback = 0;
  } else {
      if (options.good || options.neutral) {
          positiveFeedback = 100;
      } else if (!options.good && !options.neutral) {
          positiveFeedback = 0;
      }
      positiveFeedback = roundToDecimal(((options.good + options.neutral) / totalFeedback) * 100);
      }

  // useEffect(() => {
  //   window.localStorage.setItem('optionsStat', options);
  // }, []);

  // useEffect(() => {
  //   window.localStorage.getItem('optionsStat');
  // }, []);

  return <>
    <Description />
    <Options optionsType={options} updateOptions={updateFeedback} totalFeedback={totalFeedback} resetOptions={resetOptions} />
    {(options.good === 0 && options.neutral === 0 && options.bad === 0)
      ? <Notification />
      : <Feedback optionsType={options} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
    }
  </>
}

export default App
