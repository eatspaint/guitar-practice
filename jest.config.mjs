export default {
  // Use tsc to compile *.tsx?, leave *.jsx? as is. We DO NOT use Babel!
  preset: "ts-jest",

  // Run tests in a virtual DOM
  testEnvironment: "jsdom",
};
