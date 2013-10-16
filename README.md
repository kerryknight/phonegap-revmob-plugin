phonegap-revmob-plugin
======================

Update to the official [RevMob Phonegap Cordova SDK](http://sdk.revmobmobileadnetwork.com/phonegap_cordova.html) to enable automatic installation via local Phonegap CLI. 

### Notes: 
* Currently works for iOS only.
* Tested using iOS 6.1 and 7.0
* Tested so far only using Phonegap CLI 3.1.0
* Requires using Phonegap CLI for automatic local installation

### Files Modified from the [RevMob Phonegap Cordova SDK](http://sdk.revmobmobileadnetwork.com/phonegap_cordova.html) to enable automatic installation:
* plugin.xml - to meet Phonegap CLI plugin inclusion specs
* www/revmob.js - to be in line with core Apache Cordova plugin design, also including an initWithAppId: method
* I have not modified RevMob's included `src/ios/librevmob-ios-wrapper.a` or `src/ios/RevMobPlugin.h` whatsoever

### Changes from [Official SDK Documentation](http://sdk.revmobmobileadnetwork.com/phonegap_cordova.html)
* I've updated how you start a RevMob session/initialize the SDK. See Installation step #3 below. All other function calls are the same as the official documentation.

### Installation
 1. Within your already created local Phonegap project's config.xml file, add an entry to include the plugin:
  
  ```xml
  <feature name="RevMobPlugin">
    <param name="ios-package" value="RevMobPlugin" />
  </feature>
  ```   
 2. Install the plugin with Phonegap CLI: 
    `phonegap local plugin install https://github.com/kerryknight/phonegap-revmob-plugin.git`
 3. You must call `RevMob.initWithAppId("YOUR_REVMOB_APP_ID_HERE")` to initialize the SDK; a good place to put this might be within your 'deviceready' event handler in a head tag like so:
```
<script type="text/javascript" charset="utf-8">
    function onDeviceReady() {
      RevMob.initWithAppId("YOUR_REVMOB_APP_ID_HERE");
    }

    function onBodyLoad() {
      document.addEventListener("deviceready", onDeviceReady, false);
    }
</script>
```
 4. Build and run your Xcode project (I've only tested using Xcode 5.0). If you've successfully installed, once the app has loaded and is running, you should see RevMob-related messages in the Xcode console.
 5. Note: You may get a Dependency Analysis Warning: "Warning: no rule to process file...blah blah blah...librevmob-ios-wrapper.a' of type archive.ar....blah"

 Using the technique outlined [here](http://joytek.blogspot.tw/2011/09/xcode-4-warning-no-rule-to-process-file.html), you can fix this warning. It's literally as easy as going to your Project Target's Build Phases section, dragging the librevmob-ios-wrapper.a file from Compile Sources to Copy Bundle Resources. So far, this fix seems to work for me without issue.


