import { Pipe, PipeTransform } from '@angular/core';
import { Form } from './form';

@Pipe({
  name: 'filterForm'
})
export class FilterFormPipe implements PipeTransform {

  transform(value: Form[], filterText?: string): Form[] {
    filterText=filterText?filterText.toLocaleLowerCase():null;
    return filterText?value.filter((f:Form)=>f.formName.toLocaleLowerCase().indexOf(filterText)!==-1):value

  }

}
  