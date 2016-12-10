import {Component, OnInit} from "@angular/core";
import {topmost} from "ui/frame";
import {Page} from "ui/page";
// import { User } from ".../shared/user";

@Component({
    // selector: "app-login",
    templateUrl: "component/login_component/login.component.html",
})
export class LoginComponent implements OnInit {

    page: Page;
    ngOnInit() {
        this.page = <Page>topmost().currentPage;
        this.page.actionBarHidden = true;
    }

    email = "nativescriptrocks@telerik.com";
	  isLoggingIn = true;

	  submit() {
	    alert("You’re using: " + this.email);
	  }
	  toggleDisplay() {
	    this.isLoggingIn = !this.isLoggingIn;
	  }
}
