import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { getColorName } from "./colorNames.js";
import ReactDOM from "react-dom/client";
const races = ["Human", "Elf", "Dwarf", "Orc", "Tiefling", "Dragonborn"];
const classes = ["Warrior", "Mage", "Rogue", "Paladin", "Ranger", "Necromancer"];
const skinColors = ["#e0ac69", "#c68642", "#8d5524", "#f1c27d", "#ffdbac", "#f6d5b8"];
const eyeColors = ["#5b3a29", "#3d2314", "#006400", "#4169e1", "#9370db", "#8b008b"];
const armorColors = ["#4b3621", "#a0522d", "#696969", "#ffd700", "#c0c0c0", "#b87333"];
function CharacterCreator() {
  const [character, setCharacter] = useState({
    name: "",
    race: "Human",
    class: "Warrior",
    skinColor: "#e0ac69",
    eyeColor: "#5b3a29",
    torsoColor: "#4b3621",
    beltColor: "#a0522d",
    legsColor: "#696969",
    bootsColor: "#696969",
    description: ""
  });
  const [prompt, setPrompt] = useState("");
  useEffect(() => {
    const skinName = getColorName(character.skinColor);
    const eyeName = getColorName(character.eyeColor);
    const torsoName = getColorName(character.torsoColor);
    const beltName = getColorName(character.beltColor);
    const legsName = getColorName(character.legsColor);
    const bootsName = getColorName(character.bootsColor);
    const newPrompt = `Fantasy RPG character portrait, Final Fantasy style. A ${character.race} ${character.class}. 
Character description: "${character.description || "A brave adventurer"}".
Skin: ${skinName}. 
Eyes: ${eyeName}.
Clothed in armor with a ${torsoName} torso plate, a ${beltName} belt, ${legsName} leg guards, and ${bootsName} boots.
Detailed, high quality, fantasy art.`;
    setPrompt(newPrompt);
  }, [character]);
  const updateCharacter = (field, value) => {
    setCharacter((prev) => ({ ...prev, [field]: value }));
  };
  const generateCharacter = () => {
    const characterData = {
      ...character,
      generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      id: Date.now().toString()
    };
    const existing = JSON.parse(localStorage.getItem("ff_characters") || "[]");
    existing.push(characterData);
    localStorage.setItem("ff_characters", JSON.stringify(existing));
    alert("Character saved to local storage!");
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gray-900 py-8", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV("h1", { className: "ff-title text-4xl text-center mb-8 text-yellow-400", children: "Final Fantasy Character Creator" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 66,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "ff-container", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "ff-title text-2xl mb-4 text-blue-300", children: "Character Details" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 70,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium mb-2", children: "Character Name" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 74,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                className: "ff-input",
                value: character.name,
                onChange: (e) => updateCharacter("name", e.target.value),
                placeholder: "Enter character name"
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 75,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 73,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium mb-2", children: "Race" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 85,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV(
              "select",
              {
                className: "ff-select",
                value: character.race,
                onChange: (e) => updateCharacter("race", e.target.value),
                children: races.map((race) => /* @__PURE__ */ jsxDEV("option", { value: race, children: race }, race, false, {
                  fileName: "<stdin>",
                  lineNumber: 92,
                  columnNumber: 41
                }, this))
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 86,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 84,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium mb-2", children: "Class" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 98,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV(
              "select",
              {
                className: "ff-select",
                value: character.class,
                onChange: (e) => updateCharacter("class", e.target.value),
                children: classes.map((cls) => /* @__PURE__ */ jsxDEV("option", { value: cls, children: cls }, cls, false, {
                  fileName: "<stdin>",
                  lineNumber: 105,
                  columnNumber: 41
                }, this))
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 99,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 97,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium mb-2", children: "Skin Color" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 111,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 flex-wrap", children: skinColors.map((color) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                className: `w-8 h-8 rounded border-2 ${character.skinColor === color ? "border-white" : "border-gray-600"}`,
                style: { backgroundColor: color },
                onClick: () => updateCharacter("skinColor", color)
              },
              color,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 114,
                columnNumber: 41
              },
              this
            )) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 112,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 110,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium mb-2", children: "Eye Color" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 125,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 flex-wrap", children: eyeColors.map((color) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                className: `w-8 h-8 rounded border-2 ${character.eyeColor === color ? "border-white" : "border-gray-600"}`,
                style: { backgroundColor: color },
                onClick: () => updateCharacter("eyeColor", color)
              },
              color,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 128,
                columnNumber: 41
              },
              this
            )) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 126,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 124,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium mb-2", children: "Torso Armor" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 139,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 flex-wrap", children: armorColors.map((color) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                className: `w-8 h-8 rounded border-2 ${character.torsoColor === color ? "border-white" : "border-gray-600"}`,
                style: { backgroundColor: color },
                onClick: () => updateCharacter("torsoColor", color)
              },
              color,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 142,
                columnNumber: 41
              },
              this
            )) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 140,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 138,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium mb-2", children: "Belt Color" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 153,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 flex-wrap", children: armorColors.map((color) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                className: `w-8 h-8 rounded border-2 ${character.beltColor === color ? "border-white" : "border-gray-600"}`,
                style: { backgroundColor: color },
                onClick: () => updateCharacter("beltColor", color)
              },
              color,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 156,
                columnNumber: 41
              },
              this
            )) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 154,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 152,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium mb-2", children: "Leg Guards" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 167,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 flex-wrap", children: armorColors.map((color) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                className: `w-8 h-8 rounded border-2 ${character.legsColor === color ? "border-white" : "border-gray-600"}`,
                style: { backgroundColor: color },
                onClick: () => updateCharacter("legsColor", color)
              },
              color,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 170,
                columnNumber: 41
              },
              this
            )) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 168,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 166,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium mb-2", children: "Boots" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 181,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 flex-wrap", children: armorColors.map((color) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                className: `w-8 h-8 rounded border-2 ${character.bootsColor === color ? "border-white" : "border-gray-600"}`,
                style: { backgroundColor: color },
                onClick: () => updateCharacter("bootsColor", color)
              },
              color,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 184,
                columnNumber: 41
              },
              this
            )) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 182,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 180,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium mb-2", children: "Description" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 195,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV(
              "textarea",
              {
                className: "ff-input",
                rows: "3",
                value: character.description,
                onChange: (e) => updateCharacter("description", e.target.value),
                placeholder: "Describe your character..."
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 196,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 194,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              className: "ff-button w-full",
              onClick: generateCharacter,
              children: "Generate Character"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 205,
              columnNumber: 29
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 72,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 69,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "ff-container", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "ff-title text-2xl mb-4 text-blue-300", children: "Character Prompt" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 215,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-900 p-4 rounded border border-gray-700", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-300 whitespace-pre-wrap", children: prompt }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 217,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 216,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 214,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 68,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 65,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 64,
    columnNumber: 9
  }, this);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(CharacterCreator, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 227,
  columnNumber: 13
}));
