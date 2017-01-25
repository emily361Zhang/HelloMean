'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('helloMeanApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
