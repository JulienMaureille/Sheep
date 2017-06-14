import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "LinkPipe"})
export class LinkPipe implements PipeTransform {

  transform(value: string) {
    const pattern = new RegExp("https?://(?![^\" ]*(?:jpg|png|jpeg|bmp|svg|gif|tiff))[^\" ]+[^ \t\n]*");
    return value.replace(pattern, this.replacer.bind(this));
  }

  replacer(substring: string, ...args: any[]) {
    return "<a href=\"" + substring + "\">" + substring + "</a>";
  }

}
