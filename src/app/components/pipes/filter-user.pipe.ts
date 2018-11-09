import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {
  transform(value :any[], term?: string):any[]   {
    if(!value)return null;
    if (!term) {
      return value;
    }
  else{
    return value.filter(function(x:any)   {
        return x.toLowerCase().includes(term);
    }
    );
  }}
}
