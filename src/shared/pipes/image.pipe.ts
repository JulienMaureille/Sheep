import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "ImagePipe"})
export class ImagePipe implements PipeTransform {

  constructor() {
  }

  transform(value: string) {
    const pattern = new RegExp("http[s]?://[^ \t\n]+\.(jpg|png|jpeg|bmp|svg|gif|tiff)");
    return value.replace(pattern, this.replacer);
  }

  replacer(substring: string, ...args: any[]) {
    return "<a href=\"" + substring + "\">" +
      substring + "<img src=\"" +
      substring + "\"></a>";
  }

}
