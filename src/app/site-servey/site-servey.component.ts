import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-site-servey',
  templateUrl: './site-servey.component.html',
  styleUrls: ['./site-servey.component.css']
})
export class SiteServeyComponent implements OnInit {
  url =""
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
selectFile(event) {
if (event.target.files){
var reader = new FileReader()
reader.readAsDataURL(event.target.files[0])
reader.onload = (event: any) => {
  this.url = event.target.result
}


} 


  

  }

}
