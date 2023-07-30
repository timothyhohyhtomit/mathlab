import React from "react";
import Editor from "react-simple-code-editor";

import CodeTab from "./CodeTab";

import "./CodeEditor.css";

function CodeEditor({ openFiles, currFile, createTab, closeTab, handleCurrFileCodeChange }) {
    const addLineNumbers = (code) => code
        .split("\n")
        .map((line, i) => `<span class='editor-file-line-number'>${i + 1}</span>${line}`)
        .join("\n");
    return (
        <div className="editor">
            <div className="editor-tabs">
                {
                    openFiles.map((file) => {
                        return <CodeTab fileName={file.name} />;
                    })
                }
            </div>
            <div className="editor-file">
                { currFile &&
                <Editor
                    value={currFile.code}
                    onValueChange={handleCurrFileCodeChange}
                    highlight={addLineNumbers}
                    padding="10"
                    textareaId="editor-file-code"
                    className="editor-file-editor"
                />
                }
            </div>
        </div>
    );
}

export default CodeEditor;
