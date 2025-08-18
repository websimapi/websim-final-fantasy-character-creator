const buildPrompt = (data) => {
  const skinName = getColorName(data.skinColor);
  const eyeName = getColorName(data.eyeColor);
  const torsoName = getColorName(data.torsoColor);
  const beltName = getColorName(data.beltColor);
  const legsName = getColorName(data.legsColor);
  const bootsName = getColorName(data.bootsColor);
  return `A ${data.race} ${data.class} stands ready for adventure. ${data.description ? data.description : ""} Their ${skinName} skin and ${eyeName} eyes reflect years of training. Clad in armor with a ${torsoName} torso plate, a ${beltName} belt, ${legsName} leg guards, and ${bootsName} boots, they embody the spirit of a true hero. Detailed, high quality, fantasy art in Final Fantasy style.`;
};
