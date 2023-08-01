import React from "react";

import "./Header.css";

function Header({ handleRunCurrentLine, handleRunAllLines }) {
    return (
        <div className="header">
            <button onClick={handleRunCurrentLine}>Run current line</button>
            <button onClick={handleRunAllLines}>Run all lines</button>
        </div>
    );
}

export default Header;