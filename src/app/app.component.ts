import { Component, OnInit } from "@angular/core";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  
  msg = fromEvent<MessageEvent>(window, "message");

  ngOnInit() {
    this.getData();
  }

  getData() {
    // Recibe mensaje
    this.msg.subscribe(event => {
      console.log(event.data);
      localStorage.setItem('token', event.data.value)
    });
  }
}
