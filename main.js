var clickedSection = "";
var individualAlbum = "";
var homeAlbumHTML = "";


$(document).ready(function () {
//****Refactor starts here******
//     albumPage.init();
//   });
//
//   var albumPage = {
//     init: function(){
//       albumPage.styling();
//       albumPage.events();
//     },
//     events: function() {
//     $('.allAlbums').on('click',function (event) {
//       $(this).closest('article').remove();
//     });
//     $('aside > li a').on('click', function (event) {
//         event.preventDefault();
//         var element = this;
//         albumPage.showActiveSection(element);
//     });
//   },
//   styling: function(){
//     albumPage.loadAlbums();
//   },
//   loadAlbums: function() {
//     var homeAlbumTmpl = "";
//     _.each(home, function (currVal, idx, arr) {
//         homeAlbumHTML += albumPage.loadTemplate('homeAlbumTmpl', currVal);
//       });
//       $('.allAlbums').html(homeAlbumHTML);
//   },
//   showActiveSection: function(clickedThingy) {
//    var clickedSection = "." + $(clickedThingy).attr('rel');
//    $(clickedSection).addClass('active-section');
//    $(clickedSection).siblings('section').removeClass('active-section');
//  },
//  getTemplate: function(name) {
//   return _.template(templates[name]);
// },
// loadTemplate: function(name, val) {
//   var tmpl = bitterPage.getTemplate(name);
//   return tmpl(val);
// },
// };
//***Refactor Ends here...but not working

$('section').first().addClass('active-section');
//**************BELOW IS FOR THE HOME PAGE****************

var homeAlbumTemplate = _.template($('#homeAlbumTmpl').html());
_.each(home, function (currVal, idx, arr) {
    homeAlbumHTML += homeAlbumTemplate(currVal);
});
$('.allAlbums').html(homeAlbumHTML);

//**********BELOW IS FOR THE NAV CLICK AND SHOW/HIDE*********
$('aside > li a').on('click', function (event) {
    event.preventDefault();
    clickedSection = "." + $(this).attr('rel');
      if(clickedSection === '.allAlbums') {
      $('.allAlbums').addClass('active-section');
      $('.thumbs').removeClass('active-section');
    } else {
      $('.thumbs').addClass('active-section');
      $('.allAlbums').removeClass('active-section');
    }

//****Below is for the individual albums*********//
      var singleTemplate = _.template($('#singleTmpl').html());

      _.each(thumbnails, function (currVal, idx, arr) {
          // console.log(currVal);
          var singleHTML = "";

          if(currVal.name === clickedSection) {
            singleHTML += singleTemplate(currVal);
          } else {
            return;
          }
          $('.thumbs').html(singleHTML);

      });
  });
      $('section img').on('click', function (event) {
          event.preventDefault();
          clickedSection = $(this).attr('alt');
          var singleTemplate = _.template($('#singleTmpl').html());

          _.each(thumbnails, function (currVal, idx, arr) {
              var singleHTML = "";
              if(currVal.name === clickedSection) {
                singleHTML += singleTemplate(currVal);
              } else {
                return;
              }
          $('.thumbs').addClass('active-section');
          $('.allAlbums').removeClass('active-section');
          $('.thumbs').html(singleHTML);

        });
            });


//*****image zoom From StackOverflow Gaby aka G. Petrioli********
//****made some modifications
$('.thumbs img').on('click', function (event) {
            var scale = 150/100;
            var pos = $(this).offset();
            var clickX = event.pageX - pos.left;
            var clickY = event.pageY - pos.top;
            var container = $(this).parent().get(0);

            $(this).css({
                            width: this.width*scale,
                            height: this.height*scale
                        });

            container.scrollLeft = ($(container).width() / -2 ) + clickX * scale;
            container.scrollTop = ($(container).height() / -2 ) + clickY * scale;
        }
    );

});
