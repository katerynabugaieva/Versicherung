import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-kennzeichen-fahrzeug",
  templateUrl: "./kennzeichen-fahrzeug.component.html",
  styleUrls: ["./kennzeichen-fahrzeug.component.css"]
})
export class KennzeichenFahrzeugComponent implements OnInit {
  countryBadge: string = "D";
  constructor() {}

  ngOnInit() {}
}
