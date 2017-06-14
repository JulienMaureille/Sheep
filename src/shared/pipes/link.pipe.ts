import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({name: "LinkPipe"})
export class LinkPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string) {
    const pattern = new RegExp("http[s]?://[^ \t\n]+\.(com|fr|en|org)[^ \t\n]*");
    return value.replace(pattern, this.replacer);
  }

  replacer(substring: string, ...args: any[]) {
    return "<a href=\"" + this.sanitizer.bypassSecurityTrustResourceUrl(substring) + ">" +
      substring + "</a>";
  }

}
