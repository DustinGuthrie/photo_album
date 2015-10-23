
var clickedSection = "";
var threePhotos = [];

$(document).ready(function () {


//**************THIS IS FOR THE HOME PAGE****************
var homeAlbumTemplate = _.template($('#homeAlbumTmpl').html());
// console.log("home album template: ", homeAlbumTemplate);
var homeAlbumHTML = "";
_.each(home, function (currVal, idx, arr) {
    homeAlbumHTML += homeAlbumTemplate(currVal);
});
$('.allAlbums').html(homeAlbumHTML);
//*******************************************************
//*****************THIS IS FOR ALBUM SELECTOR************
var singleTemplate = _.template($('#singleTmpl').html());
var singleHTML = "";
_.each(thumbnails, function (currVal, idx, arr) {
  // console.log(currVal);
    singleHTML += singleTemplate(currVal);
    // console.log("homeAlbumHTML: ", homeAlbumHTML);
});
// $('.thumbs').html(singleHTML);

$('aside li > a').on('click', function (event) {
  event.preventDefault();
   clickedSection = "." + $(this).attr('rel');
  // console.log("javascript", $(this));
      threePhotos = thumbnails.filter(function(curVal) {
        return curVal.name === clickedSection;
    });
      threePhotos.forEach(function(curVal) {
      singleHTML += singleTemplate(curVal);
    });
      //Stuck with what to do on this return
      //I need to somehow take these 3 photos and inject them into
      //singleTmpl as my info to display
      $('.thumbs').html(singleHTML);
});
// console.log(threePhotos);





  // console.log(clickedSection);
  $(clickedSection).addClass('active-section');
  $(clickedSection).siblings('section').removeClass('active-section');
});














// });
