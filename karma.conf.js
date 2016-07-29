// Karma configuration
// Generated on Thu Jun 11 2015 14:56:40 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
		'node_modules/jquery/dist/jquery.js',
		'node_modules/sinon/pkg/sinon.js',
		'src/*.js',
		'test/*.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	  preprocessors: {
		  //source files that you wanna generate coverage for;do not include tests or libraries
		  //these files will be instrumented by Istanbul
		  'src/*.js': ['coverage']
	  },

	  plugins: [
		  'karma-mocha',
		  'karma-chrome-launcher',
		  'karma-coverage',
		  'karma-mocha-reporter',
		  'karma-bamboo-reporter',
		  'karma-firefox-launcher',
		   'sinon',
      'karma-jasmine',
      'karma-sinon',
		  'jquery'
	  ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
	  reporters: ['bamboo', 'dots', 'progress', 'coverage'],
	  bambooReporter: {
		 filename: 'UT.results.json'
	  },
	  coverageReporter: {
		  dir: 'coverage',
		  subdir: '.',
		  reporters:[
			  {type: 'text-summary'},  //print final coverage results in the console
			  {type: 'clover', file: 'clover.xml'}, //integrate with bamboo
			  {type: 'html'}
		  ]
	  },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
