//var arr = [
// "./2duo/william-white-TZCppMjaOHU-unsplash.jpg",
// "./2duo/piero-huerto-gago-2rjjnfdlwGY-unsplash.jpg",
// "./2duo/tiket.jfif",
//"./2duo/Couverture-Nordo-16-Nov2-01.jpg",
//"./2duo/Coaching-théatral-1908-1024x1024.jpg",
//"./2duo/Couverture-Wajiha-22-Oct.eps-01-1024x577.jpg",
//"./2duo/received_1076437333102496.jpg",
//"./2duo/match1.jpg",
//"./2duo/WhatsApp-Image-2021-08-06-at-10.20.09.JPEG",
// "./2duo/lofti abdelli_0.JPEG",
// "./2duo/lotfi bouchnak.jfif",
// "./2duo/243706567_629254011566720_81134159015429546_n.jpg",
//];

// $(document).ready(function () {
//   display();
// });

var tickets = [];

function Item(ref, type, img, price) {
  var tickets = {};
  tickets.ref = ref;
  tickets.type = type;
  tickets.price = price;
  tickets.img = img;
  return tickets;
}

function prepare(ticket) {
  return (
    "<div class='item'><div class='ref'> ref : " +
    ticket.ref +
    "</div> <div class='type'>" +
    ticket.type +
    '</div> <div><img class="container" src="' +
    ticket.img +
    '"</div> <div class="price">' +
    ticket.price +
    "</div></div>"
  );
}

var ticket1 = Item(
  "r001",
  "music",
  "./2duo/william-white-TZCppMjaOHU-unsplash.jpg",
  "60$"
);
var ticket2 = Item(
  "r002",
  "music",
  "./2duo/piero-huerto-gago-2rjjnfdlwGY-unsplash.jpg",
  "60$"
);
var ticket3 = Item("r003", "music", "./2duo/tiket.jfif", "60$");
var ticket4 = Item(
  "r004",
  "music",
  "./2duo/Couverture-Nordo-16-Nov2-01.jpg",
  "60$"
);
var ticket5 = Item(
  "r005",
  "OneManShow",
  "./2duo/Couverture-Wajiha-22-Oct.eps-01-1024x577.jpg",
  "60$"
);
var ticket6 = Item(
  "r006",
  "music",
  "./2duo/received_1076437333102496.jpg",
  "60$"
);
var ticket7 = Item("r007", "music", "./2duo/match1.jpg", "12$");
var ticket8 = Item("r008", "oneManShow", "./2duo/lotfi bouchnak.jfif", "40$");
var ticket9 = Item("r009", "music", "./2duo/lofti abdelli_0.JPEG", "25$");
var ticket10 = Item(
  "r011",
  "music",
  "./2duo/243706567_629254011566720_81134159015429546_n.jpg",
  "60$"
);
tickets.push(ticket1);
tickets.push(ticket2);
tickets.push(ticket3);
tickets.push(ticket4);
tickets.push(ticket5);
tickets.push(ticket6);
tickets.push(ticket7);
tickets.push(ticket8);
tickets.push(ticket9);
tickets.push(ticket10);
console.log(tickets);
for (var i = 0; i < tickets.length; i++) {
  $(".container").append(prepare(tickets[i]));
}
