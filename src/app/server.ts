export class Server {
  public id: Number;
  constructor(public name: String, public capacity: Number) {
    this.id = this.generateId();
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
