// String Converts
const toUpper = function(input, format){
  return input.toUpperCase();
};

const toLower = function(input, format){
  return input.toLowerCase();
};

const replaceAll = function(input, searchValue, replaceValue){
    return input.replace(new RegExp(searchValue, 'g'), replaceValue);
};

const flatten = function(input, depth = 1){
    depth = Number(depth);

    function getDepth(value) {
        return Array.isArray(value) ? 1 + Math.max(...value.map(getDepth)) : 0;
    }

    const _flatten = function(_in, curr, target){
        let _data = [];
        if(Array.isArray(_in) && target >= curr){
            _data.push(..._in.map(a=>_flatten(a, curr+1, target)));
        } else {
            _data.push(_in);
        }
        return _data;
    };

    let arrayDepth = getDepth(input);
    return _flatten(input, depth, arrayDepth);
};





module.exports = {
    toUpper,
    toLower,
    replaceAll,
    flatten
};