import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst'
})

// We want to uppercase the first letter to match the OMDB obj
export class UcfirstPipe implements PipeTransform {

    transform(value: string): string {
      console.log(value);
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  
  }
