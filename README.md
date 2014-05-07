Payicons
========

<p>Checkout the <a href="http://uk2group.github.io/Payicons/">demo</a>.</p>

<p>You can download the icons from the <a href="https://github.com/UK2group/Payicons/tree/gh-pages/dist">gh-pages branch</a>.</p>

<p>You can contribute to the project by branching from the <a href="https://github.com/UK2group/Payicons">master branch</a>.</p>

Icon set for the payment methods used on the Chimera project.
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
