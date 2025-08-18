import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { getColorName } from "./colorNames.js";
import { TownScene } from "./town_scene.js";
const websim = window.websim || {
  imageGen: async (params) => {
    console.log("Mock image generation:", params.prompt);
    return { url: `https://via.placeholder.com/400x600/4a5568/ffffff?text=Character+Generated` };
  }
};
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
    const prompt = buildPrompt(formData);
    try {
      const result = await websim.imageGen({
        prompt,
        aspect_ratio: "2:3",
        transparent: true
      });
      setGeneratedImage(result.url);
    } catch (error) {
      console.error("Error generating character:", error);
      alert("Failed to generate character. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };
  const buildPrompt = (data) => {
    const skinName = getColorName(data.skinColor);
    const eyeName = getColorName(data.eyeColor);
    const torsoName = getColorName(data.torsoColor);
    const beltName = getColorName(data.beltColor);
    const legsName = getColorName(data.legsColor);
    const bootsName = getColorName(data.bootsColor);
    let paragraph = `A ${data.race} ${data.class} with ${skinName} skin and ${eyeName} eyes, clad in armor featuring a ${torsoName} torso plate, a ${beltName} belt, ${legsName} leg guards, and ${bootsName} boots`;
    if (data.description.trim()) {
      paragraph = `${data.description} ${paragraph.toLowerCase()}`;
    }
    return `Fantasy RPG character portrait, Final Fantasy style. ${paragraph}. Detailed, high quality, fantasy art. Transparent background, no background, isolated character.`;
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
        lineNumber: 91,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("textarea", { name: "description", value: formData.description, onChange: handleChange, placeholder: "Describe your character's personality, backstory, or key features...", className: "ff-input h-24 resize-none" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 93,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-bold mb-1", children: "Race" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 97,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV("select", { name: "race", value: formData.race, onChange: handleChange, className: "ff-select", children: RACES.map((r) => /* @__PURE__ */ jsxDEV("option", { value: r, children: r }, r, false, {
              fileName: "<stdin>",
              lineNumber: 98,
              columnNumber: 133
            }, this)) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 98,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 96,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-bold mb-1", children: "Class" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 101,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV("select", { name: "class", value: formData.class, onChange: handleChange, className: "ff-select", children: CLASSES.map((c) => /* @__PURE__ */ jsxDEV("option", { value: c, children: c }, c, false, {
              fileName: "<stdin>",
              lineNumber: 102,
              columnNumber: 137
            }, this)) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 102,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 100,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 95,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold pt-2", children: "Color Palette" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 106,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: Object.entries({ skinColor: "Skin", eyeColor: "Eyes", torsoColor: "Torso", beltColor: "Belt", legsColor: "Legs", bootsColor: "Boots" }).map(([key, label]) => /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-bold mb-1", children: label }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 110,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV("input", { type: "color", name: key, value: formData[key], onChange: handleChange, className: "w-full h-10 p-1 bg-gray-800 border border-gray-600 rounded-md" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 111,
            columnNumber: 33
          }, this)
        ] }, key, true, {
          fileName: "<stdin>",
          lineNumber: 109,
          columnNumber: 29
        }, this)) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 107,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: handleGenerate, disabled: isGenerating, className: "ff-button w-full mt-4", children: isGenerating ? "Summoning..." : "Generate Character" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 116,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-4 p-4 bg-gray-900 rounded-md border border-gray-700", children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-bold text-blue-300 mb-2", children: "Generation Prompt:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 121,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-300 leading-relaxed font-mono", children: buildPrompt(formData) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 122,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 120,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 92,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 90,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center justify-center bg-gray-900 p-4 rounded-md border border-gray-700 min-h-[300px]", children: [
      isGenerating && /* @__PURE__ */ jsxDEV("div", { className: "spinner" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 129,
        columnNumber: 34
      }, this),
      !isGenerating && generatedImage && /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV("img", { src: generatedImage, alt: "Generated Character", className: "rounded-md shadow-lg max-w-full h-auto border-2 border-blue-500/50" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 132,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: handleSave, className: "ff-button w-full mt-4", children: "Save Character" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 133,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 131,
        columnNumber: 21
      }, this),
      !isGenerating && !generatedImage && /* @__PURE__ */ jsxDEV("div", { className: "text-gray-400 text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "ff-title text-xl", children: "Your hero awaits." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 140,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "Fill out the details and click Generate." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 141,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 139,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 128,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 89,
    columnNumber: 9
  }, this);
}
function CharacterSheet({ character, createNew }) {
  const [showTown, setShowTown] = useState(false);
  if (showTown) {
    return /* @__PURE__ */ jsxDEV(TownScene, { character, onExit: () => setShowTown(false) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 153,
      columnNumber: 16
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "ff-container max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxDEV("h1", { className: "ff-title text-4xl mb-4", children: "Your Character" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 158,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxDEV("img", { src: character.imageUrl, alt: "Character Portrait", className: "rounded-lg shadow-lg border-2 border-blue-500/50 w-full" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 160,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-left space-y-2", children: [
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Name:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 162,
            columnNumber: 24
          }, this),
          " ",
          character.description.split(" ")[0] || "Hero"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 162,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Race:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 163,
            columnNumber: 24
          }, this),
          " ",
          character.race
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 163,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Class:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 164,
            columnNumber: 24
          }, this),
          " ",
          character.class
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 164,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Description:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 165,
            columnNumber: 24
          }, this),
          " ",
          character.description
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 165,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 161,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 159,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex flex-col sm:flex-row justify-center gap-4", children: [
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button", onClick: () => setShowTown(true), children: "Play Offline (Tutorial)" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 169,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button", onClick: () => alert("Multiplayer coming soon!"), children: "Join/Host Game" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 172,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button bg-red-700 hover:bg-red-600", onClick: createNew, children: "Create New Character" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 175,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 168,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 157,
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
        lineNumber: 201,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "An Unwritten Tale" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 202,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 200,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "w-full", children: character ? /* @__PURE__ */ jsxDEV(CharacterSheet, { character, createNew }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 205,
      columnNumber: 30
    }, this) : /* @__PURE__ */ jsxDEV(CharacterCreator, { setCharacter }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 205,
      columnNumber: 95
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 204,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 199,
    columnNumber: 9
  }, this);
}
const root = createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 212,
  columnNumber: 13
}));
