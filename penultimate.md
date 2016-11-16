<section>
  <iframe src="js.txt"></iframe>

</section>

<section>
  # Node, javascript package managers, and gulp
  <p class="fragment">_Javascript has never tasted so good._</p>
</section>

<section>
  # Node.js ![node logo](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png)
  
  this isn't your father's js *or maybe it is*
  
  * built on Google's v8 engine
  * interacts with the file system
  * asynchronus server
  * `require()`
  * __Demo:  node script that uses require and prints to the file system.__
</section>

<section>
  # npm, bower, yarn
  _gotta catch 'em all_, packages that is...
  <p class="fragment">Three javascript package managers.</p>
</section>

<section>
  # npm <svg viewBox="0 0 18 7"><path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6"></path><path fill="#FFF" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"></path></svg>


  <section>
    <p>manage those modules!</p>
    <p class="fragment">`npm` is both a registry of node modules and a command-line tool to include those packages in your project. In this way it is similar to `composer`. However, there are some differences.</p>
  </section>

  <section>
    <p>Some differences between `npm` and `composer`</p>
      <ul>
      <li class="fragment">`npm` creates the `node_modules` directory and the binaries are stored in a hidden `.bin` directory.</li>
      <li class="fragment">`npm` reads and writes the `packages.json` file.</li>
      <li class="fragment">`npm` registry is _not_ namespaced, which means once a name is taken on the npm registry, it's taken forever :-(</li>
      <li class="fragment">`npm` does not create a `.lock` file, which means the versions are more free-floating</li>
      <li class="fragment">`npm` is recursive when building the packages. </li>
      </ul>
  </section>
  <section>
    <p>Recursion means that each package may have it's own `packages.json` which often leads to nested directories like this:</p>
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
  <section><p>Much like `composer`, `npm` can install modules in a number of different ways.</p></section>
  <section>
    <p>`npm install <packagename>`</p>
        <p class="fragment">This will install the package into the `node_modules` directory, but will not include it in the `package.json` file.</p>
  </section>
  <section>
    <p >`npm install -g <packagename>`</p>
        <p class="fragment">This will install the package into the user's global `node_modules` directory and give you access to that tool everywhere.</p>
  </section>
  <section>
    <p>`npm install <packagename> --save`</p>
      <p class="fragment">This will install the package into the `node_modules` directory and include it as a requirment for the project file.</p>
      <p class="fragment">`"dependencies": { "<packagename>": "0.0.1"}`</p>
  </section>
  <section>
    <p>`npm install <package> --save-dev`</p>
      <p class="fragment">This will install the package into the `node_modules` directory and include it as a development requirment for the project file.</p>
      <p class="fragment">`"devDependencies": {"<packagename>": "0.0.4"}`</p>
  </section>
</section>

<section>

  # Bower ![bower logo](https://bower.io/img/bower-logo.svg)

  <p>fill your nest with pretty things</p>
  <ul>
    <li class="fragment">Bower is for front end browser focused packages, not node modules.</li>
    <li class="fragment">reads `bower.json`</li>
    <li class="fragment">makes `bower_packages` directory</li>
    <li class="fragment">"flat" repository, non recursive</li>
    <li class="fragment">no registry, all packages hosted on github or elsewhere</li>
  </ul>
  
</section>

<section>
  # yarn ![yarn logo](https://external.fbed1-1.fna.fbcdn.net/safe_image.php?d=AQDxt4iQXP6JU1eN&url=https%3A%2F%2Fscontent.fbed1-1.fna.fbcdn.net%2Ft39.2365-6%2F14675948_1028213323961872_4944889018610352128_n.jpg)

  <p>*new kid on the block*</p>
  <section>
  <ul>
    <li class="fragment">built upon the npm repository</li>
    <li class="fragment">reads and writes from the packages.json to node_modules directory.</li>
    <li class="fragment">fast</li>
    <li class="fragment">flat</li>
    <li class="fragment">yarn.lock file similar to composer.lock</li>
    <li class="fragment">hot swappable with current `package.json` projects. `run demo`</li>
  </ul>
  </section>

</section>

<section>


# Grunt and Gulp

<section>
<p>build it and they will come</p>
<p class="fragment">Grunt and Gulp are javascript build tools, task runners that put together parts of your project.</p>
<p class="fragment">Though the build tools are javascript based, they might run applications in any language.</p>
<p class="fragment">Compile sass files to css, minifiy and concatenate javascript, compile coffee-script to javascriot, move files from `src` to `dist`, for node applications it might also start the node server.</p>
</section>

</section>

