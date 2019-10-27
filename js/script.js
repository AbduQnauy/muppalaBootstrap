$(document).ready(() => {
      // CAROUSEL
      $("#mycarousel").carousel({ interval: 2000 });
      $("#carouselButton").hover(() => {
        if ($("#carouselButton").children('i').hasClass('fa-pause')) {
          $("#carouselButton").carousel('pause')
          $("#carouselButton").children('i').removeClass('fa-pause')
          $("#carouselButton").children('i').addClass('fa-play')
        }
        else if ($("#carouselButton").children('i').hasClass('fa-play')) {
          $("#carouselButton").carousel('cycle')
          $("#carouselButton").children('i').removeClass('fa-play')
          $("#carouselButton").children('i').addClass('fa-pause')
        }
      });

      // ABSTRACT FUNCTION FOR HANDLE MODAL  
      const handleModal = (triggerEl, modalEl) => {
        $(triggerEl).click(() => {
          $(modalEl).modal('toggle')
        })
      }
      // LOGIN
      handleModal('#login', '#loginModal')
      // RESERVE TABLE
      handleModal('#reserveButton', '#reserveModal')
    })