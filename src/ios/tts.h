/*

 */

#import <Cordova/CDVPlugin.h>
#import <AVFoundation/AVFoundation.h>

@interface TTS : CDVPlugin

@property (nonatomic, strong) AVSpeechSynthesizer *synthesizer;

- (void)startup:(CDVInvokedUrlCommand*)command;

- (void)speak:(CDVInvokedUrlCommand*)command;

- (void)stop:(CDVInvokedUrlCommand*)command;

@end
