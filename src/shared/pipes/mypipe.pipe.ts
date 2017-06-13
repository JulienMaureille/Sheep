import { Pipe, PipeTransform } from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {Http} from "@angular/http";

@Pipe({name: "Mypipe"})
export class Mypipe implements PipeTransform {



  constructor(private http: Http) { }
  transform(value: string): string {
    const pattern = new RegExp("[:;<][)op]");
    return value.replace(pattern, this.replacer);
}

  replacer (substring: string, ...args: any[] ) {
    switch (substring) {
      case ":)": return "&#128512;";
      case ";)": return "&#128521;";
      case ":(": return "&#128543;";
      case ":D": return "&#128527;";
      case ":p": return "&#128523;";
      case "<3": return "&#128148;";
      case  ":o": return "&#128558;";
    }
  }

}
