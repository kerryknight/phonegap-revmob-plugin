#import <Foundation/Foundation.h>
#import "RevMobAds.h"
#import "CDVPlugin.h"


@interface RevMobPlugin : CDVPlugin

- (void) startSession:(CDVInvokedUrlCommand*)command;

- (void) setTestingMode:(CDVInvokedUrlCommand*)command;

- (void) openAdLink:(CDVInvokedUrlCommand*)command;

- (void) showPopup:(CDVInvokedUrlCommand*)command;

- (void) showFullscreen:(CDVInvokedUrlCommand*)command;

- (void) printEnvironmentInformation:(CDVInvokedUrlCommand*)command;

- (void) setTimeoutInSeconds:(CDVInvokedUrlCommand*)command;

@end