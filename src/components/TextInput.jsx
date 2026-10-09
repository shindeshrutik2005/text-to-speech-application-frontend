function TextInput({ text, setText }) {
  return (
    <div className="input-section">
      <label>✍️ Your Text</label>

      <textarea
        className="text-input"
        placeholder="Type something you want to hear..."
        value={text}
        onChange={(e) => {
          if (e.target.value.length > 1000) {
            return;
          }

          setText(e.target.value);
        }}
      ></textarea>

      <div className="counter">
        <span>{text.length} / 1000</span>
        <span>
          Words: {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
        </span>
      </div>
    </div>
  )
}

export default TextInput