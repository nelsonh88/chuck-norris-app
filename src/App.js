import React, { useState } from "react";

import Wrapper from "./components/Layout/Wrapper";
import Fact from "./components/Fact";

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
      <main>
        <Wrapper>
          {fact ? <Fact id={fact.id} fact={fact.fact}></Fact> : ""}
          <button onClick={fetchBurn}>Click me</button>
        </Wrapper>
      </main>
    </React.Fragment>
  );
}

export default App;
