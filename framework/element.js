const createElement = tagName => (strings, ...args) =>
    ({ type: tagName, template: strings.reduce(
      (acc, currentString, index) => acc + currentString + (args[index] || ""),
      ""
    )
  });
  
  export const p = createElement("p");