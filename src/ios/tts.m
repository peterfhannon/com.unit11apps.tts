/*

 */

#import "tts.h"
#import <Cordova/CDV.h>

@implementation TTS

@synthesize synthesizer;

- (void)pluginInitialize
{
    self.synthesizer = [[AVSpeechSynthesizer alloc]init];

}

- (void)startup:(CDVInvokedUrlCommand*)command
{
    //Nothing
}

- (void)speak:(CDVInvokedUrlCommand*)command
{
    id message = [command.arguments objectAtIndex:0];

    NSLog(@"%@", message);
    
    AVSpeechUtterance *utterance = [AVSpeechUtterance speechUtteranceWithString:message];
    [utterance setRate:0.2f];
    
    utterance.voice = [AVSpeechSynthesisVoice voiceWithLanguage:@"en-GB"];
    
    [self.synthesizer speakUtterance:utterance];
}

- (void)stop:(CDVInvokedUrlCommand*)command
{
    [self.synthesizer stopSpeakingAtBoundary:true];
}

@end
