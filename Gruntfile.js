'use strict';
module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        // watch for changes and trigger compass, jshint, uglify and livereload
        watch: {
            compass: {
                files: ['library/scss/**/*.{scss,sass}'],
                tasks: ['compass']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                options: { livereload: true },
                files: ['style.css', 'library/js/*.js', '*.html', '*.php', 'library/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },

        // compass and scss
        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },

        // javascript linting with jshint
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
            all: [
                'Gruntfile.js',
                'library/js/source/**/*.js'
            ]
        },

        // uglify to concat, minify, and make source maps
        uglify: {
            plugins: {
                options: {
                    sourceMap: 'library/js/map/source-map-plugins.js'
                },
                files: {
                    'library/js/plugins.min.js': [
                        'library/js/source/plugins.js',
                        'library/js/libs/**/*.js',
                        '!library/js/libs/modernizr*.js'
                    ]
                }
            },
            main: {
                options: {
                    sourceMap: 'library/js/map/source-map-main.js'
                },
                files: {
                    'library/js/main.min.js': [
                        'library/js/source/main.js'
                    ]
                }
            }
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'library/images/',
                    src: '**/*',
                    dest: 'library/images/'
                }]
            }
        },

    });

    // register task
    grunt.registerTask('default', ['watch']);

};