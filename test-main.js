var tests = Object.keys(window.__karma__.files).filter(function (file) {
      return (/test\.js$/).test(file);
});

require(["chai", "sinon"], function (chai, sinon) {
    // now that environment is all configured, load the tests and start karma!
	mocha.setup('bdd');
	
	assert = chai.assert;
	var should = chai.should();
	expext = chai.expect;	
	
    require(tests, window.__karma__.start);
});
