import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  selectedFile: File;

  constructor(private http: HttpClient) { }
  randomNumber: number;

  generateRandomNumber() {
    this.randomNumber = Math.random();
    this.randomNumber = parseFloat(this.randomNumber.toFixed(4));  
    setTimeout(() => {
      this.randomNumber = Math.floor(Math.random() * 1);
    }, 5000); // 5000 milliseconds (5 seconds) delay
  }

onFileSelected(event: Event) {
  const fileInput = event.target as HTMLInputElement;
  if (fileInput.files && fileInput.files[0]) {
    this.selectedFile = fileInput.files[0];
  }
}

  

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('https://example.com/upload', uploadData)
      .subscribe(res => {
        console.log(res);
      });
  }
}