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
var tts = module.exports;

tts.speak = function(message)
{
    exec(null, null, "tts", "speak", [message]);
}

});
