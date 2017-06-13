import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({name: 'iframe'})
export class IFramePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url: string) {
    const youtube = new RegExp("youtube");
    const insta = new RegExp("instagram");
    if (url.match(youtube)) {
      return "https://www.youtube.com/embed/" + url.match("v=[^&]*")[0].split("=")[1];
    }
    else if (url.match(insta)) {

    }
    return url;
  }

}
