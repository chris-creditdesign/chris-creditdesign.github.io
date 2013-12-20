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
		            'build/css/master.css': 'assets/sass/master.scss'
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

		concat: {
			buildIndex: {
				src: ['assets/index.html'],
				dest: 'build/index.html'
			}
		},

		uglify: {
			build: {
				files: {
					'build/js/index.min.js': ['assets/js/index.js']
				}
			}
		},

		browser_sync: {
			files: {
				src: [
					'build/index.html',
					'build/css/master.css',
					'build/js/index.min.js'
					]
			},
			options: {
				watchTask: true
			}
		},

		watch: {
		    css: {
		        files: ['assets/sass/**/*.scss'],
		        tasks: ['compass:dev']
		    },
			concat: {
		    	files: ['assets/*.html'],
				tasks: ['concat']
			},
			uglify: {
				files: ['assets/js/*.js'],
				tasks: ['uglify']
			}

		}

    });

    grunt.registerTask('default', ['browser_sync', 'watch']);
    // use build css for the final dist css
    grunt.registerTask('buildcss',  ['compass:dev', 'cssc', 'cssmin']);

};