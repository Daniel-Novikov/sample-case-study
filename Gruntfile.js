module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            build: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            },
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'scss/**/*.scss',
                tasks: ['sass:dev']
            },
            html: {
                files: '**/*.html'
            },
            js: {
                files: 'js/**/*.js'
            },
            json: {
                files: '**/*.json'
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    livereload: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('dev', ['sass:dev', 'connect']);
    grunt.registerTask('default', ['dev', 'watch']);

};
