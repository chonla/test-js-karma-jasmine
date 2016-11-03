module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        port: 9999,
        singleRun: true,
        reporters: 'dots',
        files: [
            'src/**/*.js',
            'tests/unit/*.js'
        ]
    })
};
