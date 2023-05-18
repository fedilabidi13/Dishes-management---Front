import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plat} from "../models/Plat";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  public platList: any= [];
  constructor(private http: HttpClient, private router: Router) {

  }
  ngOnInit(): void {
    this.http.get("http://localhost:8080/findAll").subscribe(
      res=>{
        console.log(res)
        this.platList = res
        console.log(this.platList)
      }
    )
  }
  redirectUpdate(id: any)
  {
    console.log("redirection start")
    this.router.navigate(['/update?id='+String(id)])
  }
  delete(id: any)
  {
    this.http.post("http://localhost:8080/delete?id="+id,{}).subscribe(
      data=>
      {
        Swal.fire('Bravo!',
        'Vous avez supprimé le plat!',
        'success').then((result) => {
          // Reload the Page
          location.reload();
        });
   
      }, error => {
        Swal.fire('Bravo!',
        'Vous avez supprimé le plat!',
        'success').then((result) => {
          // Reload the Page
          location.reload();
        });
        
      }
    )
  }


}
function swal(arg0: { title: string; text: string; type: string; }, arg1: () => void) {
  throw new Error('Function not implemented.');
}

