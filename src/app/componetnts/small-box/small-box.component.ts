import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-box',
  templateUrl: './small-box.component.html',
  styleUrls: ['./small-box.component.css']
})
export class SmallBoxComponent implements OnInit {

  @Input() photoCover: string = "";
  @Input() cardTitle: string = "";
  @Input() Id: string = "0";

  constructor() { }

  ngOnInit() {
  }

}
