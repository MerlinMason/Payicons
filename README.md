Payicons
========

<p>Checkout the <a href="http://merlinbb.github.io/Payicons/">demo</a>.</p>

<p>You can download the icons from the <a href="https://github.com/merlinbb/Payicons/tree/master/dist">/dist directory</a>.</p>

<p>You can contribute to the project by branching from the <a href="https://github.com/merlinbb/Payicons">master branch</a>.</p>

Please note, even though we offer .png files, these are not available in retina sizes... This is because our preffered format is SVG, and .png is merely a fall back. All devices that we target, which have retina screens, also have SVG support.

Please only edit /src/*.svg files, and then generate everything in /dist/ using our Grunt build script.


##Requirements for local dev

- node.js v0.10.1 +
- grunt.js v0.4.4 +


##Getting Setup

Once Grunt is installed (http://gruntjs.com/getting-started) you can install all dependencies by running:

    $ npm install

note: please see Bower/Grunt documentation for help with installation.

After this you can run:

    $ grunt build

Which will build a local copy of all the icons and css files.
