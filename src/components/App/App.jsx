import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

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

  const totalFeedback = reaction.good + reaction.neutral + reaction.bad;
  const positiveFeedback = Math.round(
    ((reaction.good + reaction.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    localStorage.setItem(REACTION_KEY, JSON.stringify(reaction));
  }, [reaction]);

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
  }

  return (
    <div>
      <Description />
      <Options
        updateReaction={updateReaction}
        totalFeedback={totalFeedback}
        resetReactions={resetReactions}
      />
      {Boolean(totalFeedback) && (
        <Feedback
          reaction={reaction}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {Boolean(!totalFeedback) && <Notification />}
    </div>
  );
}

export default App;
