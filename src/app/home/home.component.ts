import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public platList: any = [];
  constructor(private http : HttpClient) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8080/findAll").subscribe(
      data=>{
        this.platList = data;
      }
    )
  }

}
