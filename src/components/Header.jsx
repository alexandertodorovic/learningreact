import CoreConcepts from "./CoreConcepts";

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

// const titles = [getRandomDescription(), getRandomnextJSDescription()];
const titles = {
  title: getRandomDescription(),
  title2: getRandomnextJSDescription()
};

export default function Header({ count, setCount }) {
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
        <CoreConcepts {...titles} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.{' '}
        {getRandomDescription()}
      </p>
    </header>
  )
}