module.exports = function(grunt) {
    grunt.registerTask('build', ['sass', 'modernizr']);
    grunt.registerTask('release', ['build']);
    grunt.registerTask('default', ['build', 'watch']);
};
