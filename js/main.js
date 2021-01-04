(function ($) {

  "use strict";

  // sidebar menu
  $(".sidebar-menu li").click(function () {
    $(".sidebar-menu li").removeClass("active-theme");
    $(this).addClass("active-theme");
    $(this).toggleClass("active");
  });

  // menu toggle
  $(".menu-toggle").on('click', function () {
    $('#main-wrapper').toggleClass("active");
  });

  if ($(window).width() < 768) {
    $(window).click(function () {
      $('#main-wrapper').removeClass("active");
    });

    $(".menu-toggle").click(function (e) {
      e.stopPropagation();
    });

    $(".sidebar").click(function (e) {
      e.stopPropagation();
    });
  }


  //datatable js
  $('#application-completed-table').DataTable({
    responsive: {
      details: {
        display: $.fn.dataTable.Responsive.display.modal({
          header: function (row) {
            var data = row.data();
            return 'Details for ' + data[0] + ' ' + data[1];
          }
        }),
        renderer: $.fn.dataTable.Responsive.renderer.tableAll()
      }
    },
    select: {
      style: 'multi',
    },
  });











})(jQuery);