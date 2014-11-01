/*

 */

#import <Cordova/CDVPlugin.h>
#import <AVFoundation/AVFoundation.h>

@interface TTS : CDVPlugin

@property (nonatomic, strong) AVSpeechSynthesizer *synthesizer;

- (void)speak:(CDVInvokedUrlCommand*)command;

@end
