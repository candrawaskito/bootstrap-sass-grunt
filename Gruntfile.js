/**
 * Created by candradwaskito on 28/05/16.
 */

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            // this is the "dev" Sass config used with "grunt watch" command
            dev: {
                options: {
                    style: 'expanded',
                    // tell Sass to look in the Bootstrap stylesheets directory when compiling
                    loadPath: 'node_modules/bootstrap/scss/'
                },
                files: {
                    // the first path is the output and the second is the input
                    'assets/css/app.css': 'sass/app.scss'
                }
            },
            // this is the "production" Sass config used with the "grunt buildcss" command
            dist: {
                options: {
                    style: 'compressed',
                    loadPath: 'node_modules/bootstrap/scss/'
                },
                files: {
                    'assets/css/app.css': 'sass/app.scss'
                }
            }
        },
        // configure the "grunt watch" task
        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['sass:dev']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // "grunt buildcss" is the same as running "grunt sass:dist".
    // if I had other tasks, I could add them to this array.
    grunt.registerTask('buildcss', ['sass:dist']);
};
