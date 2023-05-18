import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  prix : string='';
  titre : string='' ;
  private fileToUpload!: File
  constructor(private http : HttpClient) {
  }
  onSubmit()
  {
    console.log('begining upload')

    console.log('second begining')
    const formData = new FormData();
    formData.append('file', this.fileToUpload)

    formData.append('titre', this.titre)
    formData.append('prix', this.prix)
    this.http.post("http://localhost:8080/add", formData).subscribe(
      data=>
      {
        console.log(data)
        this.titre=''
        this.prix=''
        Swal.fire(
          'Bravo!',
          'Vous avez ajouté un plat !',
          'success'
        )
      }
    )
  }
  onFileSelected(event: any): void {
    console.log(event.target.files)
    // @ts-ignore
    this.fileToUpload = (event.target as HTMLInputElement).files[0]
  }
}
