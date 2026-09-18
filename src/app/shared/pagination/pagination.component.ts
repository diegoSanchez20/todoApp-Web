import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() public pagesTotal:any;
  @Input() public pagesActual:any;
  @Input() public totalRows:any;
  @Output() public eventChangePage = new EventEmitter();
  public arrayPages:number[] = [];

  ngOnChanges(changes:any): void{
    this.arrayPages = [];
    this.setPages(this.pagesActual);
  }

  ngOnInit(): void {
    this.arrayPages = [];
    this.setPages(this.pagesActual);
  }

  public selectPage(event:any){
    if(event === this.pagesActual){

    }else{
      this.pagesActual = event;
      this.setPages(this.pagesActual);
      this.eventChangePage.emit(this.pagesActual);
    }
  }

  public setPages(pageActual:any){
    if(this.pagesTotal > 5){
      if(this.pagesActual === this.pagesTotal){
        this.arrayPages = [this.pagesActual - 4, this.pagesActual -3, this.pagesActual - 2,this.pagesActual - 1, this.pagesActual]
      }else if(this.pagesActual === this.pagesTotal - 1){
        this.arrayPages = [this.pagesActual - 3, this.pagesActual - 2, this.pagesActual - 1,this.pagesActual, this.pagesActual + 1]
      }else if(this.pagesActual === 1){
        this.arrayPages = [this.pagesActual , this.pagesActual + 1, this.pagesActual + 2,this.pagesActual + 3, this.pagesActual + 4]
      }else if(this.pagesActual === 2){
        this.arrayPages = [this.pagesActual - 1, this.pagesActual , this.pagesActual + 1,this.pagesActual + 2, this.pagesActual + 3]
      }else{
        this.arrayPages = [this.pagesActual - 2, this.pagesActual - 1, this.pagesActual ,this.pagesActual + 1, this.pagesActual + 2]
      }
    }else{
      this.arrayPages = [];
      for(let pag = 0; pag < this.pagesTotal; pag++){
        this.arrayPages.push(pag + 1);
      }
    }
  }

  public prevPage(){
    if(this.pagesActual !== 1){this.pagesActual--;}
    this.setPages(this.pagesActual);
    this.eventChangePage.emit(this.pagesActual);
  }

  public nextPage(){
    if(this.pagesActual !== this.pagesTotal){this.pagesActual++;}
    this.setPages(this.pagesActual);
    this.eventChangePage.emit(this.pagesActual);
  }
}
