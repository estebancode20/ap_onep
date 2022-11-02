import { Component, OnInit } from '@angular/core';

/* importamos la libreria Router */
import { Router } from '@angular/router';

/* Importamos el HttpClientModule */
import {HttpClient} from '@angular/common/http';

/*importamos map*/
import { map } from "rxjs/operators";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  /*declaramos el arreglo users para almacenar los datos del json*/
  users: any = []

  /*declaramos una variable para el usuario que está buscando*/
  searchedUser: any;

  permission: boolean;

  constructor(private router: Router, 
              private http: HttpClient) { }

  ngOnInit() {
    
    /*mostrará el ion-list cuando tenga estos servicios*/
    this.permission = true;
    console.log("hoola");
    this.getUser().subscribe(res=>{
      console.log("Res",res)
      /* Al almacenar los datos del json en users, podemos hacer uso de eso en el html*/
      this.users = res;
      this.searchedUser = this.users;
      
    });

  }

  /*funcion de navegacion de customers a home*/  
  goToHome(){
    this.router.navigate(['/home'])

  }

  /* Funcion para retornar el archivo customers.json */
  getUser(){
    return this.http
    .get("assets/files/customers.json")
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }


  /* Funcion para busqueda de usuario */
  searchCustomer(event){
    const text = event.target.value; 
    this.searchedUser = this.users;
    if (text && text.trim() != '' ){
      this.searchedUser = this.searchedUser.filter((user:any)=>{
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1); 
      })

    }

  }


}
