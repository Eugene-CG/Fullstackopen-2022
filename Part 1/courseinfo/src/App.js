const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
// start:Tempotaty components, npm start not wotking without them btw =)
const Header = () => {
  return (
    <>
      <h1>Hello Header</h1>
    </>
  );
};
const Content = () => {
  return (
    <>
      <h1>Hello Content</h1>
    </>
  );
};
const Total = () => {
  return (
    <>
      <h1>Hello Total</h1>
    </>
  );
};
// end:Tempotaty components, npm start not wotking without them btw =)

export default App;
