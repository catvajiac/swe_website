var now = new Date();

var MisiolekOfficeHrs = function(date){
    if ((date.getDay == 1 && date.getHours >=11 & date.getHours <13))||(date.getDay == 3 && date.getHours >=11 && date.getHours<12){
    return "Office hours now!"
    }
    else {
    return "sorry"}};

var hello = function(){
    alert("hello")};