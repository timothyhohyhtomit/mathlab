import React from "react";

import "./CommandWindow.css";

function CommandWindow({queryHistory, setQueryHistory, query, setQuery, handleKeyUpQuery}) {
    return (
        <div className="command-window">
            <table>
                <tr>
                    <td>
                        <div className="command-window-title">Command Window</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="command-window-body">
                            <div className="command-window-history">
                                <ul>
                                    {
                                        queryHistory.map((item) => (
                                            <>
                                                <li className="command-window-history-item">{item.query}<br />{item.result}</li>
                                            </>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="command-window-query">
                                <label for="command-window-query-input" className="command-window-query-arrow">&gt;&gt;&gt;&nbsp;</label>
                                <input id="command-window-query-input" type="text" value={query} onChange={(e) => setQuery(e.currentTarget.value)} onKeyUp={handleKeyUpQuery} />
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default CommandWindow;
