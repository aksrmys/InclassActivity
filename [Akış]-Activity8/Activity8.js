$(document).ready(function() {
    var programmingLanguages = [
        "ActionScript","AppleScript","Asp","JavaScript", "Lisp", "Perl", "PHP", "Python"
    ];
    $("#programming-language").autocomplete({
      source: programmingLanguages
    });
    
    $("#birthday").datepicker();
  });