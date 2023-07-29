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
            value
        };
        setVariables((prev) => [...prev, newVar]);
    }
    return (
        <div className="variable-storage">
            <div className="variable-storage-title">Variable Storage</div>
            <div className="variable-storage-table">
                <table>
                    <thead>
                        <tr>
                            <th width="25%">Name</th>
                            <th width="75%">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Object.entries(variables).map((variable) => (
                            <tr>
                                <td>{variable[0]}</td>
                                <td className="variable-storage-cell-value">{variable[1]}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VariableStorage;
