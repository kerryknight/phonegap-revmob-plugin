/*
 * revmob.js
 * Adapted by Kerry Knight on 2013-10-15
 *
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

(function(cordova) {

	var exec = require('cordova/exec'),
		service = 'RevMobPlugin';

	var RevMob = {
	    initWithAppId: function(appId, successCallback, errorCallback) {
			if(!appId) return false;
			return cordova.exec(successCallback, errorCallback, service, "startSession", [appId]);
		},

		showFullscreen: function(successCallback, errorCallback) {
			return cordova.exec(successCallback, errorCallback, service, "showFullscreen", []);
		},

		openAdLink: function(successCallback, errorCallback) {
			return cordova.exec(successCallback, errorCallback, service, "openAdLink", []);
		},

		showPopup: function(successCallback, errorCallback) {
			return cordova.exec(successCallback, errorCallback, service, "showPopup", []);
		},

		setTestingMode: function(testingMode) {
			var test_mode = 0;
			
			switch(testingMode) {
				case "TEST_DISABLED":
				break;
				case "TEST_WITH_ADS":
					test_mode = 1;
					break;
				case "TEST_WITHOUT_ADS":
					test_mode = 2;
					break;
				default:
					break;
			}

			return cordova.exec(null, null, service, "setTestingMode", [test_mode]);
		},

		printEnvironmentInformation: function() {
			return cordova.exec(null, null, service, "printEnvironmentInformation", []);
		},

		setTimeoutInSeconds: function(seconds) {
			return cordova.exec(null, null, service, "setTimeoutInSeconds", [seconds]);
		}
	};

	module.exports = RevMob;

})(window.cordova || window.Cordova || window.Phonegap || window.phonegap || window.PhoneGap);
