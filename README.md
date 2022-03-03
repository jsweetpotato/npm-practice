# NPM 사용하기

## OVERVIEW

- ### [NPM 설치](#npm-ec84a4ecb998-1)
- ### [NPM package.json](#npm-packagejson-1)
- ### [NPM package-lock.json](#npm-package-lockjson-1)
- ### [TIPS](#tips-1)

<br>
<hr>
<br>

## NPM 설치

<br>

### **how to install npm?**

<p>1. &#xa0;turn on your vscode and npm init</p>

```js
npm init
```

<p>2. &#xa0;set you npm package options</p>

```js
package name: (directory) directory-name
version: (1.0.0) // default version is 1.0.0
description: // description your package
entry point: (index.js) // default entry point is index.js
test command:
git repository:
keywords:
author: jsweetpotato37
license: (ISC) // default license ISC
```

<p>3. &#xa0;if all done, right down your terminal <code>yes</code></p>

```js
Is this OK? (yes) // answer yes, make package.json
```

<p>4. &#xa0;checkyour package in <code>package.json</code></p>

```json
{
  "name": "package-example1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "jsweetpotato37",
  "license": "ISC"
}
```

<br>
<hr>
<br>

## NPM package.json
<br>

```json
{
  "name": "package-example1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "jsweetpotato37",
  "license": "ISC",
  "dependencies": {
    "randomcolor": "^0.6.2"
  }
}
```

**<code>name</code>** &#xa0;it means packge name

**<code>version</code>** &#xa0;it means package version, default "1.0.0"

**<code>description</code>** explain about the package

**<code>main</code>** package executable name

**<code>scripts</code>** shortcuts

**<code>author</code>** package maker

**<code>license</code>** default ISC

**<code>dependencies</code>** added packages

<br>
<hr>
<br>

## NPM package-lock.json
<br>
You can know the exact version and setting value of the added package.

<!-- ```json

``` -->

<br>
<hr>
<br>

## TIPS

<br>

If you wanna any shorcuts, add options in "scripts" object

```json
  "scripts": {
    "hello": "node index.js" // like this
  }
```

**<code>^</code>** means that it is compatible with the corresponding version or higher.
```json
  "dependencies": {
    "randomcolor": "^0.6.2" // 0.6.2 or higher version.
  }
```
