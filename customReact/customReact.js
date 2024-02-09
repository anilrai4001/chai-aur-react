const root = document.getElementById('root');

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'click here to visit google'
}

const customRender = (element, container)=>{
    const newElement = document.createElement(element.type);
    newElement.innerHTML = element.children;

    for (const key in element.props) {
        newElement.setAttribute(key, element.props[key]);
    }

    container.appendChild(newElement);
}

customRender(reactElement, root);