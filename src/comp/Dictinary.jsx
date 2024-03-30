/** @format */
import { data } from "./Data.js";
import { useState } from "react";
const Dictinary = () => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");
  const handleSearch = () => {
    const wordLower = word.toLowerCase();
    //search the word in the dictionary
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
      <h1>XDictionary</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Search for a word..."
      ></input>
      <button onClick={handleSearch}>Search</button>
      <h2>Defination:</h2>
      <p>{result}</p>
    </div>
  );
};

export default Dictinary;
