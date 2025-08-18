var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_stdin = __commonJS({
  "<stdin>"() {
    return `Fantasy RPG character portrait, Final Fantasy style. A ${data.race} ${data.class}. 
        Character description: "${data.description}".
        Skin: ${skinName}. 
        Eyes: ${eyeName}.
        Clothed in armor with a ${torsoName} torso plate, a ${beltName} belt, ${legsName} leg guards, and ${bootsName} boots.
        Detailed, high quality, fantasy art.`;
  }
});
export default require_stdin();
