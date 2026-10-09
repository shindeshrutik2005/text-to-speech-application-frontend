function AudioPlayer({ audioUrl }) {
  return (
    <div className="audio-card">

      <h3>🔊 Generated Speech</h3>

      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support audio.
        </audio>
      )}

      {audioUrl && (
        <a
          href={audioUrl}
          download="speech.mp3"
          className="download-btn"
        >
          ⬇ Download Audio
        </a>
      )}

    </div>
  );
}

export default AudioPlayer;