import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

const REACTION_KEY = "reaction";

function App() {
  const [reaction, setReaction] = useState(() => {
    const saveReaction = localStorage.getItem(REACTION_KEY);
    if (saveReaction !== null) {
      return JSON.parse(saveReaction);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const [isReaction, setIsReaction] = useState(() => {
    if (reaction.good + reaction.neutral + reaction.bad > 0) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem(REACTION_KEY, JSON.stringify(reaction));
  }, [reaction]);

  useEffect(() => {
    if (!isReaction) {
      resetReactions();
    }
  }, [isReaction]);

  function resetReactions() {
    setReaction({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  function updateReaction(key) {
    setReaction({
      ...reaction,
      [key]: reaction[key] + 1,
    });
    updateisReaction(true);
  }

  function updateisReaction(status) {
    setIsReaction(status);
  }

  return (
    <div>
      <Description />
      <Options
        updateReaction={updateReaction}
        isReaction={isReaction}
        updateIsReaction={updateisReaction}
      />
      {isReaction ? <Feedback reaction={reaction} /> : <p>No feedback yet</p>}
    </div>
  );
}

export default App;
