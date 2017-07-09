import { Component } from '@angular/core';
import { VideoService } from "app/video.service";
import {Constants} from "app/app.constants";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  NgbdModalContent } from "app/modal.component";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  searchKey: string = '';
  response: any;
  videoKey :string;
  commons: Constants = Constants.getInstance();

constructor(public videoService: VideoService,private modalService: NgbModal){

}

DoSearch(){
    this.commons.requestCount++;
  this.videoService.SearchVideo(this.searchKey).subscribe(
    res => this.response = res,
    error=> {
        console.log("Error: ", error);
        this.commons.requestCount--;
        this.response = null;
    },
    () =>  {
       this.commons.requestCount--;
      console.log(this.response);
    }
  );
}

  onClick(header:string, key:string) {
     const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.header = header;
    modalRef.componentInstance.url = "https://www.youtube.com/embed/" + key;
  }

}
