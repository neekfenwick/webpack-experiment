import { declare } from './registry';

class ExampleClass {

    constructor () {
        console.log('ExampleClass was constructed!');
    }
}

// register ourself with the registry module, so we can by dynamically constructed.
declare('ExampleClass', ExampleClass);

export default ExampleClass;