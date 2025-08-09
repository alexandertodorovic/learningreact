import { useState } from 'react'

import CoreConcepts from "./CoreConcepts.jsx";
import TabButton from './TabButton.jsx'

const reactDescriptions = [
  "React - Fundamental library for building user interfaces",
  "React - Crucial for creating interactive web applications",
  "React - Core technology for modern web development"
]

function getRandomDescription() {
  const randomIndex = Math.floor(Math.random() * reactDescriptions.length);
  return reactDescriptions[randomIndex];
}

const nextJSDescriptions = [
  "NextJS - Framework for building server-rendered React applications",
  "NextJS - Optimized for performance and SEO",
  "NextJS - Supports static site generation and API routes"
]

function getRandomnextJSDescription() {
  const randomIndex = Math.floor(Math.random() * nextJSDescriptions.length);
  return nextJSDescriptions[randomIndex];
}


export default function Header({ count, setCount }) {

// ...existing code...
const snippets = {
  components: `const Element = () => <div>Hello, World!</div>;`,
  jsx:        `const JSX = () => <div>This is JSX syntax</div>;`,
  props:      `const Greeting = ({ name }) => <div>Hello, {name}!</div>;`,
  state:      `const Sum = ({ a, b }) => <div>{a + b}</div>;`
};
// ...existing

  // const titles = [getRandomDescription(), getRandomnextJSDescription()];
  const titles = {
    title: getRandomDescription(),
    title2: getRandomnextJSDescription()
  };

  const [selectedTopic, setSelectedTopic] = useState(() => {
    // This effect runs once on mount
    console.log("Component mounted");
  }, []);

  function handleOnClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <header>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {/* <CoreConcepts className="h2" title={titles[0]} title2={titles[1]} /> */}
        {/* <CoreConcepts className="h2" title={titles.title} title2={titles.title2} /> */}
        <section id="core-concepts">
          <CoreConcepts {...titles} />
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isActive={true} onClick={() => handleOnClick("components")}>
              Example 1 JSX
            </TabButton>
            <TabButton isActive={false} onClick={() => handleOnClick("jsx")}>
              Example 2 Props
            </TabButton>
            <TabButton isActive={false} onClick={() => handleOnClick("props")}>
              Example 3 State
            </TabButton>
            <TabButton isActive={false} onClick={() => handleOnClick("state")}>
              Example 4 Effects
            </TabButton>
          </menu>
          <div>
            <h3>{selectedTopic}</h3>
            <pre>
              <code>
                {snippets[selectedTopic]}
              </code>
            </pre>
          </div>
        </section>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.{' '}
        {getRandomDescription()}
      </p>
    </header>
  )
}