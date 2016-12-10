// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes,navigatableComponents } from "./app.routing";

@NgModule({
    declarations: [AppComponent,navigatableComponents],
    bootstrap: [AppComponent],
    imports: [	NativeScriptModule,
    			NativeScriptHttpModule,
    			NativeScriptRouterModule,
    			NativeScriptRouterModule.forRoot(routes)
    		],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);