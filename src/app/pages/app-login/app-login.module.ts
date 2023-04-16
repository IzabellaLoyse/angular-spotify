import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppLoginRoutingModule } from './app-login-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AppLoginRoutingModule],
})
export class AppLoginModule {}
