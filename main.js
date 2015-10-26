var clickedSection = "";
var individualAlbum = "";
var homeAlbumHTML = "";
var singleHTML = "";



$(document).ready(function () {

$('section').first().addClass('active-section');
//**************BELOW IS FOR THE HOME PAGE****************

var homeAlbumTemplate = _.template($('#homeAlbumTmpl').html());
// console.log("home album template: ", homeAlbumTemplate);

_.each(home, function (currVal, idx, arr) {
    homeAlbumHTML += homeAlbumTemplate(currVal);
});
$('.allAlbums').html(homeAlbumHTML);

//*******************************************************
//*****************BELOW IS FOR ALBUM SELECTOR***********

// var singleTemplate = _.template($('#singleTmpl').html());
//
// _.each(thumbnails, function (currVal, idx, arr) {
//     console.log(currVal);
//     if(currVal.name === clickedSection) {
//       singleHTML += singleTemplate(currVal);
//     } else {
//       return;
//     }
//
//
// individualAlbum = thumbnails.filter(function(currItem) {
//   if(currItem.name === clickedSection){
//     return currItem;
//   } else {
//     return;
//   }
// });
// individualAlbum.forEach(function (currVal, idx, arr) {
//     singleHTML += singleTemplate(currVal);
// });
// $('.thumbs').html(singleHTML);

//**********BELOW IS FOR THE CLICK AND SHOW/HIDE*********

$('aside > li a').on('click', function (event) {
    event.preventDefault();
    clickedSection = "." + $(this).attr('rel');
    // console.log(event.target);
    // console.log("javascript", $(this));
    // console.log(clickedSection);


    // individualAlbum = thumbnails.filter(function(currVal) {

        // console.log(curVal.name === clickedSection);
        // if(clickedSection === currVal.name){
        //   console.log(currVal);
      //   }
      if(clickedSection === '.allAlbums') {
      $('.allAlbums').addClass('active-section');
      $('.thumbs').removeClass('active-section');
    } else {
      $('.thumbs').addClass('active-section');
      $('.allAlbums').removeClass('active-section');
    }
      // event.preventDefault();

      // });var singleTemplate = _.template($('#singleTmpl').html());
      //
      // _.each(thumbnails, function (currVal, idx, arr) {
      //     console.log(currVal);
          // if(currVal.name === clickedSection) {
          //   singleHTML += singleTemplate(currVal);
          // } else {
          //   return;
          // }
      //     singleHTML += singleTemplate(currVal);
      // });
      // $('.thumbs').html(singleHTML);

      // _.each(home, function (currVal, idx, arr) {
      //     homeAlbumHTML += homeAlbumTemplate(currVal);
      // });
      // $('.allAlbums').html(homeAlbumHTML);
      //
      //*******************************************************
      //*****************BELOW IS FOR ALBUM SELECTOR***********

      var singleTemplate = _.template($('#singleTmpl').html());

      _.each(thumbnails, function (currVal, idx, arr) {
          // console.log(currVal);
          if(currVal.name === clickedSection) {
            singleHTML += singleTemplate(currVal);
          } else {
            return;
          }
      });
      $('.thumbs').html(singleHTML);

          // return singleHTML += singleTemplate(currVal);
        //   return currVal;
        // } else {
        //   return;
        // }
        //
      //   return _.contains(currVal.name, clickedSection);

      // individualAlbum.forEach(function(currVal, idx, arr) {
      //   singleHTML += singleTemplate(currVal);

        // return currVal.name === clickedSection;
    // }) .forEach(function(individualAlbum) {
      // return singleHTML += singleTemplate(individualAlbum);
      //Stuck with what to do on this return
      //I need to somehow take these 3 photos and inject them into
      //singleTmpl as my info to display
      //MAYBE USE THIS BELOW - added Friday?

        // individualAlbum.forEach(function(currVal){
        // singleHTML += singleTemplate(currVal);
        });

        // $('.thumbs').html(singleHTML);
// });
// $('.thumbs').html(singleHTML);
// console.log(threePhotos);
  // console.log(clickedSection);
  // $(clickedSection).addClass('active-section');
  // $(clickedSection).siblings('section').removeClass('active-section');
// $('.allAlbums').html(homeAlbumHTML);


});
