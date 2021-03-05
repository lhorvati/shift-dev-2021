$(function() {

    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    
    //     if (scroll >= 20) {
    //         $(".navBar").addClass("scroll");
    //     } else {
    //         $(".navBar").removeClass("scroll");
    //     }
    // });

    /* TOP NAVIGATION */
    $(".nav__link").click(function() {
        $(".nav__link").removeClass("active");
        $(this).addClass("active");
    });


    /* MOBILE NAVIGATION */
    $(".navBar__btn").click(function() {
        $(".navBar__nav").addClass("slide");
    });
    $(".navBar__close").click(function() {
        $(".navBar__nav").removeClass("slide");
    });
    $(".nav__link").click(function() {
        $(".navBar__nav").removeClass("slide");
    });
    $(".btn.gradient").click(function() {
        $(".navBar__nav").removeClass("slide");
    });



    /* MOBILE NAV MORE */
    $(".navMobile__name").click(function() {
        $(this).next().toggle("show");
        $(this).toggleClass("navMobile__name--active")
    });





    /* SMALL NAV1 */
    $(".small-nav1__item").click(function() {
        $(".small-nav1__item").removeClass("active");
        $(this).addClass("active");

        $(".speakers-content").removeClass("show");
        if (this.id === "speakers-mainLink") {
            $("#speakers-main").addClass("show");
        } else if (this.id === "speakers-areaLink") {
            $("#speakers-area").addClass("show");
        }
    });

    /* SMALL NAV2 */
    $(".small-nav2__item").click(function() {
        $(".small-nav2__item").removeClass("active");
        $(this).addClass("active");

        $(".agenda-content1").removeClass("show");
        if (this.id === "day1-mainLink") {
            $("#day1-main").addClass("show");
        } else if (this.id === "day1-areaLink") {
            $("#day1-area").addClass("show");
        }
    });

    /* SMALL NAV3 */
    $(".small-nav3__item").click(function() {
        $(".small-nav3__item").removeClass("active");
        $(this).addClass("active");

        $(".agenda-content2").removeClass("show");
        if (this.id === "day2-mainLink") {
            $("#day2-main").addClass("show");
        } else if (this.id === "day2-areaLink") {
            $("#day2-area").addClass("show");
        }
    });



    /* SPEAKER MORE */
    $(".speaker__more-btn").click(function() {
        $(this).siblings(".speaker__more").toggle("show");

        var x = $(this).text();
        if (x === "Read more") {
            $(this).text("Read less");
        } else {
            $(this).text("Read more");
        }


    });
    $(".speaker__image").click(function() {
        $(this).siblings(".speaker__more").toggle("show");

        var z = $(this).siblings(".speaker__more-btn");
        var x = z.text();

        if (x === "Read more") {
            z.text("Read less");
        } else {
            z.text("Read more");
        }

    });



    // HERO BUTTONS
    $("#downloadApp").click(function() {
        $("#downloadPopup").slideToggle()
    })

    $("#connectVirtually").click(function() {
        $("#connectPopup").slideToggle()
    })





    /* AGENDA MORE */
    // $(".agenda__list-item").click(function() {
    //     $(this).find('.agenda__more').toggle("show");
    // });

    $(".agenda__item").click(function(){
        $(this).find(".lead").toggle("show");
    })



    /* AGENDA MOBILE NAV */
    // $(".agenda-nav__btn").click(function() {
    //     $(".agenda").removeClass("show");
    //     var x = $(this).attr('target');
    //     if (x === "an-left") {
    //         $("#day1").addClass("show");
    //     } else {
    //         $("#day2").addClass("show");
    //     }
    // });

    $(".btn-day").click(function() {
        $(".btn-day").removeClass("active")
        var x = $(this).attr("target");

        if (x === "an-left") {
            $(".agenda-content-wrap").removeClass("slideLeft");
            $(".schedule-date").text("14 September 2020");
            $(".btn-day1").addClass("active")
        } else {
            $(".agenda-content-wrap").addClass("slideLeft");
            $(".schedule-date").text("15 September 2020");
            $(".btn-day2").addClass("active")
        }
    });




    /* FOOTER EVENTS MORE */
    $(".footer-previous__item").click(function() {
        $(this).find('.footer-previous__box').toggle("show");
        $(this).find('.footer-previous__name').toggleClass("footer-previous__name--active")
    });




    /* SLIDESHOW */
    $(".previousMenu__item").click(function() {
        $(".previousMenu__item").removeClass("previousMenu__item--active");
        $(this).addClass("previousMenu__item--active");
        
        // slideshow - show/hide
        $(".previousList").removeClass("previousList--active");
        if (this.id === "previous-btn2020") {
            $("#previous2020").addClass("previousList--active");
        } else if (this.id === "previous-btn2019") {
            $("#previous2019").addClass("previousList--active");
        } else if (this.id === "previous-btn2018") {
            $("#previous2018").addClass("previousList--active");
        } else if (this.id === "previous-btn2017") {
            $("#previous2017").addClass("previousList--active");
        } else if (this.id === "previous-btn2016") {
            $("#previous2016").addClass("previousList--active");
        } else if (this.id === "previous-btn2015") {
            $("#previous2015").addClass("previousList--active");
        } else if (this.id === "previous-btn2014") {
            $("#previous2014").addClass("previousList--active");
        } else if (this.id === "previous-btn2013") {
            $("#previous2013").addClass("previousList--active");
        } else if (this.id === "previous-btn2012") {
            $("#previous2012").addClass("previousList--active");
        }

        // slideshow buttons - show/hide
        $(".previousMenu__buttons").removeClass("previousMenu__buttons--active");
        if (this.id === "previous-btn2020") {
            $("#pms-btn2020").addClass("previousMenu__buttons--active");
        } else if (this.id === "previous-btn2019") {
            $("#pms-btn2019").addClass("previousMenu__buttons--active");
        } else if (this.id === "previous-btn2018") {
            $("#pms-btn2018").addClass("previousMenu__buttons--active");
        } else if (this.id === "previous-btn2017") {
            $("#pms-btn2017").addClass("previousMenu__buttons--active");
        } else if (this.id === "previous-btn2016") {
            $("#pms-btn2016").addClass("previousMenu__buttons--active");
        } else if (this.id === "previous-btn2015") {
            $("#pms-btn2015").addClass("previousMenu__buttons--active");
        } else if (this.id === "previous-btn2014") {
            $("#pms-btn2014").addClass("previousMenu__buttons--active");
        } else if (this.id === "previous-btn2013") {
            $("#pms-btn2013").addClass("previousMenu__buttons--active");
        } else if (this.id === "previous-btn2012") {
            $("#pms-btn2012").addClass("previousMenu__buttons--active");
        }
    });





    /* CODE OF CONDUCT OPEN/CLOSE */
    $("#codeOfConduct__link").click(function() {
        $("#codeOfconduct").addClass("show");
    });
    $("#codeOfconduct__close").click(function() {
        $("#codeOfconduct").removeClass("show");
    });


    /* ATTENDEE script */
    $("#attendees__link").click(function() {
        $("#attendees").addClass("show");
    });
    $("#attendees__close").click(function() {
        $("#attendees").removeClass("show");
    });





    /* SMOOTH SCROLL TO ANCHOR */
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


    // Adding css to fade in hero on load
    $(".hero__bg-svg").css({opacity:1,});
    $(".heroBox").css({opacity:1,});



    // $(".winfree").click(function(){
    //     var firstName = $("#mce-FNAME").val()
    //     var lastName = $("#mce-LNAME").val()
    //     var jobTitle = $("#mce-MMERGE5").val()
    //     var companyName = $("#mce-MMERGE6").val()
    //     var email = $("#mce-EMAIL").val()

    //     if(email.length < 5 && !email.includes("@") && !email.includes(".")) {
    //         event.preventDefault()
    //     }
    

    // });


});







