import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.css"]
})
export class CrudComponent implements OnInit {
  name: string;
  sex: string;
  age: number;
  address: string;
  city: string;

  sexes = ["Masculino", "Feminino"];

  cities = [
    {
      name: "Manaus",
      state: "AM"
    },
    {
      name: "São Paulo",
      state: "SP"
    },
    {
      name: "Rio de Janeiro",
      state: "RJ"
    },
    {
      name: "Rio Grande do Norte",
      state: "RN"
    }
  ];

  clients = [];

  showList = false;
  showEdit = false;
  indexEdit: number;

  constructor() {}

  ngOnInit() {}

  save() {
    this.clients.push({
      name: this.name,
      sex: this.sex,
      age: this.age,
      address: this.address,
      city: this.city
    });
    this.clean();
  }

  clean() {
    this.name = "";
    this.sex = "";
    this.age = 0;
    this.address = "";
    this.city = "";
  }

  list() {
    console.log(this.clients);
    this.showList = !this.showList;
  }

  deleteItem(index: number) {
    this.clients.splice(index, 1);
  }

  editClient(index: number) {
    this.showEdit = !this.showEdit;
    this.showList = !this.showList;
    this.indexEdit = index;

    this.name = this.clients[index].name;
    this.sex = this.clients[index].sex;
    this.age = this.clients[index].age;
    this.address = this.clients[index].address;
    this.city = this.clients[index].city;
  }

  update() {
    this.showEdit = !this.showEdit;

    this.clients[this.indexEdit].name = this.name;
    this.clients[this.indexEdit].sex = this.sex;
    this.clients[this.indexEdit].age = this.age;
    this.clients[this.indexEdit].address = this.address;
    this.clients[this.indexEdit].city = this.city;

    this.clean();
  }

  cancelEdit() {
    this.showEdit = !this.showEdit;
    this.clean();
  }
}
