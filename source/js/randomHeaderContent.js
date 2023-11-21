$(document).ready(function() {

    // Function to get a random element from the hidden array
      function getRandomElement() {
       var spans = $('#hiddenHeaderContentArray span');
       var randomIndex = Math.floor(Math.random() * spans.length);
       return spans.eq(randomIndex).text();
   }

   // Fill the span element with the randomly selected element
   var spanElement = $('#targetSpan');
   spanElement.text(getRandomElement());
   console.log("das");

});