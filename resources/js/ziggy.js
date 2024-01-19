const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"listing.create":{"uri":"listing\/create","methods":["GET","HEAD"]},"listing.store":{"uri":"listing","methods":["POST"]},"listing.edit":{"uri":"listing\/{listing}\/edit","methods":["GET","HEAD"],"parameters":["listing"],"bindings":{"listing":"id"}},"listing.update":{"uri":"listing\/{listing}","methods":["PUT","PATCH"],"parameters":["listing"],"bindings":{"listing":"id"}},"listing.destroy":{"uri":"listing\/{listing}","methods":["DELETE"],"parameters":["listing"]},"listing.index":{"uri":"listing","methods":["GET","HEAD"]},"listing.show":{"uri":"listing\/{listing}","methods":["GET","HEAD"],"parameters":["listing"],"bindings":{"listing":"id"}},"login":{"uri":"login","methods":["GET","HEAD"]},"login.store":{"uri":"login","methods":["POST"]},"logout":{"uri":"logout","methods":["DELETE"]},"user-account.create":{"uri":"user-account\/create","methods":["GET","HEAD"]},"user-account.store":{"uri":"user-account","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };