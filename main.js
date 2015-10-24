var clickedSection = " ";
var individualAlbum = " ";

$(document).ready(function () {

//**************BELOW IS FOR THE HOME PAGE****************

var homeAlbumTemplate = _.template($('#homeAlbumTmpl').html());
// console.log("home album template: ", homeAlbumTemplate);
var homeAlbumHTML = "";

_.each(home, function (currVal, idx, arr) {
    homeAlbumHTML += homeAlbumTemplate(currVal);
});
$('.allAlbums').html(homeAlbumHTML);

//*******************************************************
//*****************BELOW IS FOR ALBUM SELECTOR***********

var singleTemplate = _.template($('#singleTmpl').html());
var singleHTML = "";

// _.each(thumbnails, function (currVal, idx, arr) {
    // console.log(currVal);
    // singleHTML += singleTemplate(currVal);
// });
// $('.thumbs').html(singleHTML);

//**********BELOW IS FOR THE CLICK AND SHOW/HIDE*********

$('aside li > a').on('click', function (event) {
    event.preventDefault();
    clickedSection = "." + $(this).attr('rel');
    // console.log("javascript", $(this));
    individualAlbum = thumbnails.filter(function(curVal) {
        // console.log(curVal.name === clickedSection);
        if(clickedSection === curVal.name){
          // return singleHTML += singleTemplate(curVal);
          return curVal;
        } else {
          return;
        }
        // return curVal.name === clickedSection;
    // }) .forEach(function(individualAlbum) {
    //   return singleHTML += singleTemplate(individualAlbum);
      //Stuck with what to do on this return
      //I need to somehow take these 3 photos and inject them into
      //singleTmpl as my info to display
      //MAYBE USE THIS BELOW - added Friday?
        individualAlbum.forEach(function(currVal){
        singleHTML += singleTemplate(currVal);
        });
        //$('thumbs').html(singleHTML);
});
$('.thumbs').html(singleHTML);
// console.log(threePhotos);
  // console.log(clickedSection);
  $(clickedSection).addClass('active-section');
  $(clickedSection).siblings('section').removeClass('active-section');
});


});
