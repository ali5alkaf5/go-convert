const Converter = function(){

    let appliedExtensions = {};

    const extend = function(name, callback=(input, ...format)=>{}){
        appliedExtensions[name] = callback;
    };

    const go = function(data, types={}){
        let _converts = {};
        for(let _type in types){
            let args = types[_type].split(':');
            let _name = args.shift();
            let _data = data[_type];

            _converts[_type] = appliedExtensions[_name]? appliedExtensions[_name](_data, ...(args[0]? args[0].split(','): [])): _data;
        }
        return checkEachPromise(_converts);
    };

    function checkEachPromise(promises){
        return new Promise((resolve, reject) => {
            let errors = {};
            let results = {};
            let total = Object.keys(promises).length;
            for(let i in promises){
                let promise = promises[i];
                if(promise instanceof Promise){
                    promise.then(r=>{
                        results[i] = r;
                        if(--total === 0) resolve(results);
                        if(Object.keys(errors).length) reject(errors);
                    }).catch(e=>{
                        errors[i] = e;
                        if(--total === 0) reject(errors);
                        if(Object.keys(results).length) resolve(results);
                    });
                } else {
                    results[i] = promise;
                    if(--total === 0) {
                        resolve(results);
                        if(Object.keys(errors).length) reject(errors);
                    }
                }
            }
        });
    }

    return {
        extend,
        go,
    }

};



module.exports = Converter();