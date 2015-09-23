module.exports = {
    options: {
        livereload: true
    },
    gruntfile: {
        files: ['gruntfile.js', 'grunt/**/**'],
        tasks: ['build']
    },
    sass: {
        files: ['css/**/**.scss'],
        tasks: ['sass']
    }
};
