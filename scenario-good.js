const xcode = require('xcode');
const path = require('path');

const PBX_PROJECT_PATH = path.resolve('ios', 'testios2.xcodeproj', 'project.pbxproj');
const SPLASH_SCREEN_PATH = path.join('testios2', 'SplashScreen.storyboard')
  // This workaround forces the paths to _always be_ a posix path, which is not the case on Windows ofc.
  .replace(path.sep, path.posix.sep);

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
