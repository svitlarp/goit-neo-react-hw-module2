import { useState } from "react";
import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback"
import Options from "./components/Options/Options"

function App() {
  const [optionsGood, setOptionsGood] = useState(0);
  const [optionsNeutral, setOptionsNeutral] = useState(0);
  const [optionsBad, setOptionsBad] = useState(0);
    

  return <>
    <Description />
    <Options
      optionsGood={optionsGood} setOptionsGood={setOptionsGood}
      optionsNeutral={optionsNeutral} setOptionsNeutral={setOptionsNeutral}
      optionsBad={optionsBad} setOptionsBad={setOptionsBad}
    />
    <Feedback
      optionsGood={optionsGood} 
      optionsNeutral={optionsNeutral} 
      optionsBad={optionsBad}
    />
  </>
}

export default App
