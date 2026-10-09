import './App.css'
import Header from './components/Header'
import TextInput from './components/TextInput'
import LanguageSelector from './components/LanguageSelector'
import VoiceSelector from './components/VoiceSelector'
import ActionButtons from './components/ActionButtons'
import AudioPlayer from './components/AudioPlayer'
import ErrorMessage from './components/ErrorMessage'
import { useState } from "react";

function App() {

  const [text, setText] = useState("");
  const [language, setLanguage] = useState("English");
  const [voice, setVoice] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [backendMessage, setBackendMessage] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setVoice("");
  };

  const clearText = () => {
    setText("");
    setError("");
    setSuccess("");
  };

  const handleGenerate = async () => {

    if (text.trim() === "") {
      setError("Please enter some text.");
      setSuccess("");
      return;
    }
    else if (text.length > 1000) {
      setError("Text cannot exceed 1000 characters.");
      setSuccess("");
      return;
    }
    else {

      setSuccess("Text is valid and ready for speech generation.");
      setAudioUrl("");
    }
    let voiceId;

    if (language === "English") {
      voiceId = "hpp4J3VqNfWAUOO0d1Us";
    } else if (language === "Hindi") {
      voiceId = "bpkHhw4QrZFYIfahwsHh";
    } else if (language === "Marathi") {
      voiceId = "4mCfn38CsM9hGLvDrPxv";
    }

    const response = await fetch(
      "http://localhost:8080/api/tts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: text,
          language: language,
          voice: voice
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      setError(errorData);
      return;
    }

    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    setAudioUrl(url);

    setError("");
  };

  const testBackend = () => {
    fetch("http://localhost:8080/api/health")
      .then(response => response.text())
      .then(data => {
        setBackendMessage(data);
      });
  };

  return (
    <main className="app-container">

      <Header />

      <section className="tts-card">

        <TextInput
          text={text}
          setText={setText}
        />

        <div className="selectors">

          <LanguageSelector
            language={language}
            setLanguage={handleLanguageChange}
          />

          <VoiceSelector
            language={language}
            voice={voice}
            setVoice={setVoice}
          />

        </div>

        <ActionButtons
          clearText={clearText}
          handleGenerate={handleGenerate}
        />

        <AudioPlayer audioUrl={audioUrl} />

        <ErrorMessage
          error={error}
        />

        {success && <p className="success-message">{success}</p>}

        <button onClick={testBackend}>
          Test Backend
        </button>

        {backendMessage && <p>{backendMessage}</p>}

      </section>

    </main>
  );
}

export default App;