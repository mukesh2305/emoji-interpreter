import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "🤦‍♂️": "Man Facepalming",
  "😥": "Sad but Relieved Face",
  "🥡": "takout box",
  "💕": "Two Hearts",
  "😑": "annoyance",
  "😋": "crispy",
  "😪": "crying",
  "😍": "love",
  "🤑": "money",
  "🦍": "monkey",
  "👩": "girl"
};

var emojisWeKnow = Object.keys(emojiDictionary);
// var username = prompt("give me your name");
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "we don't have this in out database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>print shopping list</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2> {/*this is actual output to react app */}
      <h3>emojis we know</h3>
      {emojisWeKnow.map((emoji, index) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 1rem",
              cursor: "pointer"
            }}
            key={index}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
