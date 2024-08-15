import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { SignupModule } from './generales/signup/signup.module';
import { loggingInterceptor } from './interceptors/logging.interceptor';
// import { authInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SignupModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([loggingInterceptor])),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
