
export const init = (selector, component) => {
    const app = document.querySelector(selector);
    const newElement = document.createElement(component.type);
    const newTextElement = document.createTextNode(component.template);

    newElement.append(newTextElement);
    app.append(newElement);
}