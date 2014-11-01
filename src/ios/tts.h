/*

 */

#import <Cordova/CDVPlugin.h>

@interface TTS : CDVPlugin

- (void)speak:(CDVInvokedUrlCommand*)command;

@end
