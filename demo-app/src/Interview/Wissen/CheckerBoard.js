import React from 'react';
import { useState } from 'react';

export default function CheckerBoard() {
    const board = ["10101", "01010", "10101", "01010", "10101"];

    const styles = {
        board: {
          display: 'inline-block',
          border: '2px solid #000',
        },
        row: {
            display: 'flex',
        },
        cell: {
            width: '50px',
            height: '50px',
            border: '1px solid #999',
        }
    };


    const [rows, setRows] = useState(5);
    const [cols, setCols] = useState(5);

    // Generate checkerboard array dynamically
    const generateBoard = () => {
        let board = [];
        for (let r = 0; r < rows; r++) {
            let row = "";
            for (let c = 0; c < cols; c++) {
                row += (r + c) % 2 === 0 ? "1" : "0"; // alternate pattern
            }
            board.push(row);
        }
        return board;
    };

    const dynamicBoard = generateBoard();


    return (
        <>
            <div>
                {board.map((item, i) => (
                    <div key={i} style={styles.row}>
                        {item.split('').map((cell, colIndex) => (
                            <div key={colIndex} style={{
                                ...styles.cell,
                                backgroundColor: cell === '1' ? 'white' : 'Black'
                            }}>

                            </div>
                        ))}
                    </div>

                ))}
            </div>
            <div>
                <h3>Dynamic Checker board</h3>

                <div>
                    <div style={{ marginBottom: "10px" }}>
                        <label>
                            Rows:
                            <input
                                type="number"
                                value={rows}
                                onChange={(e) => setRows(Number(e.target.value))}
                                min="1"
                            />
                        </label>
                        <label style={{ marginLeft: "10px" }}>
                            Columns:
                            <input
                                type="number"
                                value={cols}
                                onChange={(e) => setCols(Number(e.target.value))}
                                min="1"
                            />
                        </label>
                    </div>

                    <div style={styles.board}>
                        {dynamicBoard.map((row, rowIndex) => (
                            <div key={rowIndex} style={styles.row}>
                                {row.split("").map((cell, colIndex) => (
                                    <div
                                        key={colIndex}
                                        style={{
                                            ...styles.cell,
                                            backgroundColor: cell === "1" ? "white" : "black"
                                        }}
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}