import React from "react";

import "./CodeTab.css";

function CodeTab({ fileName }) {
    return (
        <div className="tab">
            <div className="tab-file-name">{fileName}</div>
            <div className="tab-close">X</div>
        </div>
    );
}

export default CodeTab;
