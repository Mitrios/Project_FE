// JavaScript Document
var module;
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
        concat:{
            dist:{
                src:[
                    'js/libs/*.js',
                    'js/global.js'
                ],
                dest:'js/build/production.js',
            }
        },

        uglify:{
            build:{
                src:[
                    'js/build/production.js',
                ],
                dest:'js/build/production.min.js',
            }
        },

        imagemin:{

            dynamics:{
                files:[{
                        expand: true,
                        cwd: 'images/',
                        src:['**/*.{png, jpg, gif}'],
                        dest: 'images/build/'
                    }]
            }
        }

    });

    grunt.loadNpmTask('grunt-contrib-concat');
    grunt.loadNpmTask('grunt-contrib-uglify');
    grunt.loadNpmTask('grunt-contrib-imagemin');

    grunt.registerTask('default' ,['concat' ,'uglify' ,'imagemin']);
};
