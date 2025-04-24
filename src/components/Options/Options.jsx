export default function Options({
  updateReaction,
  isReaction,
  updateIsReaction,
}) {
  return (
    <div>
      <ul>
        <li>
          <button
            onClick={() => {
              updateReaction("good");
            }}
          >
            Good
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              updateReaction("neutral");
            }}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              updateReaction("bad");
            }}
          >
            Bad
          </button>
        </li>
      </ul>
      {isReaction && (
        <button
          onClick={() => {
            updateIsReaction(false);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
