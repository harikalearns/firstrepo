import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  city: string = "Bellary";
  path:string= "../assets/image.jpg";
  isdisabled :boolean=false;
  ishidden:boolean=false;
  counter:number=0;
  servercreationstatus:string= "no server was created";
 name="xyz";
  
  Increment(){
  this.counter+=1;
  }
  Decrement(){
  this.counter-=1;
  } 
  
  oncreateserver(){

    this.servercreationstatus= "server was created";
  }
changename(e:any){
  console.log(e)
  console.log(e.target)
  console.log(e.target.value)

  this.name= e.target.value;
}  
 servername:" ";
 onupdateservername(e:any){
  console.log(e);
  console.log(e.target);
  console.log(e.target.value);
  this.servername =e.target.value;
 }
 city1:string= "Hyderabad";
 onupdatecity(){
  this.city1="Bangalore"
 }

 isactive:boolean=true;
 applyc1:boolean=true;
 cvar:string="blue";
 mystyle:object=
  {
  color:'Pink',
  border:"2px solid red",
  background:"yellow"
}
showhead= "jnkj";
data= ["nimbagallu", "bellary", "banagalore"]
showmsg=true;

contacts=[

{
  firstname:'harika',
  lastname:'koka',
  id:123
},
{
  firstname:'shashee',
  lastname:'chiluka',
  id:456
},
{
  firstname:"sameera",
  lastname:"Royal",
  id:789
}
]
superpower="snowman";//string//
styleprep="yellow";
txtcolor= 'red';


  constructor() { }

  ngOnInit(): void {
  }

}
