/*

 */

#import "tts.h"
#import <Cordova/CDV.h>

@implementation TTS

/* log a message */
- (void)speak:(CDVInvokedUrlCommand*)command
{
    id message = [command.arguments objectAtIndex:0];

    NSLog(@"%@", message);
}

@end
