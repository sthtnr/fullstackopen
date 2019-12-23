import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, value }) => (
  <>
    {text} {value}
  </>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good + bad * -1) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <Statistic text="good" value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="neutral" value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="bad" value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="all" value={all} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="average" value={average} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="positive" value={positive} /> %
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleClick = (cnt, setter) => setter(cnt);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handleClick(good + 1, setGood)} text="good" />
      <Button
        onClick={() => handleClick(neutral + 1, setNeutral)}
        text="neutral"
      />
      <Button onClick={() => handleClick(bad + 1, setBad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
