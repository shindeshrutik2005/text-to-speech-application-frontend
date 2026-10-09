function ActionButtons({ clearText, handleGenerate }) {

  return (
    <div className="actions">

      <button
        className="generate-btn"
        onClick={handleGenerate}>
        Generate Speech
      </button>

      <button
        className="clear-btn"
        onClick={clearText}>
        Clear
      </button>

    </div>
  );
}

export default ActionButtons;