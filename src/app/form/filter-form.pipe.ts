import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'filterForm'
})
export class FilterFormPipe implements PipeTransform {

  transform(value: User[], filterText?: string): User[] {
    filterText=filterText?filterText.toLocaleLowerCase():null;
    return filterText?value.filter((f:User)=>f.formName.toLocaleLowerCase().indexOf(filterText)!==-1):value

  }

}
  