import React, { useState } from "react";

import Wrapper from "./components/Layout/Wrapper";
import Fact from "./components/Fact";
import Header from "./components/Layout/Header";
import Button from "./components/Button";
import ChuckNorrisOverlay from "./components/Layout/ChuckNorrisOverlay";

function App() {
  const [fact, setFact] = useState(null);

  async function fetchBurn() {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);

    const factData = {
      id: data.id,
      image: data.icon_url,
      fact: data.value,
      category: data.categories,
    };
    console.log(factData);
    setFact(factData);
  }
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Wrapper>
          {fact ? (
            <Fact id={fact.id} fact={fact.fact}></Fact>
          ) : (
            <h2>Chuck Norris Fact Me</h2>
          )}
          <Button onClick={fetchBurn} content="Get Fact"></Button>
          <ChuckNorrisOverlay></ChuckNorrisOverlay>
        </Wrapper>
      </main>
    </React.Fragment>
  );
}

export default App;
