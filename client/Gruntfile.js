module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {                                // Task
            listFolders: {                      // Target
                options: {                      // Options
                    stderr: false
                },
                command: [
                    'ember build',
                    'cp dist/index.html ../views/index.ejs',
                    'cp -r dist/assets ../public'
                ].join('&&')
            }
        },
        watch: {
            shell: {
                files: ['Brocfile.js', 'Gruntfile.js', 'app/**', 'config/**'],
                tasks: ['shell']
            }
        }
    });
     
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
     
    // Default task(s).
    grunt.registerTask('default', ['shell']);
 
};