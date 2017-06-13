import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({name: 'iframe'})
export class IFramePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url: string) {
    return "https://www.youtube.com/embed/"+ url.match("v=[^&]*")[0].split("=")[1];
  }

}
