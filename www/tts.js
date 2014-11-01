/*
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

tts.speak = function()
{
    exec(null, null, "tts", "speak", [message]);
}
