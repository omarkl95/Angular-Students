import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realSearch'
})
export class RealSearchPipe implements PipeTransform {

  transform(posts: any, term: any): any {

    if(term==undefined)
    {
      return posts;
    }
    else
    {
      return posts.filter(function(posts){

        return posts.full_name.toUpperCase().includes(term.toUpperCase())
  
      })
    }












    


  }

}
