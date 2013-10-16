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

			var s = this;
			s.TEST_DISABLED = 0;
			s.TEST_WITH_ADS = 1;
			s.TEST_WITHOUT_ADS = 2;

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
			return cordova.exec(null, null, service, "setTestingMode", [testingMode]);
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
