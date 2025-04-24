export default function Feedback({ reaction }) {
  let total = reaction.good + reaction.neutral + reaction.bad;
  let positive = Math.round(((reaction.good + reaction.neutral) / total) * 100);

  return (
    <ul>
      <li>Good:{reaction.good}</li>
      <li>Neutral:{reaction.neutral}</li>
      <li>Bad:{reaction.bad}</li>
      <li>Total:{total}</li>
      <li>Positive:{positive}%</li>
    </ul>
  );
}
