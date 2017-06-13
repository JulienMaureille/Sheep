import {Pipe, PipeTransform} from "@angular/core";
import {Http} from "@angular/http";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({name: "ImagePipe"})
export class ImagePipe implements PipeTransform {

  transform(value: string) {
    const pattern = new RegExp("http[s]?://[^ \t\n]+\.(jpg|png|jpeg|bmp|svg|gif|tiff)");
    return value.replace(pattern, this.replacer);
  }

  replacer(substring: string, ...args: any[]) {
    return "<a href=\"" + substring + ">" + substring + "</a><br><img src=\"" + substring + "\">";
  }

}
