module.exports = function (grunt) {

    "use strict";

    // this saves us having to load each plugin individually
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        grunticon: {
            payicons: {
                files: [{
                    expand: true,
                    cwd:             "src/",
                    src:             ["*.svg", "*.png"],
                    dest:            "dist"
                }],
                options: {
                    defaultWidth:    "60px",
                    defaultHeight:   "38px",
                    datasvgcss:      "payicons-svg.css",
                    datapngcss:      "payicons-png.css",
                    urlpngcss:       "payicons-fallback.css",
                    cssprefix:       ".payicon-",
                    previewTemplate: "templates/demo.hbs",
                    template:        "templates/style.hbs"
                }
            }
        },

        watch: {
            icons: {
                files: "src/*.svg",
                tasks: "build"
            }
        },

    });

    // List of available tasks
    grunt.registerTask("default", []);
    grunt.registerTask("build", ["grunticon:payicons"]);

};
