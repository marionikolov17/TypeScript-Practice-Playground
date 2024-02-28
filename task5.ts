class Box<T> {
  private _count: number = 0;
  private store: Array<any> = [];

  public add(element: T): void {
    this.store.push(element);
    this._count++;
  }

  public remove(): void {
    this.store.pop();
    this._count--;
  }

  get count() {
    return this._count;
  }
}

let box = new Box<String>();

box.add("Pesho");

box.add("Gosho");

console.log(box.count);
box.remove(); console.log(box.count);