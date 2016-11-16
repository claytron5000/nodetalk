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
# npm <svg viewBox="0 0 18 7">
	<path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6"></path>
	<path fill="#FFF" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"></path>
</svg>
manage those modules!
	 like composer makes a directory that stores all the modules
	 difference is that npm creates the `node_modules` directory and the binaries are stored in `.bin`.
	also, it reads `packages.json`
	Like composer npm has it's own registry and can reach out to other remote code repositoires.
	--save-dev, versus --save
	it's recursive which often leads to nested directories like this:

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
*  _not_ namespaced, which means once a name is taken on the npm registry, it's taken forever :-(
* __Demo: walkthrough `npm init` `--save-dev` and gloabl v. local__

--- 

# Bower ![bower logo](https://bower.io/img/bower-logo.svg)
fill your nest with pretty things
* reads `bower.json`
* makes `bower_packages` directory
* "flat" repository
* front end only!
* ~~Good for projects with simple front end js requirements, out of favor for more complex front end systems~~

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