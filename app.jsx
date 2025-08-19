import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { getColorName } from "./colorNames.js";
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
        lineNumber: 82,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDEV("textarea", { name: "description", value: formData.description, onChange: handleChange, placeholder: "Describe your character's personality, backstory, or key features...", className: "ff-input h-24 resize-none" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 84,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-bold mb-1", children: "Race" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 88,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV("select", { name: "race", value: formData.race, onChange: handleChange, className: "ff-select", children: RACES.map((r) => /* @__PURE__ */ jsxDEV("option", { value: r, children: r }, r, false, {
              fileName: "<stdin>",
              lineNumber: 89,
              columnNumber: 133
            }, this)) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 89,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 87,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-bold mb-1", children: "Class" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 92,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV("select", { name: "class", value: formData.class, onChange: handleChange, className: "ff-select", children: CLASSES.map((c) => /* @__PURE__ */ jsxDEV("option", { value: c, children: c }, c, false, {
              fileName: "<stdin>",
              lineNumber: 93,
              columnNumber: 137
            }, this)) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 93,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 91,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 86,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold pt-2", children: "Color Palette" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 97,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: Object.entries({ skinColor: "Skin", eyeColor: "Eyes", torsoColor: "Torso", beltColor: "Belt", legsColor: "Legs", bootsColor: "Boots" }).map(([key, label]) => /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-bold mb-1", children: label }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 101,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV("input", { type: "color", name: key, value: formData[key], onChange: handleChange, className: "w-full h-10 p-1 bg-gray-800 border border-gray-600 rounded-md" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 102,
            columnNumber: 33
          }, this)
        ] }, key, true, {
          fileName: "<stdin>",
          lineNumber: 100,
          columnNumber: 29
        }, this)) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 98,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: handleGenerate, disabled: isGenerating, className: "ff-button w-full mt-4", children: isGenerating ? "Summoning..." : "Generate Character" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 107,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-4 p-4 bg-gray-900 rounded-md border border-gray-700", children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-bold text-blue-300 mb-2", children: "Generation Prompt:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 112,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-300 leading-relaxed font-mono", children: buildPrompt(formData) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 113,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 111,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 83,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 81,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center justify-center bg-gray-900 p-4 rounded-md border border-gray-700 min-h-[300px]", children: [
      isGenerating && /* @__PURE__ */ jsxDEV("div", { className: "spinner" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 120,
        columnNumber: 34
      }, this),
      !isGenerating && generatedImage && /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV("img", { src: generatedImage, alt: "Generated Character", className: "rounded-md shadow-lg max-w-full h-auto border-2 border-blue-500/50" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 123,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: handleSave, className: "ff-button w-full mt-4", children: "Save Character" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 124,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 122,
        columnNumber: 21
      }, this),
      !isGenerating && !generatedImage && /* @__PURE__ */ jsxDEV("div", { className: "text-gray-400 text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "ff-title text-xl", children: "Your hero awaits." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 131,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "Fill out the details and click Generate." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 132,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 130,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 119,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 80,
    columnNumber: 9
  }, this);
}
function GameScene({ character, returnToMenu }) {
  const canvasRef = React.useRef(null);
  const [playerImage, setPlayerImage] = useState(null);
  const [gameState, setGameState] = useState({
    player: { x: 400, y: 300, facing: "down" },
    npcs: [
      { id: 1, x: 200, y: 200, name: "Elder Marcus", dialogue: "Welcome to Crystal Town, young adventurer!" },
      { id: 2, x: 600, y: 150, name: "Shopkeeper Luna", dialogue: "I have potions and supplies for your journey!" },
      { id: 3, x: 300, y: 450, name: "Guard Captain", dialogue: "The roads beyond are dangerous. Be careful!" }
    ],
    showDialogue: null,
    keys: {}
  });
  useEffect(() => {
    if (character.imageUrl) {
      const img = new Image();
      img.src = character.imageUrl;
      img.onload = () => setPlayerImage(img);
    }
  }, [character.imageUrl]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const handleKeyDown = (e) => {
      setGameState((prev) => ({
        ...prev,
        keys: { ...prev.keys, [e.key.toLowerCase()]: true }
      }));
    };
    const handleKeyUp = (e) => {
      setGameState((prev) => ({
        ...prev,
        keys: { ...prev.keys, [e.key.toLowerCase()]: false }
      }));
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  useEffect(() => {
    const gameLoop = setInterval(() => {
      setGameState((prev) => {
        let newX = prev.player.x;
        let newY = prev.player.y;
        let facing = prev.player.facing;
        const speed = 2;
        if (prev.keys["w"] || prev.keys["arrowup"]) {
          newY = Math.max(50, prev.player.y - speed);
          facing = "up";
        }
        if (prev.keys["s"] || prev.keys["arrowdown"]) {
          newY = Math.min(550, prev.player.y + speed);
          facing = "down";
        }
        if (prev.keys["a"] || prev.keys["arrowleft"]) {
          newX = Math.max(50, prev.player.x - speed);
          facing = "left";
        }
        if (prev.keys["d"] || prev.keys["arrowright"]) {
          newX = Math.min(750, prev.player.x + speed);
          facing = "right";
        }
        return {
          ...prev,
          player: { x: newX, y: newY, facing }
        };
      });
    }, 16);
    return () => clearInterval(gameLoop);
  }, []);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#2d5016";
    ctx.fillRect(0, 0, 800, 600);
    ctx.fillStyle = "#4a90e2";
    ctx.fillRect(350, 250, 100, 100);
    ctx.fillStyle = "#87ceeb";
    ctx.fillRect(365, 265, 70, 70);
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(100, 100, 120, 80);
    ctx.fillStyle = "#dc143c";
    ctx.fillRect(100, 100, 120, 30);
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(550, 80, 120, 80);
    ctx.fillStyle = "#dc143c";
    ctx.fillRect(550, 80, 120, 30);
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(150, 400, 120, 80);
    ctx.fillStyle = "#dc143c";
    ctx.fillRect(150, 400, 120, 30);
    ctx.fillStyle = "#deb887";
    ctx.fillRect(0, 290, 800, 20);
    ctx.fillRect(390, 0, 20, 600);
    gameState.npcs.forEach((npc) => {
      ctx.fillStyle = "#ff69b4";
      ctx.fillRect(npc.x - 15, npc.y - 15, 30, 30);
      ctx.fillStyle = "#000";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(npc.name, npc.x, npc.y - 20);
    });
    if (playerImage) {
      const playerWidth = 40;
      const playerHeight = 60;
      ctx.drawImage(playerImage, gameState.player.x - playerWidth / 2, gameState.player.y - playerHeight / 2, playerWidth, playerHeight);
    } else {
      ctx.fillStyle = "#4169e1";
      ctx.fillRect(gameState.player.x - 15, gameState.player.y - 15, 30, 30);
    }
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "black";
    ctx.shadowBlur = 4;
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("You", gameState.player.x, gameState.player.y - 35);
    ctx.shadowBlur = 0;
  }, [gameState.player, gameState.npcs, playerImage]);
  const checkInteraction = () => {
    const playerX = gameState.player.x;
    const playerY = gameState.player.y;
    gameState.npcs.forEach((npc) => {
      const distance = Math.sqrt(
        Math.pow(playerX - npc.x, 2) + Math.pow(playerY - npc.y, 2)
      );
      if (distance < 50) {
        setGameState((prev) => ({
          ...prev,
          showDialogue: npc
        }));
      }
    });
  };
  const closeDialogue = () => {
    setGameState((prev) => ({
      ...prev,
      showDialogue: null
    }));
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "ff-container max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-4", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "ff-title text-3xl text-blue-300", children: "Crystal Town" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 320,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "Use WASD or Arrow Keys to move \u2022 Space to interact with NPCs" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 321,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 319,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative bg-black border-2 border-gray-600 rounded-lg overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV(
        "canvas",
        {
          ref: canvasRef,
          width: 800,
          height: 600,
          className: "block",
          onClick: checkInteraction
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 325,
          columnNumber: 17
        },
        this
      ),
      gameState.showDialogue && /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-4 left-4 right-4 bg-gray-800 border-2 border-blue-500 rounded-lg p-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-blue-300", children: gameState.showDialogue.name }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 337,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-white mt-2", children: gameState.showDialogue.dialogue }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 338,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 336,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: closeDialogue,
            className: "text-gray-400 hover:text-white text-xl",
            children: "\xD7"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 340,
            columnNumber: 29
          },
          this
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 335,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 334,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 324,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex justify-center gap-4", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: checkInteraction,
          className: "ff-button",
          children: "Interact (Space)"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 352,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: returnToMenu,
          className: "ff-button bg-red-700 hover:bg-red-600",
          children: "Return to Menu"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 358,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 351,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-4 grid grid-cols-2 gap-4 text-sm", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-900 p-3 rounded-md border border-gray-700", children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-blue-300 mb-2", children: "Your Character" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 368,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "Race:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 369,
            columnNumber: 24
          }, this),
          " ",
          character.race
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 369,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "Class:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 370,
            columnNumber: 24
          }, this),
          " ",
          character.class
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 370,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 367,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-900 p-3 rounded-md border border-gray-700", children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-blue-300 mb-2", children: "Tutorial" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 373,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "\u2022 Move around with WASD" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 374,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "\u2022 Click near NPCs to talk" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 375,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "\u2022 Explore the town!" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 376,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 372,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 366,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 318,
    columnNumber: 9
  }, this);
}
function CharacterSheet({ character, createNew }) {
  const [showGame, setShowGame] = useState(false);
  if (showGame) {
    return /* @__PURE__ */ jsxDEV(GameScene, { character, returnToMenu: () => setShowGame(false) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 387,
      columnNumber: 16
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "ff-container max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxDEV("h1", { className: "ff-title text-4xl mb-4", children: "Your Character" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 392,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxDEV("img", { src: character.imageUrl, alt: "Character Portrait", className: "rounded-lg shadow-lg border-2 border-blue-500/50 w-full" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 394,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-left space-y-2", children: [
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Description:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 396,
            columnNumber: 24
          }, this),
          " ",
          character.description
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 396,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Race:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 397,
            columnNumber: 24
          }, this),
          " ",
          character.race
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 397,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "font-bold text-blue-300", children: "Class:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 398,
            columnNumber: 24
          }, this),
          " ",
          character.class
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 398,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 395,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 393,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex flex-col sm:flex-row justify-center gap-4", children: [
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button", onClick: () => setShowGame(true), children: "Play Offline" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 402,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button", onClick: () => alert("Multiplayer coming soon!"), children: "Join/Host Game" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 403,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "ff-button bg-red-700 hover:bg-red-600", onClick: createNew, children: "Create New Character" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 404,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 401,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 391,
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
        lineNumber: 428,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "An Unwritten Tale" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 429,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 427,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "w-full", children: character ? /* @__PURE__ */ jsxDEV(CharacterSheet, { character, createNew }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 432,
      columnNumber: 30
    }, this) : /* @__PURE__ */ jsxDEV(CharacterCreator, { setCharacter }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 432,
      columnNumber: 95
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 431,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 426,
    columnNumber: 9
  }, this);
}
const root = createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 439,
  columnNumber: 13
}));
