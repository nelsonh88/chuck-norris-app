function App() {
  async function fetchBurn() {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://yomomma-api.herokuapp.com/jokes",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return <button onClick={fetchBurn}>Click me</button>;
}

export default App;
