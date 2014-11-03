cordova.define("com.unit11apps.tts.tts", function(require, exports, module) { /*
 *
 *
*/

//------------------------------------------------------------------------------

var exec    = require('cordova/exec');
var utils  = require("cordova/utils");

//------------------------------------------------------------------------------
// object that we're exporting
//------------------------------------------------------------------------------

/**
 * tts object.
 * @constructor
 */
var tts = {
	startup : function(message, successCallback, errorCallback)
	{
	    exec(successCallback, errorCallback, "tts", "startup", []);
	},
	
	/**
     * Speaks the given message
     * 
     * @param {DOMString} message
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    speak : function(message, successCallback, errorCallback)
	{
	    exec(successCallback, errorCallback, "tts", "speak", [message]);
	},

    /**
     * Stop any queued synthesized speech
     * 
     * @param {DOMString} message
     * @param {Object} successCallback
     * @param {Object} errorCallback
     */
    stop: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, "tts", "stop", []);
    }
};

module.exports = tts;



});
