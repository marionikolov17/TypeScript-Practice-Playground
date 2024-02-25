var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function tickets(input, sortField) {
    var outputArr = [];
    input.forEach(function (line) {
        var _a = line.split("|"), destination = _a[0], price = _a[1], status = _a[2];
        var ticket = new Ticket(destination, Number(price), status);
        outputArr.push(ticket);
    });
    if (sortField === "destination")
        outputArr = outputArr.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
    else if (sortField === "price")
        outputArr = outputArr.sort(function (a, b) { return a.price - b.price; });
    else if (sortField === "status")
        outputArr = outputArr.sort(function (a, b) { return a.status.localeCompare(b.status); });
    return outputArr;
}
console.log(tickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "status"));
