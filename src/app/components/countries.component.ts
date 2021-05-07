import {Component} from "@angular/core";
import {countriesservice} from "../services/countries.service";
import {HttpErrorResponse} from "@angular/common/http";
import { templateJitUrl } from '@angular/compiler';
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export class countriescomponent{
    result:any;
    constructor(private obj:countriesservice){};
    ngOnInit(){
        this.obj.getcountries().subscribe((posres)=>{
            this.result=posres
        },(errres:HttpErrorResponse)=>{
            console.log(errres);
        })
    }
}