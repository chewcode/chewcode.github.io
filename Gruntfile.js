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
                  dest: 'read'
            }
        },
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: [' -a '],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'upstream',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks("grunt-harp");
    grunt.loadNpmTasks("grunt-bump");

    // Task definition
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['bump', 'harp:dist']);

};
