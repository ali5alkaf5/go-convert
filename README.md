# Go Convert

A simple NodeJS Converter for encoding data to a certain format

## Installation

```
npm install go-convert
```

## Usage

- [Example](#example)
- [Extends](#extend-function)
- [Available Converts](#available-converts)

### Example

```javascript
const Converter = require('go-convert');

let data = {name: "Ali Akbar"};

let encode = Converter.go(data, {
    name: 'toUpper',
});

encode.then(r => {
    console.log(r);
    // {name: "ALI AKBAR"}
}).catch(e => {
    console.error(e);
    // Shows error if there is
});
```

### Extend Function

```javascript
const Converter = require('go-convert');

Converter.extend('if', (input, ...args)=>{
    // Extend a function as you want
    return input? args[0]: args[1];
});

// Use the convert options

let data = {status: true};
Converter.go(data, {
    status: 'if:success,danger'
}).then(r=>{
    console.log(r);
});

```

### Available Converts

- [Uppercase](#toupper)
- [Lowercase](#tolower)
- [Flatten Array](#flatten)
- [Replace All](#replace-all)

#### toUpper

Uppercase a string

```javascript
const Converter = require('go-convert');

let data = {name: 'Ali Akbar'};
Converter.go(data, {
    name: 'toUpper'
}).then(r=>{
    // {name: 'ALI AKBAR'}
    console.log(r);
});
```

#### toLower

Lowercase a string

```javascript
const Converter = require('go-convert');

let data = {name: 'Ali Akbar'};
Converter.go(data, {
    name: 'toLower'
}).then(r=>{
    // {name: 'ali akbar'}
    console.log(r);
});
```

#### Flatten

Flatten an array to a certain ``depth`` (default: 1)

```javascript
const Converter = require('go-convert');

let data = {names: ['Ali Akbar', ['Zaidan Tifftazany', ['John Doe']]]};

Converter.go(data, {
    names: 'flatten'
}).then(r=>{
    // {name: ['Ali Akbar', 'Zaidan Tifftazany', 'John Doe']}
    console.log(r);
});

Converter.go(data, {
    names: 'flatten:2'
}).then(r=>{
    // {name: ['Ali Akbar', ['Zaidan Tifftazany', 'John Doe']]}
    console.log(r);
});

```

#### Replace All

Replace a Regex from the first parameter to second (DO NOT use comma for v1.0.0)
```javascript
const Converter = require('go-convert');

let data = {name: 'ali akbar'};

Converter.go(data, {
    names: 'replaceAll: ,_'
}).then(r=>{
    // {name: 'ali_akbar'}
    console.log(r);
});

```

### Support Us

Give Us any recommendations or visit Our [Github](# Node Encoder

A simple NodeJS Encoder for encoding data to a certain format

## Installation

```
npm install go-convert
```

## Usage

- [Example](#example)
- [Extends](#extend-function)
- [Available Converts](#available-converts)

### Example

```javascript
const Converter = require('go-convert');

let data = {name: "Ali Akbar"};

let encode = Converter.go(data, {
    name: 'toUpper',
});

encode.then(r => {
    console.log(r);
    // {name: "ALI AKBAR"}
}).catch(e => {
    console.error(e);
    // Shows error if there is
});
```

### Extend Function

```javascript
const Converter = require('go-convert');

Converter.extend('if', (input, ...args)=>{
    // Extend a function as you want
    return input? args[0]: args[1];
});

// Use the convert options

let data = {status: true};
Converter.go(data, {
    status: 'if:success,danger'
}).then(r=>{
    console.log(r);
});

```

### Available Converts

- [Uppercase](#toupper)
- [Lowercase](#tolower)
- [Flatten Array](#flatten)
- [Replace All](#replace-all)

#### toUpper

Uppercase a string

```javascript
const Converter = require('go-convert');

let data = {name: 'Ali Akbar'};
Converter.go(data, {
    name: 'toUpper'
}).then(r=>{
    // {name: 'ALI AKBAR'}
    console.log(r);
});
```

#### toLower

Lowercase a string

```javascript
const Converter = require('go-convert');

let data = {name: 'Ali Akbar'};
Converter.go(data, {
    name: 'toLower'
}).then(r=>{
    // {name: 'ali akbar'}
    console.log(r);
});
```

#### flatten

Flatten an array to a certain ``depth`` (default: 1)

```javascript
const Converter = require('go-convert');

let data = {names: ['Ali Akbar', ['Zaidan Tifftazany', ['John Doe']]]};

Converter.go(data, {
    names: 'flatten'
}).then(r=>{
    // {name: ['Ali Akbar', 'Zaidan Tifftazany', 'John Doe']}
    console.log(r);
});

Converter.go(data, {
    names: 'flatten:2'
}).then(r=>{
    // {name: ['Ali Akbar', ['Zaidan Tifftazany', 'John Doe']]}
    console.log(r);
});

```

#### Replace All

Replace a Regex from the first parameter to second (DO NOT use comma for v1.0.0)
```javascript
const Converter = require('go-convert');

let data = {name: 'ali akbar'};

Converter.go(data, {
    names: 'replaceAll: ,_'
}).then(r=>{
    // {name: 'ali_akbar'}
    console.log(r);
});

```

### Support Us

Give Us any recommendations or visit Our [Github](https://github.com/ali5alkaf5/go-convert).
