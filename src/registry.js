
// A simple map of names to classes.
let declaredClasses = {};

/**
 * Register a class so it can be looked up by name later.
 * @param string name Module name e.g. 'widgets/Foo'
 * @param Class Cls Class definition.  Expected to extend WidgetBase.
 */
function declare (name, Cls) {
    declaredClasses[name] = Cls;
}

function createByName(name) {
    // Look up the Class object in our declaredClasses and call the constructor.
    return new declaredClasses[name]();
}

module.exports = { declare, createByName }