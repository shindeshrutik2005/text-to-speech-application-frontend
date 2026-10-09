function VoiceSelector({ language, voice, setVoice }) {

  const voices = {
    English: ["John", "Emma"],
    Hindi: ["Aarav", "Priya"],
    Marathi: ["Aditya", "Sneha"],
  };

  return (
    <div className="selector">

      <label>Select Voice</label>

      <select
        value={voice}
        onChange={(e) => setVoice(e.target.value)}
      >

        <option value="">
          Select Voice
        </option>

        {voices[language].map((voiceName) => (

          <option
            key={voiceName}
            value={voiceName}
          >
            {voiceName}
          </option>

        ))}

      </select>

    </div>
  );
}

export default VoiceSelector;