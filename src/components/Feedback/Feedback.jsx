import css from "./Feedback.module.css";

export default function Feedback({
  reaction,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={css.container}>
      <li className={css.item}>Good:{reaction.good}</li>
      <li className={css.item}>Neutral:{reaction.neutral}</li>
      <li className={css.item}>Bad:{reaction.bad}</li>
      <li className={css.item}>Total:{totalFeedback}</li>
      <li className={css.item}>Positive:{positiveFeedback}%</li>
    </ul>
  );
}
