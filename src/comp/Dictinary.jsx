/** @format */
import { data } from "./Data.js";
import { useState } from "react";
const Dictinary = () => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");
  const handleSearch = () => {
    const wordLower = word.toLowerCase();
    const foundMeaning = data.find(
      (entry) => entry.word.toLowerCase() === wordLower
    );

    if (foundMeaning) {
      setResult(foundMeaning.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Search for a word..."
      ></input>
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3>
      <p>{result}</p>
    </div>
  );
};

export default Dictinary;
