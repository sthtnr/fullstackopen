import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const AnecAndTheVotes = ({ selected, points, text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [mostVotes, setMostVotes] = useState(0);
  const displayNextAnecdote = () => {
    const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
    const randInt = getRandomInt(anecdotes.length);
    setSelected(randInt);
  };
  const vote = () => {
    const copy = [...points];
    copy[selected]++;
    setPoints(copy);
    setMostVotes(copy.indexOf(Math.max(...copy)));
  };
  return (
    <div>
      <AnecAndTheVotes
        selected={selected}
        points={points}
        text="Anecdote of the day"
      />
      <Button onClick={() => vote()} text="vote" />
      <Button onClick={() => displayNextAnecdote()} text="next anecdote" />
      <AnecAndTheVotes
        selected={mostVotes}
        points={points}
        text="Anecdote with most votes"
      />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App />, document.getElementById("root"));
