require.config({
    baseUrl : '/base/src',

    paths : {    
        'chai': '../node_modules/chai/chai',        
        'sinon': '../node_modules/sinon/pkg/sinon'        
    },    
    "shim" : {
    	"chai" : {
    		"exports" : "chai"
    	},
    	"sinon" : {
    		"exports" : "sinon"
    	}
    }
});
