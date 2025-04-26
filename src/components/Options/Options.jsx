import css from "./Options.module.css";

export default function Options({
  updateReaction,
  totalFeedback,
  resetReactions,
}) {
  return (
    <div className={css.container}>
      <ul className={css.btnList}>
        <li>
          <button
            className={css.btn}
            onClick={() => {
              updateReaction("good");
            }}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.btn}
            onClick={() => {
              updateReaction("neutral");
            }}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={css.btn}
            onClick={() => {
              updateReaction("bad");
            }}
          >
            Bad
          </button>
        </li>
      </ul>
      {Boolean(totalFeedback) && (
        <button className={css.btn} onClick={resetReactions}>
          Reset
        </button>
      )}
    </div>
  );
}
