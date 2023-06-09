$(document).ready(function() {
  $("#nav_list a").click(function(event) {
    event.preventDefault(); 

    var speakerTitle = $(this).attr("title");
    
    // Build the name of the JSON file based on the speaker's title
    var jsonFileName = "json_files/" + speakerTitle + ".json";
    
    // Clear the elements 
    $("main").empty();

    // Retrieve the JSON data for the speaker
    $.getJSON(jsonFileName, function(data) {
      var speaker = data.speakers[0]; 
      var speakerHtml = '<h1>' + speaker.title + '</h1>';
      speakerHtml += '<img src="' + speaker.image + '">';
      speakerHtml += '<h2>' + speaker.month + '<br>' + speaker.speaker + '</h2>';
      speakerHtml += '<p>' + speaker.text + '</p>';

      // Append the speaker HTML elements 
      $("main").append(speakerHtml);
    });
  });
});
