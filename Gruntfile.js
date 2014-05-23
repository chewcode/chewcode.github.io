//Gruntfile
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        // Load package.json into variable
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration
        harp: {
            server: {
                server: true,
                source: '_harp'
            },
            dist: {
                  source: '_harp',
                  dest: 'r'
            }
        },
        bump: {
            // options: {
            //     files: ['package.json'],
            //     updateConfigs: [],
            //     commit: true,
            //     commitMessage: 'Release v%VERSION%',
            //     commitFiles: '-a',
            //     createTag: true,
            //     tagName: 'v%VERSION%',
            //     tagMessage: 'Version %VERSION%',
            //     push: true,
            //     pushTo: 'github master',
            //     gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
            // }
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'], // '-a' for all files
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'github master',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
            }
        },
        gitpush: {
            origin: {
                options: {
                    remote: "origin",
                    branch: "master"
                }
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks("grunt-harp");
    grunt.loadNpmTasks("grunt-bump");
    grunt.loadNpmTasks("grunt-git");

    // Task definition
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['harp:dist', 'gitpush:origin', 'bump']);

};
