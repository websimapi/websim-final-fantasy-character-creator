import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { CharacterCreator } from "./CharacterCreator.jsx";
import { CharacterSheet } from "./CharacterSheet.jsx";
function App() {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    const savedCharacter = localStorage.getItem("ff_character");
    if (savedCharacter) {
      setCharacter(JSON.parse(savedCharacter));
    }
  }, []);
  const createNew = () => {
    localStorage.removeItem("ff_character");
    setCharacter(null);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen p-4 sm:p-8 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "ff-title text-5xl tracking-widest text-blue-300", children: "CRYSTAL LEGACY" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "An Unwritten Tale" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 33,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "w-full", children: character ? /* @__PURE__ */ jsxDEV(CharacterSheet, { character, createNew }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 30
    }, this) : /* @__PURE__ */ jsxDEV(CharacterCreator, { setCharacter }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 36,
      columnNumber: 95
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 30,
    columnNumber: 9
  }, this);
}
const root = createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 43,
  columnNumber: 13
}));
