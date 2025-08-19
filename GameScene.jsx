import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect, useRef } from "react";
function GameScene({ character, returnToMenu }) {
  const canvasRef = useRef(null);
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
        lineNumber: 180,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-400", children: "Use WASD or Arrow Keys to move \u2022 Space to interact with NPCs" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 181,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 179,
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
          lineNumber: 185,
          columnNumber: 17
        },
        this
      ),
      gameState.showDialogue && /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-4 left-4 right-4 bg-gray-800 border-2 border-blue-500 rounded-lg p-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-start", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-blue-300", children: gameState.showDialogue.name }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 197,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-white mt-2", children: gameState.showDialogue.dialogue }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 198,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 196,
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
            lineNumber: 200,
            columnNumber: 29
          },
          this
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 195,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 194,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 184,
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
          lineNumber: 212,
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
          lineNumber: 218,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 211,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-4 grid grid-cols-2 gap-4 text-sm", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-900 p-3 rounded-md border border-gray-700", children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-blue-300 mb-2", children: "Your Character" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 228,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "Race:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 229,
            columnNumber: 24
          }, this),
          " ",
          character.race
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 229,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          /* @__PURE__ */ jsxDEV("strong", { children: "Class:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 230,
            columnNumber: 24
          }, this),
          " ",
          character.class
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 230,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 227,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-900 p-3 rounded-md border border-gray-700", children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-blue-300 mb-2", children: "Tutorial" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 233,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "\u2022 Move around with WASD" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 234,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "\u2022 Click near NPCs to talk" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 235,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "\u2022 Explore the town!" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 236,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 232,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 226,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 178,
    columnNumber: 9
  }, this);
}
export {
  GameScene
};
