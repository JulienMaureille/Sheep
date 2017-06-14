import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "EmojiPipe"})
export class EmojiPipe implements PipeTransform {


  constructor() {
  }

  transform(value: string) {
    const pattern = new RegExp("([:;][D)(op])|<3|xd");
    return value.replace(pattern, this.replacer);
  }

  replacer(substring: string, ...args: any[]) {
    switch (substring) {
      case ":)":
        return "&#128512;";
      case ";)":
        return "&#128521;";
      case ";p":
        return "&#128540;";
      case ":(":
        return "&#128543;";
      case ":D":
        return "&#128512;";
      case ":p":
        return "&#128523;";
      case "<3":
        return "&#128148;";
      case  ":o":
        return "&#128559;";
      case  "xd":
        return "&#128514";
        ;
    }
  }

}
