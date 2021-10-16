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
// 

var tickets = [];

function Item(ref, type, img, price) {
  var tickets = {};
  tickets.ref = ref;
  tickets.type = type;
  tickets.price = price;
  tickets.img = img;
  return tickets;
}
//// transforme obj to html element //
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
    "</div><button class='buy'> buy</button></div>"
  );
}

var ticket1 = Item(
  "r001",
  "Music ticket",
  "./2duo/william-white-TZCppMjaOHU-unsplash.jpg",
  22
);
var ticket2 = Item(
  "r002",
  "Match ticket",
  "./2duo/piero-huerto-gago-2rjjnfdlwGY-unsplash.jpg",
  10
);
var ticket3 = Item("r003", "Match ticket", "./2duo/tiket.jfif", 15);
var ticket4 = Item(
  "r004",
  "Music ticket",
  "./2duo/Couverture-Nordo-16-Nov2-01.jpg",
  50
);
var ticket5 = Item(
  "r005",
  "OneManShow ticket",
  "./2duo/Couverture-Wajiha-22-Oct.eps-01-1024x577.jpg",
  40
);
var ticket6 = Item(
  "r006",
  "Music ticket",
  "./2duo/received_1076437333102496.jpg",
  35
);
var ticket7 = Item("r007", "Match ticket", "./2duo/match1.jpg", 12);
var ticket8 = Item("r008", "Music ticket", "./2duo/lotfi bouchnak.jfif", 40);
var ticket9 = Item(
  "r009",
  "OneManShow ticket",
  "./2duo/lofti abdelli_0.JPEG",
  25
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

console.log(tickets);

// for (var i = 0; i < tickets.length; i++) {
//   $(".container").append(prepare(tickets[i]));
// }
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

var music = function (tickets) {
  return filter(tickets, function (elem) {
    return elem.type === "Music ticket";
  });
};

var OneManShow = function (tickets) {
  return filter(tickets, function (elem) {
    return elem.type === "OneManShow ticket";
  });
};

var match = function (tickets) {
  return filter(tickets, function (elem, i) {
    return elem.type === "Match ticket";
  });
};

$("#event").click(function () {
  $(".demo").hide();
  $(".carousel-control-next-icon").hide();
  $(".carousel slide").hide();
  $(".carousel-control-prev").hide();
  $(".carousel-item").hide();
  $(".carousel-indicators").hide();
  $(".container").empty();
  for (var i = 0; i < tickets.length; i++) {
    $(".container").append(prepare(tickets[i]));
  }
  $(".buy").click(function () {
    counter++;
    var priceinstring = $(this).prev().text();
    totalprice = totalprice + Number(priceinstring);
    console.log(totalprice);
    $("#priceCo").html("<div>" + totalprice + "dt</div>");
  });
});
$("#musica").click(function () {
  $(".container").empty();
  for (var i = 0; i < music(tickets).length; i++) {
    $(".container").append(prepare(music(tickets)[i]));
  }
  $(".buy").click(function () {
    counter++;
    var priceinstring = $(this).prev().text();
    totalprice = totalprice + Number(priceinstring);
    console.log(totalprice);
    $("#priceCo").html("<div>" + totalprice + "dt</div>");
  });
});
$("#ah1").click(function () {
  $(".container").empty();
  for (var i = 0; i < match(tickets).length; i++) {
    $(".container").append(prepare(match(tickets)[i]));
  }
  $(".buy").click(function () {
    counter++;
    var priceinstring = $(this).prev().text();
    totalprice = totalprice + Number(priceinstring);
    console.log(totalprice);
    $("#priceCo").html("<div>" + totalprice + "dt</div>");
  });
});
$("#ah").click(function () {
  $(".container").empty();
  for (var i = 0; i < OneManShow(tickets).length; i++) {
    $(".container").append(prepare(OneManShow(tickets)[i]));
  }
  $(".buy").click(function () {
    counter++;
    var priceinstring = $(this).prev().text();
    totalprice = totalprice + Number(priceinstring);
    console.log(totalprice);
    $("#priceCo").html("<div>" + totalprice + "dt</div>");
  });
});

///cart fanction

var counter = 0;
var totalprice = 0;
