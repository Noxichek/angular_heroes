import { Pipe, PipeTransform } from '@angular/core';
import {Battle} from "./interfaces";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(battles: Battle[], sortType: boolean): Battle[] {
    if(sortType) {
      return [...battles].sort((a:Battle, b:Battle) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else {
      return [...battles].sort((a:Battle, b:Battle) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }
  }

}
