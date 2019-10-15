import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-kennzeichenart",
  templateUrl: "./kennzeichenart.component.html",
  styleUrls: ["./kennzeichenart.component.css"]
})
export class KennzeichenartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onKennzeichenartClick($event) {
    const clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === "BUTTON") {
      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(
        ".btn-primary"
      );
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("btn-primary");
      }

      clickedElement.className += " btn-primary";
    }
  }
  tooltipMe() {
    this.isTooltipVisible = true;
  }
}
