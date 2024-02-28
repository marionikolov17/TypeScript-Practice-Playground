var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (k, v) {
        this.key = k;
        this.value = v;
    };
    KeyValuePair.prototype.display = function () {
        console.log("key = ".concat(this.key, ", value = ").concat(this.value));
    };
    return KeyValuePair;
}());
var kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display();
