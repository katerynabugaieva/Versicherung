import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-of-payment",
  templateUrl: "./form-of-payment.component.html",
  styleUrls: ["./form-of-payment.component.css"]
})
export class FormOfPaymentComponent implements OnInit {
  isTooltipVisible: boolean = false;
  constructor() {}

  ngOnInit() {}

  onButtonGroupClick($event) {
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
