import { Component, OnInit } from '@angular/core';
import {List} from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists:List[]=[
    new List('Cook','Cook chicken, cabbage and rice'),
    new List('Shop','Buy tomatoes, mangoes,rice, chicken and italian seasoning'),
    new List('Pick outfits','Pick appropriate clothes for my trip to mombasa'),
  ];
  toggleDetails(index){
    this.lists[index].showDescription=!this.lists[index].showDescription;
  }
  completeGoal(isComplete,index){
    if(isComplete){
      this.lists.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
