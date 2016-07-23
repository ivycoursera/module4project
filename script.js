
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var k in names) {

    var firstLetter = (names[k].charAt(0)).toLowerCase();

    if (firstLetter == "j") {
      byeSpeaker.speak(names[k])
    } else {
      helloSpeaker.speak(names[k])
    }
  }
})();
