import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({name: "ImagePipe"})
export class ImagePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string) {
    const pattern = new RegExp("http[s]?://[^ \t\n]+\.(jpg|png|jpeg|bmp|svg|gif|tiff)");
    return value.replace(pattern, this.replacer);
  }

  replacer(substring: string, ...args: any[]) {
    return "<a href=\"" + this.sanitizer.bypassSecurityTrustResourceUrl(substring) + ">" +
      substring + "</a><br><img src=\"" +
      this.sanitizer.bypassSecurityTrustResourceUrl(substring) + "\">";
  }

}
