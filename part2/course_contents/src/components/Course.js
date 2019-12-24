import React from "react";

const Course = ({ courses }) => (
  <div>
    {courses.map(course => (
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    ))}
  </div>
);

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <div key={part.id}>
        <Part part={part.name} exercises={part.exercises} />
      </div>
    ))}
  </div>
);

const Part = ({ part, exercises }) => (
  <div>
    {part} {exercises}
  </div>
);

const Total = ({ parts }) => {
  const reducer = (acc, cur) => acc + cur.exercises;
  return <h3>total of {parts.reduce(reducer, 0)} exercises</h3>;
};

export default Course;
