const Converter = require('./lib/converter');
const builtIns = require('./lib/bin');

// Extend Built-in Functions
for(let i in builtIns){
    Converter.extend(i, builtIns[i]);
}

module.exports = Converter;