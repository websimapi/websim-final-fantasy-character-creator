import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
import { GameScene } from "./GameScene.jsx";
function CharacterSheet({ character, createNew }) {
  const [showGame, setShowGame] = useState(false);
  if (showGame) {
    return /* @__PURE__ */ jsxDEV(GameScene, { character, returnToMenu: () => setShowGame(false) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 8,
      columnNumber: 16
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "ff-container max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxDEV("h1", { className: "ff-title text-4xl mb-4", children: "Your Character" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxDEV("img", { src: character.imageUrl, alt: "Character Portrait", className: "rounded-lg shadow-lg border-2 border-blue-500/50 w-full" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-left space-y-2", children: [
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Description:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 17,
            columnNumber: 24
          }, this),
          " ",
          character.description
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 17,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Race:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 18,
            columnNumber: 24
          }, this),
          " ",
          character.race
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 18,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Class:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 19,
            columnNumber: 24
          }, this),
          " ",
          character.class
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 19,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 16,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex flex-col sm:flex-row justify-center gap-4", children: [
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button", onClick: () => setShowGame(true), children: "Play Offline" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 23,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button", onClick: () => alert("Multiplayer coming soon!"), children: "Join/Host Game" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 24,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button bg-red-700 hover:bg-red-600", onClick: createNew, children: "Create New Character" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 25,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 22,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}
export {
  CharacterSheet
};
