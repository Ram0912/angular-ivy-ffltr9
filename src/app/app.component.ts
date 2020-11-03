import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  gridOptions: any = {
    pagination: true
  };
  columnDefs = [
    { headerName: "Make", field: "make", rowDrag: true },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }
  ];

  ngOnInit() {}

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
}
