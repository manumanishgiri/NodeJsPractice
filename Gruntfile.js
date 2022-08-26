'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: '.jshintrc',
            },
            all: ['Gruntfile.js', '**/*.js', '!node_modules/**', '!layers/**', '!TestExtra1/**']
        },
        watch: {
            files: ['**/*'],
            tasks: ['jshint'],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);

};
