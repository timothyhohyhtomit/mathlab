import React from "react";

import "./VariableStorage.css";

function VariableStorage({variables, setVariables}) {
    const generateRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };
    const generateRandomChar = () => {
        const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabets[generateRandomInt(52)];
    };
    const handleAddNew = (e) => {
        const nameLength = generateRandomInt(10) + 1;
        let name = "";
        for (let i = 0; i < nameLength; i++) name += generateRandomChar();
        const value = generateRandomInt(100) / generateRandomInt(100);
        const newVar = {
            name,
            value,
            type: "double"
        };
        setVariables((prev) => [...prev, newVar]);
    }
    return (
        <div className="variable-storage">
            <button onClick={handleAddNew}>Add New</button>
            <table className="variable-storage-table">
                <tr>
                    <th width="20%">Name</th>
                    <th width="70%">Value</th>
                    <th width="10%">Type</th>
                </tr>
                {
                    variables.map((variable) => (
                        <tr>
                            <td>{variable.name}</td>
                            <td className="variable-storage-cell-value">{variable.value}</td>
                            <td>{variable.type}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default VariableStorage;
