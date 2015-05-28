module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			options: {
				banner: '/* Sampler, built <%=  grunt.template.today() %> */'
			},

			app: {
				src: [
					'./app/helper.js',
					'./app/app.js',
					'./app/models/*.js',
					'./app/controllers/*.js'
				],
				
				dest: './public/js/built/app.min.js'
			}
		}
	});

	// Load the plugin that prvides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Default task(s).
	grunt.registerTask('default', ['concat']);
}
