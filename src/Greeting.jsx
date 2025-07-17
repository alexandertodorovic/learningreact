import React from "react";

function Greeting() {
    const [message, setMessage] = React.useState("Hello, Alex!");
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage("Welcome to React Alex!")}>Update Message</button>
        </div>
    );
}

export default Greeting;