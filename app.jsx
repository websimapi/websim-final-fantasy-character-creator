import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
const RACES = ["Human", "Elf", "Dwarf", "Lalafell", "Miqo'te", "Roegadyn", "Au Ra", "Viera"];
const CLASSES = ["Warrior", "Mage", "Thief", "Paladin", "Dragoon", "Summoner", "Ninja", "Astrologian"];
function CharacterCreator({ setCharacter }) {
  const [formData, setFormData] = useState({
    description: "",
    race: RACES[0],
    skinColor: "#e0ac69",
    eyeColor: "#5b3a29",
    torsoColor: "#808080",
    beltColor: "#4b3621",
    legsColor: "#2c3e50",
    bootsColor: "#3d2b1f",
    class: CLASSES[0]
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedImage(null);
    const prompt = `Fantasy RPG character portrait, Final Fantasy style. A ${formData.race} ${formData.class}. 
        Character description: "${formData.description}".
        Skin color: ${formData.skinColor}. 
        Eye color: ${formData.eyeColor}.
        Clothed in armor with a ${formData.torsoColor} torso plate, a ${formData.beltColor} belt, ${formData.legsColor} leg guards, and ${formData.bootsColor} boots.
        Detailed, high quality, fantasy art.`;
    try {
      const result = await websim.imageGen({
        prompt,
        aspect_ratio: "2:3"
      });
      setGeneratedImage(result.url);
    } catch (error) {
      console.error("Error generating character:", error);
      alert("Failed to generate character. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };
  const handleSave = () => {
    if (!generatedImage) {
      alert("Please generate a character first!");
      return;
    }
    const characterData = {
      ...formData,
      imageUrl: generatedImage
    };
    localStorage.setItem("ff_character", JSON.stringify(characterData));
    setCharacter(characterData);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "ff-container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8", children: [
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "ff-title text-2xl mb-6 text-center", children: "Create Your Hero" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("textarea", { name: "description", value: formData.description, onChange: handleChange, placeholder: "Describe your character's personality, backstory, or key features...", className: "ff-input h-24 resize-none" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 70,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-bold mb-1", children: "Race" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 74,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV("select", { name: "race", value: formData.race, onChange: handleChange, className: "ff-select", children: RACES.map((r) => /* @__PURE__ */ jsxDEV("option", { value: r, children: r }, r, false, {
              fileName: "<stdin>",
              lineNumber: 75,
              columnNumber: 133
            }, this)) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 75,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 73,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-bold mb-1", children: "Class" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 78,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV("select", { name: "class", value: formData.class, onChange: handleChange, className: "ff-select", children: CLASSES.map((c) => /* @__PURE__ */ jsxDEV("option", { value: c, children: c }, c, false, {
              fileName: "<stdin>",
              lineNumber: 79,
              columnNumber: 137
            }, this)) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 79,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 77,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 72,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold pt-2", children: "Color Palette" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 83,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: Object.entries({ skinColor: "Skin", eyeColor: "Eyes", torsoColor: "Torso", beltColor: "Belt", legsColor: "Legs", bootsColor: "Boots" }).map(([key, label]) => /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-bold mb-1", children: label }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 87,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV("input", { type: "color", name: key, value: formData[key], onChange: handleChange, className: "w-full h-10 p-1 bg-gray-800 border border-gray-600 rounded-md" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 88,
            columnNumber: 33
          }, this)
        ] }, key, true, {
          fileName: "<stdin>",
          lineNumber: 86,
          columnNumber: 29
        }, this)) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 84,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: handleGenerate, disabled: isGenerating, className: "ff-button w-full mt-4", children: isGenerating ? "Summoning..." : "Generate Character" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 93,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 69,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center justify-center bg-gray-900 p-4 rounded-md border border-gray-700 min-h-[300px]", children: [
      isGenerating && /* @__PURE__ */ jsxDEV("div", { className: "spinner" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 99,
        columnNumber: 34
      }, this),
      !isGenerating && generatedImage && /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV("img", { src: generatedImage, alt: "Generated Character", className: "rounded-md shadow-lg max-w-full h-auto border-2 border-blue-500/50" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 102,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: handleSave, className: "ff-button w-full mt-4", children: "Save Character" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 103,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 101,
        columnNumber: 21
      }, this),
      !isGenerating && !generatedImage && /* @__PURE__ */ jsxDEV("div", { className: "text-gray-400 text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "ff-title text-xl", children: "Your hero awaits." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 110,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "Fill out the details and click Generate." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 111,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 109,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 98,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 66,
    columnNumber: 9
  }, this);
}
function CharacterSheet({ character, createNew }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "ff-container max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxDEV("h1", { className: "ff-title text-4xl mb-4", children: "Your Character" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 122,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxDEV("img", { src: character.imageUrl, alt: "Character Portrait", className: "rounded-lg shadow-lg border-2 border-blue-500/50 w-full" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 124,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-left space-y-2", children: [
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Description:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 126,
            columnNumber: 24
          }, this),
          " ",
          character.description
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 126,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Race:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 127,
            columnNumber: 24
          }, this),
          " ",
          character.race
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 127,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Class:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 128,
            columnNumber: 24
          }, this),
          " ",
          character.class
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 128,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 125,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 123,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex flex-col sm:flex-row justify-center gap-4", children: [
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button", onClick: () => alert("Offline mode coming soon!"), children: "Play Offline" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 132,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button", onClick: () => alert("Multiplayer coming soon!"), children: "Join/Host Game" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 133,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button bg-red-700 hover:bg-red-600", onClick: createNew, children: "Create New Character" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 134,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 131,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 121,
    columnNumber: 9
  }, this);
}
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
        lineNumber: 158,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "An Unwritten Tale" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 159,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 157,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "w-full", children: character ? /* @__PURE__ */ jsxDEV(CharacterSheet, { character, createNew }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 162,
      columnNumber: 30
    }, this) : /* @__PURE__ */ jsxDEV(CharacterCreator, { setCharacter }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 162,
      columnNumber: 95
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 161,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 156,
    columnNumber: 9
  }, this);
}
const root = createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 169,
  columnNumber: 13
}));
