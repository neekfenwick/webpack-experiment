import { createByName } from './registry.js'
import { ExampleClass } from './ExampleClass.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'Click the button to create a class instance';

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = () => {
        console.log('index calling createByName...')
        createByName('ExampleClass');
    }

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());