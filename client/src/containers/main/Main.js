import React from "react";

import Header from "../../components/header/Header";
import FileExplorer from "../../components/file-explorer/FileExplorer";
import Editor from "../../components/editor/Editor";
import VariableStorage from "../../components/variable-storage/VariableStorage";
import CommandWindow from "../../components/command-window/CommandWindow";

import "./Main.css";

function Main() {
    return (
        <div className="main">
            <Header />
            <FileExplorer />
            <Editor />
            <VariableStorage />
            <CommandWindow />
        </div>
    );
}

export default Main;