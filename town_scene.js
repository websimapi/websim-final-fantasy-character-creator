import React, { useState, useEffect, useCallback, useRef } from 'react';

const TILE_SIZE = 32;
const PLAYER_SPEED = 2;
const TOWN_WIDTH = 20;
const TOWN_HEIGHT = 15;

const TILES = {
    GRASS: 0,
    PATH: 1,
    WATER: 2,
    BUILDING: 3,
    DOOR: 4,
    TREE: 5,
    SIGN: 6
};

const townMap = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,5,0,0,0,0,5,0,0,0,0,0,0,0,5,0,0,0,5,2],
    [2,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,3,4,4,3,0,0,0,0,0,0,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2],
    [2,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,2],
    [2,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,2],
    [2,0,1,0,0,6,0,1,0,0,0,0,0,0,1,0,0,0,0,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,5,0,0,0,5,0,0,0,0,0,0,0,0,5,0,0,0,5,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

const NPCS = [
    {
        id: 'elder',
        name: 'Elder Sage',
        x: 10,
        y: 5,
        dialogue: [
            "Welcome to Crystalbrook, brave adventurer!",
            "Use WASD or arrow keys to move around.",
            "Walk up to NPCs and press SPACE to talk.",
            "Your first quest: explore the town and talk to everyone!"
        ]
    },
    {
        id: 'shopkeeper',
        name: 'Shopkeeper Mia',
        x: 15,
        y: 5,
        dialogue: [
            "Hello there! I'm Mia, the local shopkeeper.",
            "This town is peaceful, but there's adventure beyond the gates.",
            "Talk to the guard at the south gate to learn more."
        ]
    },
    {
        id: 'guard',
        name: 'Guard Captain',
        x: 10,
        y: 13,
        dialogue: [
            "Halt! State your business... oh, you're new here.",
            "Welcome to Crystalbrook. I'm Captain of the Guard.",
            "The world beyond is dangerous - be prepared!",
            "Complete the elder's tutorial first."
        ]
    },
    {
        id: 'mage',
        name: 'Apprentice Mage',
        x: 5,
        y: 5,
        dialogue: [
            "Hi! I'm learning magic from the elder.",
            "This town is protected by ancient crystals.",
            "Press SPACE to interact with objects and people!"
        ]
    }
];

export function TownScene({ character, onExit }) {
    const [playerPos, setPlayerPos] = useState({ x: 10, y: 8 });
    const [facing, setFacing] = useState('down');
    const [keys, setKeys] = useState({});
    const [currentNPC, setCurrentNPC] = useState(null);
    const [dialogueIndex, setDialogueIndex] = useState(0);
    const [showTutorial, setShowTutorial] = useState(true);
    const [completedNPCs, setCompletedNPCs] = useState(new Set());
    
    const gameLoopRef = useRef();

    const getTileAt = useCallback((x, y) => {
        if (x < 0 || x >= TOWN_WIDTH || y < 0 || y >= TOWN_HEIGHT) return TILES.WATER;
        return townMap[Math.floor(y)][Math.floor(x)];
    }, []);

    const isWalkable = useCallback((x, y) => {
        const tile = getTileAt(x, y);
        return tile === TILES.GRASS || tile === TILES.PATH || tile === TILES.DOOR;
    }, [getTileAt]);

    const checkNPCInteraction = useCallback(() => {
        const frontPos = {
            x: playerPos.x,
            y: playerPos.y
        };
        
        switch(facing) {
            case 'up': frontPos.y -= 1; break;
            case 'down': frontPos.y += 1; break;
            case 'left': frontPos.x -= 1; break;
            case 'right': frontPos.x += 1; break;
        }

        const npc = NPCS.find(n => 
            Math.floor(n.x) === Math.floor(frontPos.x) && 
            Math.floor(n.y) === Math.floor(frontPos.y)
        );

        if (npc) {
            setCurrentNPC(npc);
            setDialogueIndex(0);
            setCompletedNPCs(prev => new Set(prev).add(npc.id));
        }
    }, [playerPos, facing]);

    const handleKeyDown = useCallback((e) => {
        setKeys(prev => ({ ...prev, [e.key.toLowerCase()]: true }));
        
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (currentNPC) {
                if (dialogueIndex < currentNPC.dialogue.length - 1) {
                    setDialogueIndex(prev => prev + 1);
                } else {
                    setCurrentNPC(null);
                    setDialogueIndex(0);
                }
            } else {
                checkNPCInteraction();
            }
        }
    }, [currentNPC, dialogueIndex, checkNPCInteraction]);

    const handleKeyUp = useCallback((e) => {
        setKeys(prev => ({ ...prev, [e.key.toLowerCase()]: false }));
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyDown, handleKeyUp]);

    useEffect(() => {
        const gameLoop = () => {
            setPlayerPos(prev => {
                let newX = prev.x;
                let newY = prev.y;
                let newFacing = facing;

                if (keys['w'] || keys['arrowup']) {
                    newY -= PLAYER_SPEED * 0.05;
                    newFacing = 'up';
                }
                if (keys['s'] || keys['arrowdown']) {
                    newY += PLAYER_SPEED * 0.05;
                    newFacing = 'down';
                }
                if (keys['a'] || keys['arrowleft']) {
                    newX -= PLAYER_SPEED * 0.05;
                    newFacing = 'left';
                }
                if (keys['d'] || keys['arrowright']) {
                    newX += PLAYER_SPEED * 0.05;
                    newFacing = 'right';
                }

                setFacing(newFacing);

                if (isWalkable(newX, newY)) {
                    return { x: newX, y: newY };
                }
                return prev;
            });
        };

        gameLoopRef.current = setInterval(gameLoop, 16);
        
        return () => {
            if (gameLoopRef.current) clearInterval(gameLoopRef.current);
        };
    }, [keys, isWalkable, facing]);

    const renderTile = (tileType, x, y) => {
        const baseClasses = "absolute";
        const style = {
            left: x * TILE_SIZE,
            top: y * TILE_SIZE,
            width: TILE_SIZE,
            height: TILE_SIZE
        };

        switch(tileType) {
            case TILES.GRASS: return <div className={`${baseClasses} bg-green-600`} style={style} />;
            case TILES.PATH: return <div className={`${baseClasses} bg-yellow-600`} style={style} />;
            case TILES.WATER: return <div className={`${baseClasses} bg-blue-700`} style={style} />;
            case TILES.BUILDING: return <div className={`${baseClasses} bg-gray-600`} style={style} />;
            case TILES.DOOR: return <div className={`${baseClasses} bg-yellow-800`} style={style} />;
            case TILES.TREE: return <div className={`${baseClasses} bg-green-800`} style={style} />;
            case TILES.SIGN: return <div className={`${baseClasses} bg-amber-700`} style={style} />;
            default: return null;
        }
    };

    const progress = (completedNPCs.size / NPCS.length) * 100;

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
            <div className="mb-4 text-center">
                <h1 className="ff-title text-3xl text-blue-300 mb-2">Crystalbrook Village</h1>
                <div className="text-sm text-gray-400">
                    Quest Progress: {completedNPCs.size}/{NPCS.length} NPCs met
                </div>
                <div className="w-64 h-2 bg-gray-700 rounded-full mt-2">
                    <div className="h-full bg-blue-500 rounded-full transition-all" style={{width: `${progress}%`}} />
                </div>
            </div>

            <div className="relative bg-green-800 border-2 border-gray-600" style={{width: TOWN_WIDTH * TILE_SIZE, height: TOWN_HEIGHT * TILE_SIZE}}>
                {townMap.map((row, y) => 
                    row.map((tile, x) => renderTile(tile, x, y))
                )}
                
                {NPCS.map(npc => (
                    <div key={npc.id} className="absolute bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold" 
                         style={{
                             left: npc.x * TILE_SIZE + 4,
                             top: npc.y * TILE_SIZE + 4,
                             width: TILE_SIZE - 8,
                             height: TILE_SIZE - 8
                         }}>
                        N
                    </div>
                ))}
                
                <div className="absolute bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
                     style={{
                         left: playerPos.x * TILE_SIZE + 4,
                         top: playerPos.y * TILE_SIZE + 4,
                         width: TILE_SIZE - 8,
                         height: TILE_SIZE - 8,
                         zIndex: 10
                     }}>
                    P
                </div>
            </div>

            {showTutorial && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                    <div className="ff-container max-w-md mx-4">
                        <h2 className="ff-title text-xl mb-4">Welcome to Crystalbrook!</h2>
                        <p className="text-sm text-gray-300 mb-4">
                            Use WASD or arrow keys to move. Walk up to NPCs and press SPACE to talk to them.
                            Complete the tutorial by talking to all NPCs marked with 'N'.
                        </p>
                        <button onClick={() => setShowTutorial(false)} className="ff-button">
                            Got it!
                        </button>
                    </div>
                </div>
            )}

            {currentNPC && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                    <div className="ff-container max-w-md mx-4">
                        <h3 className="ff-title text-lg mb-2">{currentNPC.name}</h3>
                        <p className="text-gray-300 mb-4">{currentNPC.dialogue[dialogueIndex]}</p>
                        <button onClick={() => {
                            if (dialogueIndex < currentNPC.dialogue.length - 1) {
                                setDialogueIndex(prev => prev + 1);
                            } else {
                                setCurrentNPC(null);
                                setDialogueIndex(0);
                            }
                        }} className="ff-button">
                            {dialogueIndex < currentNPC.dialogue.length - 1 ? 'Continue' : 'Goodbye'}
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-4 flex gap-4">
                <button onClick={onExit} className="ff-button bg-red-700 hover:bg-red-600">
                    Exit to Menu
                </button>
                {progress === 100 && (
                    <button onClick={() => alert("Tutorial complete! More areas coming soon...")} className="ff-button">
                        Continue Adventure
                    </button>
                )}
            </div>

            <div className="mt-4 text-center text-sm text-gray-400">
                <p>Controls: WASD/Arrow Keys to move • SPACE to interact</p>
            </div>
        </div>
    );
}