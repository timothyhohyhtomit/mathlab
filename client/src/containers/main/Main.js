import React, { useState, useEffect } from "react";

import Header from "../../components/header/Header";
import FileExplorer from "../../components/file-explorer/FileExplorer";
import CodeEditor from "../../components/editor/CodeEditor";
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
    // CodeEditor
    const [openFiles, setOpenFiles] = useState([]);  // an array of open files objects
    const [untitledTabCount, setUntitledTabCount] = useState(0);
    const [currFile, setCurrFile] = useState(null);
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
    };
    // CodeEditor
    // createTab() creates a new file from scratch and adds it to the array of open files.
    const createTab = () => {
        // increment untitled file count by 1
        setUntitledTabCount((prev) => prev + 1);
        // construct new file object
        const file = {
            name: "Untitled-" + untitledTabCount + ".ms",
            path: null,
            unsaved: true,
            code: "",
        };
        // add new file object to open files state
        setOpenFiles((prev) => [...prev, file]);
        // set it to the current open file
        setCurrFile(file);
    };
    // openTab() opens an existing file from the file system and add it to the array of open files.
    const openTab = () => {};
    // closeTab() takes in a file name and, if it exists in the array of open files, removes it from there.
    const closeTab = (fileName) => {
        setOpenFiles((prev) => {
            return prev.filter((file) => file.name !== fileName);
        });
    };
    // handleCurrFileCodeChange handles the event in which the code in currFile changes. Updates the code property of the file object
    const handleCurrFileCodeChange = (newCode) => {
        setCurrFile((prev) => {
            return {
                ...prev,
                code: newCode
            };
        });
    }
    useEffect(() => {
        // when app launches, open a placeholder tab
        createTab();
    }, []);
    return (
        <div className="main">
            <Header />
            <FileExplorer />
            <CodeEditor
                openFiles={openFiles}
                currFile={currFile}
                createTab={createTab}
                closeTab={closeTab}
                handleCurrFileCodeChange={handleCurrFileCodeChange}
            />
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