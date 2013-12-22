module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		cssc: {
			build: {
				options: {
					consolidateViaDeclarations: true,
					consolidateViaSelectors:    true,
					consolidateMediaQueries:    true
				},
				files: {
					'css/creditdesign.css': 'css/creditdesign.css'
				}
			}
		},

		cssmin: {
			build: {
				src: 'css/creditdesign.css',
				dest: 'css/creditdesign.css'
			}
		},

		sass: {
			build: {
				files: {
					'css/creditdesign.css': 'sass/creditdesign.scss'
				}
			}
		},

		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		},

		watch: {
			css: {
				files: ['sass/**/*.scss'],
				tasks: ['compass:dev']
			}
		}

    });

    grunt.registerTask('default', ['watch']);
    // use build css for the final dist css
    grunt.registerTask('buildcss',  ['compass:dev']);

};