<section>

  # Grunt ![grunt logo](http://svgporn.com/logos/grunt.svg)

  <p>_push those assests around_</p>
  <ul>
        <li class="fragment">configuration based</li>
        <li class="fragment">each task runs independant of the others.</li>
  </ul>

  <section>
  <p>A simple grunt file</p>
        <pre>
        <code>
        grunt.initConfig({
          clean: {
            src: ['build/app.js', 'build/vendor.js']
          },
          
          copy: {
            files: [{
              src: 'build/app.js',
              dest: 'build/dist/app.js'
            }]
          }
          
          concat: {
            'build/app.js': ['build/vendors.js', 'build/app.js']
          }
          
          // ... other task configurations ...
          
        });

        grunt.registerTask('build', ['clean', 'bower', 'browserify', 'concat', 'copy']);
        </code></pre>
  </section>
  <section>
  <p>A task within the file.</p>
        <pre>
        <code>
        grunt.initConfig({
          clean: {
            src: ['build/app.js', 'build/vendor.js']
          },
          
          <em>copy: {
            files: [{
              src: 'build/app.js',
              dest: 'build/dist/app.js'
            }]
          }</em>
          
          concat: {
            'build/app.js': ['build/vendors.js', 'build/app.js']
          }
          
          // ... other task configurations ...
          
        });

        grunt.registerTask('build', ['clean', 'bower', 'browserify', 'concat', 'copy']);
        </code></pre>
  </section>

</section>
<section>

# Gulp ![gulp logo](https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png)
<section>
<p>_That's one long staw!_</p>      
<ul>
      <li class="fragment">build tool</li>
      <li class="fragment">piping</li>
      <li class="fragment">wrapper to other tools, node or otherwise (sass, compass, js minifier etc.)</li>
      <li class="fragment">__Demo: turning markdown into html with `gulp-markdown`__</li>
</ul>
</section>

<section>
<p>The LCM scaffold big-Gulp.</p>
<div class="fragment">
      <p>At the top of the file we include the `gulp` packages we'll use.</p>
      <pre>
      <code>
      'use strict';

      var gulp = require('gulp-help')(require('gulp'));
      var exec = require('child-process-promise').exec;
      var phpcs = require('gulp-phpcs');
      var eslint = require('gulp-eslint');
      var phplint = require('gulp-phplint');
      var sass = require('gulp-sass');
      var autoprefixer = require('gulp-autoprefixer');
      var sourcemaps = require('gulp-sourcemaps');
      var concat = require('gulp-concat');
      var minify = require('gulp-minify');
      var mergeStream = require('merge-stream');
      var behat = require('gulp-behat');
      var gutil = require('gulp-util');
      var csso = require('gulp-csso');
      var imagemin = require('gulp-imagemin');
      </code>
      </pre>
</div>

</section>
<section>
      Include the configuration to keep things neat:

      <pre><code>
      var config = require('./gulpconfig');
      </code></pre>
</section>
<section>
Gulp's incredibly small API consists of 
      
      <ul>
            <li class="fragment">`gulp.task` defines individual tasks.</li>
            <li class="fragment">`gulp.src` defines the source files for the build.</li>
            <li class="fragment">`gulp.dest` defines the destination where the built files will reside.</li>
            <li class="fragment">`gulp.watch` watches a set of files and runs the tasks required.</li>
      </ul>

</section>
<section>
  we create the simplest task like this:
  <p class="fragment">`var gulp.task('taskname', function() { return gutil.log('hello world')});`</p>
  <p class="fragment">a more complicated setup features a parent task that runs subtasks:</p>
  <p class="fragment">`gulp.task('parenttask', 'description of task',['sub-task1', 'sub:task2']);</p>
  <p class="fragment">Instead of opening and closing a file at each task `gulp` pipes the output of one task to the next, similar to the `|` operator on the command like</p>
  
  <pre class="fragment">
    <code>
      gulp.task('task-name', function () {
        return gulp.src('source-files') // Get source files with gulp.src
          .pipe(aGulpPlugin()) // Sends it through a gulp plugin
          .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
       })
    </code>
  </pre>

</section>

</section>

<section data-background="https://media.giphy.com/media/a9yBUiGJwo97a/giphy.gif">


NPM/Gulp
~~How is NPM different from composer? (no lock file, etc)~~
What is require() and how does it work?

What is gulp?
How is it different from grunt?

What are the gulp plugins we actually use in our scaffolding build?
How can you write a new gulp task?
How can you debug gulp tasks?
</section>

















<section>
  <p>Gulp's incredibly small API consists of </p>
  <ul>
    <li class="fragment">`gulp.task` defines individual tasks.</li>
    <li class="fragment">`gulp.src` defines the source files for the build.</li>
    <li class="fragment">`gulp.dest` defines the destination where the built files will reside.</li>
    <li class="fragment">`gulp.watch` watches a set of files and runs the tasks required.</li>
  </ul>
</section>