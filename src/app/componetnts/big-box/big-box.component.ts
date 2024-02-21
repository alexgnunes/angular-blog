import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-big-box",
  templateUrl: "./big-box.component.html",
  styleUrls: ["./big-box.component.css"],
})
export class BigBoxComponent implements OnInit {
  @Input() photoCover: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
  @Input() Id: string = "0";

  constructor() {}

  ngOnInit() {}
}
