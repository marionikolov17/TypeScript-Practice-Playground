var Box = /** @class */ (function () {
    function Box() {
        this._count = 0;
        this.store = [];
    }
    Box.prototype.add = function (element) {
        this.store.push(element);
        this._count++;
    };
    Box.prototype.remove = function () {
        this.store.pop();
        this._count--;
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
