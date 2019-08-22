import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'filter'

})
export class FilterPipe implements PipeTransform {
  nameFilter = 'title';
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();
    if (this.nameFilter == 'title') {
      return items.filter(it => {
        return it.title.toLocaleLowerCase().includes(searchText);
      });
    }

  }
}