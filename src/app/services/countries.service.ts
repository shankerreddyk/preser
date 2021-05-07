import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
    providedIn:'root'
})
export class countriesservice{
    constructor(private obj:HttpClient){};
    public getcountries():Observable<any>{
        return this.obj.get("https://restCountries.eu/rest/v2/all");
    }
}