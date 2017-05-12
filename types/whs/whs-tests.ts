import * as WHS from "./core";

const app = new WHS.App();
app.start();

let loop = new WHS.Loop(() => {});
loop = new WHS.Loop(() => {}, true);

loop.start(app);
loop.stop(app);
loop.execute();

const component = new WHS.Component();
component.addTo(app);
component.clone();
const component2 = new WHS.Component();
component.copy(component2);

// Testing parent of component (ModuleSystem)
// TODO pass module type
component.integrateModules();
component.applyModule(null);
const map = component.applyBridge();
component.disposeModule(null);
component.disposeModules();
component.module(null).disposeModules();

const camera = new WHS.CameraComponent();
const clonedCamera = camera.clone();
