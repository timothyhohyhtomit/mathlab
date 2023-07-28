import React, { useState } from "react";

import Header from "../../components/header/Header";
import FileExplorer from "../../components/file-explorer/FileExplorer";
import Editor from "../../components/editor/Editor";
import VariableStorage from "../../components/variable-storage/VariableStorage";
import CommandWindow from "../../components/command-window/CommandWindow";

import "./Main.css";
import { compute } from "../../util/eval";

function Main() {
    /* states */
    // CommandWindow
    const [queryHistory, setQueryHistory] = useState([]);  // history of submitted queries
    const [query, setQuery] = useState("");  // query shown in input element
    /* handlers */
    // CommandWindow
    const handleKeyUpQuery = (e) => {
        if (e.keyCode !== 13) return;
        // if enter was pressed, compute result
        const result = compute(query);
        // add query to history
        const newItem = {
            query,
            result
        };
        setQueryHistory((prev) => {
            return [...prev, newItem];
        });
    }
    return (
        <div className="main">
            <Header />
            <FileExplorer />
            <Editor />
            <VariableStorage />
            <CommandWindow
                queryHistory={queryHistory}
                setQueryHistory={setQueryHistory}
                query={query}
                setQuery={setQuery}
                handleKeyUpQuery={handleKeyUpQuery}
            />
        </div>
    );
}

export default Main;