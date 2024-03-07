function Ship() {
  let length = null;
  let hitCounter = null;

  function hit() {
    hitCounter += 1;
    return hitCounter;
  }

  return {
    get length() {
      return length;
    },
    set length(newLength) {
      length = newLength;
    },
    hit,
    // isSunk,
  };
}

module.exports = {
  Ship,
};