// Sponsor - Contact Form
$(document).ready(function() {
    $(".submit").click(function(event){

        var firstName = $(".firstName").val()
        var lastName = $(".lastName").val()
        var jobTitle = $(".jobTitle").val()
        var jobFunction = $(".jobFunction").val()
        var companyName = $(".companyName").val()
        var companyWebsite = $(".companyWebsite").val()
        var email = $(".email").val()
        var phone = $(".phone").val()
        var attending = $("#attending").is(":checked")
        var sponsoring = $("#sponsoring").is(":checked")
        var subscribe = $("#subscribe").is(":checked")
        var terms = $("#terms").is(":checked")

        var status = $(".sponsorForm__status")
        status.empty()


        if(email.length < 5 && !email.includes("@") && !email.includes(".")) {
            event.preventDefault()
            status.append("<p>Email is not valid</p>")
        }
        if(attending === false && sponsoring === false) {
            event.preventDefault()
            status.append("<p>Please select what are you interested in</p>")
        }
        /* if(subscribe === false) {
            event.preventDefault()
            status.append("<p>You have to subscribe</p>")
        }
        if(terms === false) {
            event.preventDefault()
            status.append("<p>You have to agree to our Terms and Conditions</p>")
        } */

    })




    // $(document).ready(function(){
    //     $('#sponsorsSlider2').slick({
    //       slidesToShow: 1,
    //       slidesToScroll: 3,
    //       autoplay: true,
    //       autoplaySpeed: 6000,
    //       variableWidth: true,
    //       prevArrow: $('.btn-left2'),
    //       nextArrow: $('.btn-right2'),
    //       speed: 2200,
    //       responsive: [
    //         {
    //           breakpoint: 850,
    //           settings: "unslick"
    //         }
    //       ]
    //     });
    //   });
  
    //   $(document).ready(function(){
    //     $('#sponsorsSlider1').slick({
    //       slidesToShow: 1,
    //       slidesToScroll: 3,
    //       autoplay: true,
    //       autoplaySpeed: 6000,
    //       variableWidth: true,
    //       prevArrow: $('.btn-left1'),
    //       nextArrow: $('.btn-right1'),
    //       speed: 2200,
    //       responsive: [
    //         {
    //           breakpoint: 850,
    //           settings: "unslick"
    //         }
    //       ]
    //     });
    //   });
  
  
    //   $(document).ready(function(){
    //     $('#sponsorsSlider6').slick({
    //       slidesToShow: 1,
    //       slidesToScroll: 3,
    //       autoplay: true,
    //       autoplaySpeed: 6000,
    //       variableWidth: true,
    //       prevArrow: $('.btn-left6'),
    //       nextArrow: $('.btn-right6'),
    //       speed: 2200,
    //       responsive: [
    //         {
    //           breakpoint: 850,
    //           settings: "unslick"
    //         }
    //       ]
    //     });
    //   });

});