"use strict";
var core_1 = require("@angular/core");
var frame_1 = require("ui/frame");
var router_1 = require("@angular/router");
// import { User } from ".../shared/user";
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.email = "nativescriptrocks@telerik.com";
        this.isLoggingIn = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page = frame_1.topmost().currentPage;
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.submit = function () {
        alert("You’re using: " + this.email);
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.router.navigate(["/register"]);
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        // selector: "app-login",
        templateUrl: "component/login_component/login.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map