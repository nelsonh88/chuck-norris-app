function App() {
  async function fetchBurn() {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data.value);
  }
  return <button onClick={fetchBurn}>Click me</button>;
}

export default App;
