import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup ,FormControl } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showModal:any;
  public showuser:any;
  public data:any;
  public apidata:any
  public apilink:any="http://localhost:3000/demo";

  registerform = new FormGroup({
    Name: new FormControl(''),
    number: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    add: new FormControl(''),
    hobb: new FormControl(''),



  });

  constructor(private http: HttpClient) { 
    // console.log(this.http);
    
  }
  


  submit() {
    // TODO: Use EventEmitter with form value
    console.log(this.registerform.value);
    var data=this.registerform.value;

    var api =  this.http.post(this.apilink,data).subscribe
    ((response:any)=>{
      console.log(response)
    },
    (err:any)=>{
      console.log(err)
    })

    // console.log(api)



  }



 

  ngOnInit(): void {

    this.http.get("http://localhost:3000/demo").subscribe
    (
      (response:any)=>{
        console.log(response)
        this.apidata = response
      },
      (err:any)=>{ console.log(err)}
    )     
  }

  

 

}


