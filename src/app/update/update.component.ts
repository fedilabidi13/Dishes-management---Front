import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Plat} from "../models/Plat";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
  public plat !:any ;
  id : any;
  titre : string='' ;
  prix: string='';
  private fileToUpload!: File
  updateForm !: FormGroup;
  constructor(private fb: FormBuilder, private _Activatedroute:ActivatedRoute, private http : HttpClient) {
  }
  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    console.log('id is')
    console.log(this.id)
    this.http.get("http://localhost:8080/get?id="+this.id).subscribe(
      (data) =>
      {

          this.plat = data
        console.log(typeof this.plat)
        console.log(this.plat.titre)
      }
    )
    this.titre = this.plat.titre
    this.prix = this.plat.prix



  }
  onSubmit()
  {
    console.log('begining upload')

    console.log('second begining')
    const formData = new FormData();
    formData.append('file', this.fileToUpload)
    formData.append('id', this.id)
    formData.append('titre', this.plat.titre)
    formData.append('prix', this.plat.prix)
    this.http.post("http://localhost:8080/update", formData).subscribe(
      data=>
      {
        console.log(data)
      }
    )
  }
  onFileSelected(event: any): void {
    console.log(event.target.files)
    // @ts-ignore
    this.fileToUpload = (event.target as HTMLInputElement).files[0]
  }

}
