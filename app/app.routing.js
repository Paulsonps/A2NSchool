"use strict";
var login_component_1 = require("./component/login_component/login.component");
var register_component_1 = require("./component/register_component/register.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "register", component: register_component_1.RegisterComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent, register_component_1.RegisterComponent
];
//# sourceMappingURL=app.routing.js.map