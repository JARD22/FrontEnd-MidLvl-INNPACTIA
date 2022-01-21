import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fechaWT'})

export class NdatePipe implements PipeTransform {

  transform(value) {
    if (value) {
      let fechaWT=  value.split('T')
      let fecha=fechaWT[fechaWT.length-2]
      return fecha;
    }
  }

}
