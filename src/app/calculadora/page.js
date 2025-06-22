"use client";
import React, { useState } from "react";
import "./page.css";

export default function Home() {
  const [value, setValue] = useState("");

  const operators = ["+", "-", "*", "/"];


  const buttons = [
    [
      { label: "7", type: "number" },
      { label: "8", type: "number" },
      { label: "9", type: "number" },
      { label: "/", type: "operator" },
    ],
    [
      { label: "4", type: "number" },
      { label: "5", type: "number" },
      { label: "6", type: "number" },
      { label: "*", type: "operator" },
    ],
    [
      { label: "1", type: "number" },
      { label: "2", type: "number" },
      { label: "3", type: "number" },
      { label: "-", type: "operator" },
    ],
    [
      { label: "0", type: "number" },
      { label: ".", type: "number" },
      { label: "C", type: "clear" },
      { label: "+", type: "operator" },
    ],
    [
      { label: "⌫", type: "delete" },
      { label: "=", type: "equal" },
    ]
  ];

  function renderButtons(buttons, handleClick) {
    return buttons.map((row, rowIndex) => (
      <div key={rowIndex} className="button-row">
        {row.map((button) => {
          const { label, type } = button;

          return (
            <button
              key={label}
              className={`button ${type}`}
              onClick={() => handleClick(label, type)}
            >
              {label}
            </button>
          )
        })}
      </div>
    ))
  }

  function handleClick(label, type) {
    if (type === "clear") {
      setValue("")
    }
    else if (type === "delete") {
      setValue((prev) => prev.slice(0, -1))
    } else if (type === "equal") {
      calculate()
    } else if (type === "operator") {
      setValue((prev) => {
        const lastChar = prev.slice(-1)

        if (operators.includes(lastChar)) {
          return prev.slice(0, -1) + label
        } else {
          return prev + label
        }
      })
    } else if (type !== "delete") {
      setValue((prev) => prev + label);
    }
  }

  function calculate() {
    try {
      const result = eval(value)
      setValue(result.toString())
    } catch (eror) {
      setValue("Erro")
    }
  }


  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input type="text" className="display-input" readOnly value={value} />
        </div>
        <div className="buttons">
          {renderButtons(buttons, handleClick)}
        </div>
      </div>
    </div>
  );
}

