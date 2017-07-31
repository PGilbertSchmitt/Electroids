# Electroids

This is just a small pet project to practice development using the following:
- Typescript
- Electron
- HTML5 Canvas
- Physics Simulation

## Building

This project uses webpack to compile the renderer code from TypeScript into JavaScript. The index.js file that runs the main process can stay in plain JavaScript as it's all boilerplate anyways, and there would be no need to write it in TypeScript. Before running `$ npm run start` to run the Electron application, run `$ npm run webpack` (or just `$ webpack` if installed locally) to generate the bundled file.