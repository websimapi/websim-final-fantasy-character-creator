// Color name mapping library
const colorNames = {
    // Reds
    '#ff0000': 'Crimson Red',
    '#dc143c': 'Crimson',
    '#b22222': 'Fire Brick',
    '#8b0000': 'Dark Red',
    '#ff6347': 'Tomato Red',
    '#ff4500': 'Orange Red',
    '#ff69b4': 'Hot Pink',
    '#ff1493': 'Deep Pink',
    '#c71585': 'Medium Violet Red',
    
    // Oranges
    '#ff7f50': 'Coral Orange',
    '#ff8c00': 'Dark Orange',
    '#ffa500': 'Orange',
    '#ffb347': 'Pastel Orange',
    '#ffcc99': 'Peach Orange',
    
    // Yellows
    '#ffff00': 'Bright Yellow',
    '#ffd700': 'Gold Yellow',
    '#ffff99': 'Light Yellow',
    '#fff8dc': 'Cornsilk Yellow',
    '#f0e68c': 'Khaki Yellow',
    
    // Greens
    '#008000': 'Forest Green',
    '#006400': 'Dark Green',
    '#228b22': 'Forest Green',
    '#32cd32': 'Lime Green',
    '#90ee90': 'Light Green',
    '#98fb98': 'Pale Green',
    '#00ff00': 'Electric Green',
    '#7fff00': 'Chartreuse Green',
    '#adff2f': 'Green-Yellow',
    
    // Blues
    '#0000ff': 'Royal Blue',
    '#000080': 'Navy Blue',
    '#191970': 'Midnight Blue',
    '#00008b': 'Dark Blue',
    '#4169e1': 'Royal Blue',
    '#1e90ff': 'Dodger Blue',
    '#00bfff': 'Deep Sky Blue',
    '#87ceeb': 'Sky Blue',
    '#b0e0e6': 'Powder Blue',
    '#add8e6': 'Light Blue',
    '#87cefa': 'Light Sky Blue',
    
    // Purples
    '#800080': 'Royal Purple',
    '#8b008b': 'Dark Magenta',
    '#9932cc': 'Dark Orchid',
    '#9400d3': 'Dark Violet',
    '#ba55d3': 'Medium Orchid',
    '#dda0dd': 'Plum Purple',
    '#ee82ee': 'Violet',
    '#da70d6': 'Orchid Purple',
    
    // Browns
    '#a0522d': 'Sienna Brown',
    '#8b4513': 'Saddle Brown',
    '#d2691e': 'Chocolate Brown',
    '#cd853f': 'Peru Brown',
    '#f4a460': 'Sandy Brown',
    '#deb887': 'Burlywood Brown',
    '#d2b48c': 'Tan Brown',
    '#bc8f8f': 'Rosy Brown',
    '#a52a2a': 'Brown',
    '#b22222': 'Fire Brick Brown',
    
    // Grays & Blacks
    '#000000': 'Obsidian Black',
    '#080808': 'Pure Black',
    '#2f4f4f': 'Dark Slate Gray',
    '#696969': 'Dim Gray',
    '#808080': 'Gray',
    '#a9a9a9': 'Dark Gray',
    '#c0c0c0': 'Silver Gray',
    '#d3d3d3': 'Light Gray',
    '#dcdcdc': 'Gainsboro Gray',
    '#f5f5f5': 'White Smoke',
    '#ffffff': 'Pure White',
    
    // Skin Tones
    '#e0ac69': 'Medium Skin',
    '#c68642': 'Tan Skin',
    '#8d5524': 'Dark Skin',
    '#f1c27d': 'Light Skin',
    '#ffdbac': 'Pale Skin',
    '#f6d5b8': 'Warm Beige',
    
    // Eye Colors
    '#5b3a29': 'Hazel Brown',
    '#3d2314': 'Dark Brown',
    '#8b4513': 'Brown',
    '#654321': 'Dark Brown',
    '#a0522d': 'Sienna Brown',
    '#006400': 'Forest Green',
    '#228b22': 'Green',
    '#4169e1': 'Blue',
    '#87ceeb': 'Light Blue',
    '#9370db': 'Violet',
    '#8b008b': 'Dark Magenta',
    
    // Metal Colors
    '#ffd700': 'Gold',
    '#c0c0c0': 'Silver',
    '#b87333': 'Copper',
    '#cd7f32': 'Bronze',
    '#4c4c4c': 'Iron Gray',
    '#1a1a1a': 'Dark Steel',
    
    // Leather Colors
    '#4b3621': 'Dark Leather',
    '#8b4513': 'Saddle Leather',
    '#a0522d': 'Sienna Leather',
    '#d2691e': 'Medium Leather',
    '#deb887': 'Light Leather'
};

// Utility function to find the closest color name
export function getColorName(hexColor) {
    // Normalize the hex color
    const normalized = hexColor.toLowerCase().replace('#', '');
    const fullHex = normalized.length === 3 ? 
        normalized.split('').map(c => c + c).join('') : 
        normalized;
    const hex = '#' + fullHex;
    
    // Check for exact match first
    if (colorNames[hex]) {
        return colorNames[hex];
    }
    
    // Find closest color using Euclidean distance
    let closestColor = 'Unknown';
    let minDistance = Infinity;
    
    const r1 = parseInt(fullHex.substring(0, 2), 16);
    const g1 = parseInt(fullHex.substring(2, 4), 16);
    const b1 = parseInt(fullHex.substring(4, 6), 16);
    
    for (const [colorHex, name] of Object.entries(colorNames)) {
        const hexValue = colorHex.replace('#', '');
        const r2 = parseInt(hexValue.substring(0, 2), 16);
        const g2 = parseInt(hexValue.substring(2, 4), 16);
        const b2 = parseInt(hexValue.substring(4, 6), 16);
        
        const distance = Math.sqrt(
            Math.pow(r1 - r2, 2) + 
            Math.pow(g1 - g2, 2) + 
            Math.pow(b1 - b2, 2)
        );
        
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = name;
        }
    }
    
    return closestColor;
}