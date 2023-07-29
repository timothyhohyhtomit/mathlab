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
    // VariableStorage
    const [variables, setVariables] = useState({});  // an object of variables where key is variable name and value is variable value
    /* handlers */
    // CommandWindow
    const handleKeyUpQuery = (e) => {
        if (e.keyCode !== 13) return;
        // if enter was pressed, clear input
        setQuery("");
        // compute result
        const result = compute(query, variables);
        // add query to history
        const newItem = {
            query,
            result
        };
        setQueryHistory((prev) => {
            return [...prev, newItem];
        });
        // update variable value
        setVariables((prev) => {
            return {
                ...prev,
                [result.variable]: result.value
            };
        });
    }
    return (
        <div className="main">
            <Header />
            <FileExplorer />
            <Editor />
            <VariableStorage
                variables={variables}
                setVariables={setVariables}
            />
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