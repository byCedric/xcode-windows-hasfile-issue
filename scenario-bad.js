const xcode = require('xcode');
const path = require('path');

const PBX_PROJECT_PATH = path.resolve('ios', 'testios2.xcodeproj', 'project.pbxproj');
const SPLASH_SCREEN_PATH = path.join('testios2', 'SplashScreen.storyboard');

console.log('Running test with the following paths:', {
  PBX_PROJECT_PATH,
  SPLASH_SCREEN_PATH,
});

// Create a new pbx project instance
const project = xcode.project(PBX_PROJECT_PATH);
// Now parse the project
project.parseSync();

// Determine if "SplashScreen.storyboard" exists
const file = project.hasFile(SPLASH_SCREEN_PATH);

if (file) {
  console.log('Splash screen file located', file);
} else {
  throw new Error('Splash Screen file does not exists');
}
