function LanguageSelector({ language, setLanguage }) {
  const languages = ["English", "Hindi", "Marathi"];
  return (
    <div className="selector">
      <label>Language</label>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
            </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelector