import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = ['id', 'bookName', 'price', 'status', 'actions'];
  dataSource! : MatTableDataSource<any>;
  constructor(private _bookservice: BookService){ }

  ngOnInit(): void {
    this.getBookList()
  }
  
  getBookList(){
    this._bookservice.getBookList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
     },
     error: console.log
     });
  }
    delete(id: number){
      this._bookservice.delete(id).subscribe({
        next: (res) =>{},
        error: console.log
      })
   
    };
  }
