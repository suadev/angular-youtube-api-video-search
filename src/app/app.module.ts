import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {VideoService} from "app/video.service";
import { Constants } from "app/app.constants";
import { AppComponent } from './app.component';
import { NgbdModalContent } from "app/modal.component";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent, NgbdModalContent, SafePipe
  ],
  imports: [
  BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule, NgbModule.forRoot(), HttpModule],
  providers: [VideoService, Constants],
  bootstrap: [AppComponent],
    entryComponents: [NgbdModalContent],
})
export class AppModule { }
