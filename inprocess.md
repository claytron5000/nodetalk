# Node, npm, and gulp
Javascript has never tasted so good.

---

# Node.js ![node logo](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png)

this isn't your father's js *or maybe it is*

* built on Google's v8 engine
* interacts with the file system
* asynchronus server
* `require()`
* __Demo:  node script that uses require and prints to the file system.__

---
# npm, bower, yarn
_gotta catch 'em all_, packages that is...

---
# npm <svg viewBox="0 0 18 7"><path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6"></path><path fill="#FFF" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"></path></svg>


<section>
<p>manage those modules!</p>
<p class="fragment">`npm` is both a registry of node modules and a command-line tool to include those packages in your project. In this way it is very much like `composer`.</p></section>
<section>
  <p class="fragment">Like `composer`, `npm` makes a directory that stores all the modules</p>
  <p class="fragment">The difference is that `npm` creates the `node_modules` directory and the binaries are stored in a hidden `.bin` directory.</p>
</section>
<section>Another difference is that `npm` reads and writes the `packages.json` file.</section>
<section>Like composer npm has it's own registry and can reach out to other remote code repositoires.</section>
<section>
  <p class="fragment">Another major difference is that `npm` is recursive when building the packages. </p>
  <p class="fragment">Recursion means that each package may have it's own `packages.json` which often leads to nested directories like this:</p>
</section>
<section>
	<pre>
      <code>
            ├── grunt-cli
            │   └── node_modules
            │       ├── findup-sync
            │       │   └── node_modules
            │       │       ├── glob
            │       │       │   └── node_modules
            │       │       │       ├── minimatch
            │       │       │       │   └── node_modules
            │       │       │       │       ├── lru-cache
            │       │       │       │       │   └── node_modules
            │       │       │       │       │       └── weak
            │       │       │       │       │           └── node_modules
            │       │       │       │       │               └── mocha
            │       │       │       │       │                   └── node_modules
            │       │       │       │       │                       ├── coffee-script
            │       │       │       │       │                       │   └── node_modules
            │       │       │       │       │                       │       └── jison
            │       │       │       │       │                       │           └── node_modules
            │       │       │       │       │                       │               └── browserify
            │       │       │       │       │                       │                   └── node_modules
            │       │       │       │       │                       │                       ├── browser-resolve
            │       │       │       │       │                       │                       │   └── example
            </code>
      </pre>
</section>
<section>
<p>While this might look nuts, it's a feature of `npm`. However, recursive installs are slow, and they add a lot of code to your project</p>
</section>
<section>  `npm` registry is _not_ namespaced, which means once a name is taken on the npm registry, it's taken forever :-(</section>
<section class="pretend-commandline">
	Initializing an npm project is easy:
    <p class="fragment">`npm init`</p>
    <p class="fragment">`name: (test) test`</p>
    <p class="fragment">`version: (1.0.0) `</p>
    <p class="fragment">`version: (1.0.0) 1.2.3`</p>
    <p class="fragment">`description: Here's a description.`</p>
    <p class="fragment">`entry point: (index.js)`</p>
    <p class="fragment">`test command:`</p>
    <p class="fragment">`git repository:`</p>
    <p class="fragment">`keywords:`</p>
    <p class="fragment">`author: Clayton`</p>
    <p class="fragment">`license: (ISC)`</p>
</section>
<section> This results in the following package.json file:
<pre><code>{
  "name": "test",
  "version": "1.2.3",
  "description": "Here's a description.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Clayton",
  "license": "ISC"
  }</code></pre>
  <p class="fragment">It is possible to manage a `package.json` file entirely from the command line.</p>
  </section>
<section>Much like `composer`, `npm` can install modules globally, as a one-off into the project's `node_module` directory, installed and saved to the `package` file either as requirment for produciton or for development.</section>
<section>
	<p class="fragment">`npm install <packagename>`</p>
    	<p class="fragment">This will install the package into the `node_modules` directory, but will not include it in the `package.json` file.</p>
</section>
<section>
	<p class="fragment">`npm install -g <packagename>`</p>
    	<p class="fragment">This will install the package into the user's global `node_modules` directory and give you access to that tool everywhere.</p>
</section>
<section>
	<p class="fragment">`npm install <packagename> --save`</p>
    <p class="fragment">This will install the package into the `node_modules` directory and include it as a requirment for the project file.</p>
    <p class="fragment">`"dependencies": { "<packagename>": "0.0.1"}`</p>
</section>
<section>
	<p class="fragment">`npm install <package> --save-dev`</p>
    <p class="fragment">This will install the package into the `node_modules` directory and include it as a development requirment for the project file.</p>
    <p class="fragment">`"devDependencies": {"<packagename>": "0.0.4"}`</p>
</section>

--- 

# Bower ![bower logo](https://bower.io/img/bower-logo.svg)
fill your nest with pretty things
* reads `bower.json`
* makes `bower_packages` directory
* "flat" repository
* front end only!

___

# yarn ![yarn logo](https://external.fbed1-1.fna.fbcdn.net/safe_image.php?d=AQDxt4iQXP6JU1eN&url=https%3A%2F%2Fscontent.fbed1-1.fna.fbcdn.net%2Ft39.2365-6%2F14675948_1028213323961872_4944889018610352128_n.jpg)
*new kid on the block*
* built on the npm repository
* reads and writes from the packages.json to node_modules directory. 
* fast
* flat
* `yarn.lock` file similar to composer.lock
* __quick Demo__

---

# Gulp, Grunt, Broccoli
build it and they will come

---
# Gulp ![gulp logo](https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png)
That's one long staw!
* build tool
* piping
* wrapper to other tools, node or otherwise (sass, compass, js minifier etc.)
* __Demo: turning markdown into html with `gulp-markdown`__


NPM/Gulp
How is NPM different from composer? (no lock file, etc)
What is require() and how does it work?

What is gulp?
How is it different from grunt?

What are the gulp plugins we actually use in our scaffolding build?
How can you write a new gulp task?
How can you debug gulp tasks?