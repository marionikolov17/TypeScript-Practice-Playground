class Ticket {
  destination: string;
  price: number;
  status: string;

  constructor(destination: string, price: number, status: string) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

function tickets(input: string[], sortField: string) {
    let outputArr: Ticket[] = [];

    input.forEach(line => {
        let [destination, price, status] = line.split("|");
        let ticket: Ticket = new Ticket(destination, Number(price), status);
        outputArr.push(ticket);
    });

    if (sortField === "destination")
        outputArr = outputArr.sort((a, b) => a.destination.localeCompare(b.destination));
    else if (sortField === "price")
        outputArr = outputArr.sort((a, b) => a.price-b.price);
    else if (sortField === "status")
        outputArr = outputArr.sort((a, b) => a.status.localeCompare(b.status));

    return outputArr;
}

console.log(tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
));
