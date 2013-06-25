define(['HelloWorld'], function (HelloWorld) {
	
    describe('HelloWorldTest', function(){    	
        it('test should return hello world!', function(){
            "hello world!".should.equal(HelloWorld());
        });
    });
	
    describe('HelloWorldTest1', function(){
        it('test should return hello world!', function(){
            assert.equal("hello world!", HelloWorld());
        });
    });

//    suite('HelloWorldTest', function(){
//        test('test should return hello world!', function(){
//            //assert.equal("hello world!", HelloWorld());
//            "hello world!".should.equal(HelloWorld());
//        });
//    });
    
});