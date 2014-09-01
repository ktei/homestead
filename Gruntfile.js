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
                  'cd client',
                  'ember build --environment=production',
                  'cp dist/index.html ../views/index.ejs',
                  'cp -r dist/assets ../public',
                  'git add --all',
                  'git commit -m "new deployment"'
                ].join('&&')
              }
            }
          });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('deploy', ['shell']);

  };