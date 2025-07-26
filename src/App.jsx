import { useState } from 'react'
import './App.css'

const Name = ({ name, style }) => {
  //return <p className='name-heading'>Hi {name}!</p>;
  return <p style={style}>Hi {name}!</p>;
}

const ProfilePicture = ({ imgSrc }) => {
  return <img className='profile-picture' src={imgSrc} alt="Profile" />;
}

const App = () => {
  const [fontColor, setFontColor] = useState("green");
  const handleColorChange = () => {
    setFontColor(prev => prev === "green" ? "blue" : "green");
  };

  return (
    <div className='App'>
      <Name style={{ color: fontColor, fontWeight: "bold", fontSize: "6rem" }} name={"Alex"} />
      <ProfilePicture imgSrc="./src/assets/alex.jpg" />
      <button onClick={handleColorChange}>Click Me</button>
    </div>
  );
}

export default App