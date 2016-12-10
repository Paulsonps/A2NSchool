import { LoginComponent } from "./component/login_component/login.component";
import { RegisterComponent } from "./component/register_component/register.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

export const navigatableComponents = [
  LoginComponent,RegisterComponent
];