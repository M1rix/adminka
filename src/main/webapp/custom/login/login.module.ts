import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { LOGIN_ROUTE } from './login.route';
import { LoginComponent } from './login.component';
import {NbAuthModule} from "@nebular/auth";
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule, NbIconModule,
  NbInputModule,
  NbLayoutModule
} from "@nebular/theme";

@NgModule({
  imports: [SharedModule, RouterModule.forChild([LOGIN_ROUTE]), NbAuthModule, NbLayoutModule, NbCardModule, NbInputModule, NbCheckboxModule, NbAlertModule, NbButtonModule, NbIconModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
