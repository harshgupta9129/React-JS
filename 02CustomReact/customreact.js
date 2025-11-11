function customRender(reactElement, container) {
    const domElement  = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (let prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props.i);
    }

    container.append(domElement);
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit Google'
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);