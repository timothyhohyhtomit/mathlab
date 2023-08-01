import React, { useRef } from "react";
import Editor from "react-simple-code-editor";

import CodeTab from "./CodeTab";

import "./CodeEditor.css";

function CodeEditor({ openFiles, currFile, setCurrLine, createTab, closeTab, handleCurrFileCodeChange }) {
    // refs
    const editorRef = useRef(null);
    // handlers
    const handleBlur = (e) => {
        const lineNumber = e.target.value.substring(0, e.target.selectionStart).split("\n").length - 1;
        const allLines = e.target.value.split("\n");
        setCurrLine(allLines[lineNumber]);
    }
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
                    onBlur={handleBlur}
                    ref={editorRef}
                />
                }
            </div>
        </div>
    );
}

export default CodeEditor;
