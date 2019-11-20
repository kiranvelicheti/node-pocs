export class CustomerDomain {
  name: String;
  address: String;
  phone: Number;
  constructor(name: String, address: String, phone: Number) {
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
}
