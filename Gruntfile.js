// Copyright (c) 2014 - 2015 Bits & Co. and other generator-ngf contributors.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

(function () {
  'use strict';
  
  module.exports = function (grunt) {
    
    // Setup for grunt
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    
    grunt.initConfig({
      watch: {
        js: {
          files: '<%= jshint.all.src %>',
          tasks: ['newer:jshint:all']
        },
        jsTest: {
          files: '<%= jshint.test.src %>',
          tasks: ['newer:jshint:test', 'mochaTest']
        }
      },
      
      jshint: {
        options: {
          jshintrc: '.jshintrc'
        },
        all: {
          src: [
            'Gruntfile.js',
            'generators/**/*.js',
            'util/**/*.js',
            '!**/*.spec.js',
            '!**/templates/**/*.js'
          ]
        },
        test: {
          options: {
            jshintrc: 'test/.jshintrc'
          },
          src: [
            'generators/**/*.spec.js',
            'util/**/*.spec.js'
          ]
        }
      },
      
      mochaTest: {
        test : {
          src: '<%= jshint.test.src %>',
          options: {
            reporter: 'spec'
          }
        }
      },
      
      coveralls: {
        test: {
          src: 'coverage/lcov.info'
        }
      }
    });
    
    grunt.registerTask('test', [
      'jshint',
      'mochaTest'
    ]);
    
    grunt.registerTask('default', [
      'watch'
    ]);
  };
}());