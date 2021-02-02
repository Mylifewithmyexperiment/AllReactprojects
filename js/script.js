$(document).ready(function () {

    $(".currency").html("&#165;");
    $(".currency").html("&#36;");

    if ($(".infoblock .cartdetails-section.right table tr td .totalgroup").hasClass("hide_value")) {
        $(".loader").delay(1000).fadeOut("slow");
        setTimeout(function () {
            $(".infoblock .cartdetails-section.right table tr td .totalgroup").removeClass("hide_value");
        }, 1500);
    }

    $(".dropdown:not(.mbps,.ddlFloating,.nav-item) .dropdown-menu .dropdown-item").click(function () {
        var selectText = $(this).text();
        $(this).parent().find(".dropdown-item").removeClass("active");
        $(this).addClass("active");
        $(this).parent().prev().html(selectText);
    });
    $(".dropdown.mbps .dropdown-menu .dropdown-item").click(function () {
        var selectText = $(this).text();
        $(this).parent().find(".dropdown-item").removeClass("active");
        $(this).addClass("active");
        $(this).parent().prev().find(".mbpsValue").html(selectText);
    });

    // Floating select Dropdown
    $(".dropdown.ddlFloating .dropdown-menu .dropdown-item").click(function () {
        var selectText = $(this).text();
        $(this).parent().find(".dropdown-item").removeClass("active");
        $(this).addClass("active");
        $(this).parent().prev().find(".title").css("margin-top", "-15px");
        $(this).parent().prev().find(".value").html(selectText);
    });


    $(".steps_section .selecteditems").slick({
        dots: false,
        infinite: false,
        slidesToShow: 6,
        responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
                    },
            {
                breakpoint: 1641,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
                    },
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
                    },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
                    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
                    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
                    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
                    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
    });
    var onetime = 0;
    var recurring = 0;
    $(".steps_section .tab-content .tab-pane .card .btnGroups .btn.sub_btn").click(function () {
        var cardImg = $(this).parent().parent().parent().parent().find(".cardimg").html();
        var category = $(this).parent().find(".category").text();
        var cardTitle = $(this).parent().parent().parent().parent().find(".cardimg .card-img").attr("alt") + " " + $(this).text();
        var price = $(this).parent().parent().parent().parent().find(".card-body .card-title span").text();
        var slideIndex = 0;
        slideIndex++;
        $('.steps_section .selecteditems').slick('slickAdd', '<div class="inner p-0 alert alert-dismissible fade show"><div class="card"><div class="row no-gutters"><div class="col-lg-4 col-md-3"><div class="cardimg">' + cardImg + '</div></div><div class="col-lg-8 col-md-6"><div class="card-body"><span aria-hidden="true" data-dismiss="alert"><img src="./images/close.png" class="img-close" alt="close"></span><h5 class="card-title">' + cardTitle + '<span class="pl-2">(' + category + ')</span></h5><hr class="bg-white"><p class="card-text">PAY ON CHECKOUT</p><h5 class="card-price">¥ <span>' + price + '</span></h5> </div></div> </div> </div></div>');

        //        if (onetime > 0) {
        //            onetime = parseInt($(".steps_section .minicart ul li span.price.onetime").text());
        //        }
        onetime = onetime + parseInt(price);
        $(".steps_section .minicart ul li span.price.onetime").html(onetime);

        $('.steps_section .selecteditems .slick-slide .card .card-body .img-close').click(function () {
            var removeItems = $(this).parent().siblings(".card-price").find("span").text();
            //var totaloneTime = onetime;
            //onetime = onetime - parseInt(removeItems)
            //$(".steps_section .minicart ul li span.price.onetime").html(onetime);            
            //onetime = onetime - parseInt(removeItems);
            //$(".steps_section .minicart ul li span.price.onetime").html(onetime);
        });

    });

    $(".steps_section .tab-content .tab-pane .card .btnGroups .btn.btn_recurring").click(function () {
        var cardImg = $(this).parent().parent().parent().parent().find(".cardimg").html();
        var category = $(this).parent().find(".category").text();
        var cardTitle = $(this).parent().parent().parent().parent().find(".cardimg .card-img").attr("alt") + " " + $(this).text();
        var price = $(this).parent().parent().parent().parent().find(".card-body .card-title span").text();
        var slideIndex = 0;
        slideIndex++;

        if ($(this).hasClass("btn_free")) {
            $('.steps_section .selecteditems').slick('slickAdd', '<div class="inner p-0 alert alert-dismissible fade show"><div class="card"><div class="row no-gutters"><div class="col-lg-4 col-md-3"><div class="cardimg">' + cardImg + '</div></div><div class="col-lg-8 col-md-6"><div class="card-body"><span aria-hidden="true" data-dismiss="alert"><img src="./images/close.png" class="img-close" alt="close"></span><h5 class="card-title">' + cardTitle + '<span class="pl-2">(' + category + ')</span></h5><hr class="bg-white"><p class="card-text">RECURRING</p><h5 class="card-price">FREE</h5> </div></div> </div> </div></div>');
        } else {
            $('.steps_section .selecteditems').slick('slickAdd', '<div class="inner p-0 alert alert-dismissible fade show"><div class="card"><div class="row no-gutters"><div class="col-lg-4 col-md-3"><div class="cardimg">' + cardImg + '</div></div><div class="col-lg-8 col-md-6"><div class="card-body"><span aria-hidden="true" data-dismiss="alert"><img src="./images/close.png" class="img-close" alt="close"></span><h5 class="card-title">' + cardTitle + '<span class="pl-2">(' + category + ')</span></h5><hr class="bg-white"><p class="card-text">RECURRING</p><h5 class="card-price">¥ ' + price + '</h5> </div></div> </div> </div></div>');

            recurring = recurring + parseInt(price);
            $(".steps_section .minicart ul li span.price.recurring").html(recurring);
        }

        $('.steps_section .selecteditems .slick-slide .card .card-body .img-close').on('click', function () {
            //alert();
        });

    });


    $("#mainheader .navbar-nav li.dropdown.drop-myaccount .dropdown-menu h3").click(function () {
        $(this).next().addClass("show");
        $(".drop-myaccount").addClass("show");
    });

    /*$(".steps_section .tab-content .tab-pane .card.software").click(function () {
        $(".steps_section .tab-content .tab-pane .card.software").hide();
        $(".steps_section .tab-content .tab-pane .card.subsoftware").show();
    });
    $(".steps_section .tab-content .tab-pane .card.application").click(function () {
        $(".steps_section .tab-content .tab-pane .card.application").hide();
        $(".steps_section .tab-content .tab-pane .card.subapplication").show();
    });*/
    $('.dropdown-submenu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parent().parent('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        return false;
    });
    $(".steps_section #v-pills-tab .nav-link").click(function () {
        $(".steps_section #v-pills-tab .nav-link").removeClass("select");
        $(".steps_section #v-pills-tab .nav-link").each(function (index, element) {
            // element == this
            $(element).addClass("select");

            if ($(this).is(".active")) {
                $(this).removeClass("select");
            }
        });
    });
    $('.selectGroup input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
            console.log("Checkbox is checked.");
        } else {
            $(this).parent().parent().removeClass("selectbtn");
        }

    });
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $(".tab-content .tab-pane").length;

    $(".next").click(function () {
        /*$(".loader").removeAttr("style");
        $(".loader").siblings().addClass("d-none");*/

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $(".steps_section #v-pills-tab .nav-link").eq($(".tab-content .tab-pane").index(next_fs)).addClass("active");

        //Add Class Select
        $(".steps_section #v-pills-tab .nav-link").eq($(".tab-content .tab-pane").index(current_fs)).addClass("select");

        //show the next fieldset
        next_fs.addClass("show active");
        current_fs.removeClass("show active");

        //show the previous fieldset
        next_fs.show();

        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });

        $(this).parent().removeClass("active show");
        $(this).parent().next().addClass("active show");

        /*$(".loader").delay(2000).fadeOut("slow");

        setTimeout(function () {
            $(".loader").siblings().removeClass("d-none");
        }, 2500);*/

        if ($("#v-pills-Ordersummary,#v-pills-makepayment,#v-pills-orderConfirmation").hasClass("show active")) {
            $(".steps_section.selected_steps").addClass("d-none");
        } else {
            $(".steps_section.selected_steps").removeClass("d-none");
        }

    });

    /*$("#v-pills-enode .loader").delay(2000).fadeOut("slow");

    setTimeout(function () {
        $("#v-pills-enode .loader").siblings().removeClass("d-none");
    }, 2500);*/

    $(".prev").click(function () {
        /*$(".loader").removeAttr("style");
        $(".loader").siblings().addClass("d-none");*/

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove Class Active
        $(".steps_section #v-pills-tab .nav-link").eq($(".tab-content .tab-pane").index(previous_fs)).removeClass("select").addClass("active");

        //Add Class Select
        $(".steps_section #v-pills-tab .nav-link").eq($(".tab-content .tab-pane").index(current_fs)).removeClass("select active");

        //show the previous fieldset
        previous_fs.show();

        //show the previous fieldset
        previous_fs.addClass("show active");
        current_fs.removeClass("show active");

        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });

        $(this).parent().removeClass("active show");
        $(this).parent().prev().addClass("active show");

        /*$(".loader").delay(2000).fadeOut("slow");

        setTimeout(function () {
            $(".loader").siblings().removeClass("d-none");
        }, 2500);*/

        if ($("#v-pills-Ordersummary,#v-pills-makepayment,#v-pills-orderConfirmation").hasClass("show active")) {
            $(".steps_section.selected_steps").addClass("d-none");
        } else {
            $(".steps_section.selected_steps").removeClass("d-none");
        }

    });

    $(".steps_section .tab-content .tab-pane .makePayment .btn-makepayment").click(function () {
        $(".loader").delay(2000).fadeOut("slow");
        //$("#overlayer").delay(2000).fadeOut("slow");
        $("#v-pills-makepayment .next").trigger('click');
        setTimeout(function () {
            $(".orderConfirmation").removeClass("d-none");
        }, 2500);
        $("#mainheader .navbar-nav li a.cart span,.steps_section .minicart ul li span.price.onetime,.steps_section .minicart ul li span.price.recurring").text("0");
        $(".steps_section .minicart").addClass("d-none");

    });

    $('.myaccount .accordion .card-body .nav-tabs .nav-item .nav-link').on('click', function (e) {
        $(".myaccount .accordion .card-body .nav-tabs .nav-item .nav-link").removeClass("active");
        e.preventDefault();
        $(this).tab('show');
    });
    $(".myaccount .tab-content .tab-pane#users .user .user_head .add_user").click(function () {
        $(".myaccount .tab-content .tab-pane#users .user").addClass("d-none");
        $(".myaccount .tab-content .tab-pane#users .createuser").removeClass("d-none");
    });
    $(".myaccount .tab-content .tab-pane#users .createuser .btn-cancel").click(function () {
        $(".myaccount .tab-content .tab-pane#users .user").removeClass("d-none");
        $(".myaccount .tab-content .tab-pane#users .createuser").addClass("d-none");
    });
    $(".dropdown.qty .dropdown-menu .dropdown-item").click(function () {
        var qty = $(this).text();
        var totalOnetime = $("#totalsingleonetime span").text();
        var totalrecurring = $("#totalsingleRecurring span").text();
        //alert(totalOnetime, totalrecurring);
        var no_totalOnetime = parseInt(qty) * parseFloat(totalOnetime);
        var no_totalrecurring = parseInt(qty) * parseFloat(totalrecurring);

        $("#totalonetime span").html(no_totalOnetime.toFixed(2));
        $("#subtotalafterselectsiteqty span").html(no_totalOnetime.toFixed(2));
        $("#totalRecurring span").html(no_totalrecurring + '.00');

        //        var price = $(this).parent().parent().parent().siblings(".singleprice").find("span").text();
        //        var total = qty * price + '.00';
        //        $(this).parent().parent().parent().siblings(".multiprice").find("span").html(total);
        //
        //        var withsiteQty = $("#subtotalwithQty span").text();
        //        $("#subtotalafterselectsiteqty span").html(withsiteQty);
        //
        //        $(".steps_section .tab-content .tab-pane .viewOrderSummary table tbody tr.onetime").each(function () {
        //            var totalOnetime = $(this).find("td.multiprice span").text();
        //            $("#totalonetime span").html(totalOnetime);
        //        });
        //        var totalr = 0;
        //        $(".steps_section .tab-content .tab-pane .viewOrderSummary table tbody tr.recurring").each(function () {
        //            var totalRecurring = $(this).find("td.multiprice span").text();
        //
        //            totalr = totalr + parseInt(totalRecurring);
        //
        //            $("#totalRecurring span").html(totalr + '.00');
        //        });
        //        var totalonetimerecurring = parseInt($("#totalonetime span").text()) + parseInt($("#totalRecurring span").text());
        //        $("#sum_onetimerecurring span").html(totalonetimerecurring + '.00');
        //
        //        $(".dropdown.qty.requirement .dropdown-menu .dropdown-item.active").each(function () {
        //            var qty = $(this).text();
        //            var totalsitereqirement;
        //            totalsitereqirement = parseInt(qty) * parseInt(totalonetimerecurring);
        //            $("#subtotalwithQty span").html(totalsitereqirement + '.00');
        //        });

    });
    //$("#myCarousel .carousel-inner").click(function () {
     //   location.href = 'product_details.html';
   // });

    $(".infoblock .show_moreless span").click(function () {
        if ($(this).text() == "Show More") {
            $(".infoblock .moredetails").removeClass("d-none");
            $(this).text("Show Less");
            $(this).siblings("i").addClass("up");
        } else {
            $(".infoblock .moredetails").addClass("d-none");
            $(this).text("Show More");
            $(this).siblings("i").removeClass("up");
        }
    });


    /* Billing period drop select */
    $(".dropdown.billing_period .dropdown-menu .dropdown-item").click(function () {
        var selectitem = $(this).text();
        if (selectitem == "Annually (Prepaid)") {
            $(".dropdown.contact_term .dropdown-menu .dropdown-item").each(function () {
                if ($(this).text() == "1 Month") {
                    $(this).addClass("disabled");
                }
            });
        } else {
            $(".dropdown.contact_term .dropdown-menu .dropdown-item").removeClass("disabled");
        }

        $(".infoblock .cartdetails-section table tr td .addons.billing_period span b").text(selectitem);

        updateCartTotal();
    });

    /* contact tearm drop select */
    $(".dropdown.contact_term .dropdown-menu .dropdown-item").click(function () {
        var selectitem = $(this).text();
        if (selectitem == "1 Month") {
            $(".dropdown.billing_period .dropdown-menu .dropdown-item").each(function () {
                if ($(this).text() == "Annually (Prepaid)") {
                    $(this).addClass("disabled");
                }
            });
        } else {
            $(".dropdown.billing_period .dropdown-menu .dropdown-item").removeClass("disabled");
        }

        $(".infoblock .cartdetails-section table tr td .addons.contact_term span b").text(selectitem);

        updateCartTotal();
    });
    $("input.quantityTxt").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message            
            return false;
        }
    });

    $("input.quantityTxt").change(function () {
        qty = $(this).val();

        if (qty == "" || qty == 0 || qty == "NaN") {
            $(this).val("1");
        }

        if ($(this).hasClass("ct")) {
            totalminiCart();
        } else if ($(this).hasClass("brand")) {
            $(".modal.show .cartdetails-section table tr td .totalgroup").addClass("hide_value");
            $(".modal.show .cartdetails-section table tr td .totalgroup .loader").removeAttr("style");
            var singleprice = $(".modal.show .cartdetails-section table tr td .totalgroup .singleprice").text();

            var modaltotal = qty * singleprice;

            $(".modal.show .cartdetails-section table tr td .totalgroup .loader").delay(1000).fadeOut("slow");
            setTimeout(function () {
                $(".modal.show .cartdetails-section table tr td .totalgroup h2").text(modaltotal.toFixed(2));
                $(".modal.show .cartdetails-section table tr td .totalgroup").removeClass("hide_value");
            }, 1500);
        } else {
            updateCartTotal();
        }
        totalCart();
    });

    function updateCartTotal() {
        $(".infoblock .cartdetails-section.right table tr td .totalgroup").addClass("hide_value");
        $(".loader").removeAttr("style");
        var contact_term = $(".cartdetails-section.right .dropdown.contact_term .dropdown-menu .dropdown-item.active").text();
        var billing_period = $(".cartdetails-section.right .dropdown.billing_period .dropdown-menu .dropdown-item.active").attr("value");
        //alert(billing_period);
        if (billing_period == 1) {
            $(".duration").text("monthly");
        } else {
            $(".duration").text("annually");
        }
        $(".infoblock .tab-content .tab-pane#specification table tbody tr").each(function () {
            var tblct = $(this).find(".ct").text();
            var tblqty = $(this).find(".qty1").text();
            var tblprice = $(this).find(".price").text();
            //alert(tblct + '|' + qty + '|' + tblqty + '|' + tblprice + '|' + contact_term);
            if (contact_term == tblct && qty + '' + tblqty) {
                //alert(tblprice + "/" + 499);
                //alert(contact_term == tblct && qty + '' + tblqty);
                var total = (parseInt(qty) * parseFloat(tblprice)) * parseInt(billing_period);
                $(".infoblock .cartdetails-section.right table tr td .totalgroup .productTotal").html(total.toFixed(2));


                $(".loader").delay(1000).fadeOut("slow");
                setTimeout(function () {
                    $(".infoblock .cartdetails-section.right table tr td .totalgroup").removeClass("hide_value");;
                }, 1500);
                return false;
            }
        });
    }

    $('.infoblock .cartdetails-section.right table tr td .quantityGroup .add').click(function () {
        var target = $('.quantity', this.parentNode)[0];
        target.value = +target.value + 1;
        qty = target.value;

        updateCartTotal();
    });
    $('.infoblock .cartdetails-section.right table tr td .quantityGroup .sub').click(function () {
        var target = $('.quantity', this.parentNode)[0];
        if (target.value > 1) {
            target.value = +target.value - 1;
        }
        qty = target.value;
        updateCartTotal();
    });

    $('.modal .cartdetails-section table tr td .quantityGroup .add').click(function () {
        $(".modal.show .cartdetails-section table tr td .totalgroup").addClass("hide_value");
        $(".modal.show .cartdetails-section table tr td .totalgroup .loader").removeAttr("style");
        var singleprice = $(".modal.show .cartdetails-section table tr td .totalgroup .singleprice").text();
        var target = $('.quantity', this.parentNode)[0];
        target.value = +target.value + 1;
        qty = target.value;

        var modaltotal = qty * singleprice;

        $(".modal.show .cartdetails-section table tr td .totalgroup .loader").delay(1000).fadeOut("slow");
        setTimeout(function () {
            $(".modal.show .cartdetails-section table tr td .totalgroup h2").text(modaltotal.toFixed(2));
            $(".modal.show .cartdetails-section table tr td .totalgroup").removeClass("hide_value");
        }, 1500);
    });
    $('.modal .cartdetails-section table tr td .quantityGroup .sub').click(function () {
        $(".modal.show .cartdetails-section table tr td .totalgroup").addClass("hide_value");
        $(".modal.show .cartdetails-section table tr td .totalgroup .loader").removeAttr("style");
        var singleprice = $(".modal.show .cartdetails-section table tr td .totalgroup .singleprice").text();
        var target = $('.quantity', this.parentNode)[0];
        if (target.value > 1) {
            target.value = +target.value - 1;
        }
        qty = target.value;
        var modaltotal = qty * singleprice;

        $(".modal.show .cartdetails-section table tr td .totalgroup .loader").delay(1000).fadeOut("slow");
        setTimeout(function () {
            $(".modal.show .cartdetails-section table tr td .totalgroup h2").text(modaltotal.toFixed(2));
            $(".modal.show .cartdetails-section table tr td .totalgroup").removeClass("hide_value");
        }, 1500);
    });

    $(".cart_section table td .card .card-body .card-title+.more").click(function () {
        $(this).toggleClass("up");
        $(this).parent().siblings(".remaining").toggleClass("d-none");
    });
    $(".infoblock .cartdetails-section table tr td .addons.billing_period span i").mouseenter(function () {
        $(".infoblock .cartdetails-section table tr td .addons.billing_period span.info").addClass("show");
    }).mouseleave(function () {
        $(".infoblock .cartdetails-section table tr td .addons.billing_period span.info").removeClass("show");
    });
    $(".infoblock .cartdetails-section table tr td .addons.contact_term span i").mouseenter(function () {
        $(".infoblock .cartdetails-section table tr td .addons.contact_term span.info").addClass("show");
    }).mouseleave(function () {
        $(".infoblock .cartdetails-section table tr td .addons.contact_term span.info").removeClass("show");
    });

    /* header cart - remove button click */
    $("#mainheader .navbar-nav:not('.cart_ul') li.dropdown.drop-cart .dropdown-menu .card .card-body i").click(function () {
        var stlid = $(this).parent().parent().parent().attr("stl-id");
        $(".cart_section table tbody tr").each(function () {
            if (stlid == $(this).attr("stl-id")) {
                $(this).remove();
            }
        });
        $(this).parent().parent().parent().remove();

        totalCart();
        var cartCount = $(".cart_section table tbody tr[stl-id]").length;
        if (cartCount < 1) {
            window.location.href = "/emptycart";
        }
    });

    /* add btn */
    $("#mainheader .navbar-nav:not('.cart_ul') li.dropdown.drop-cart .dropdown-menu .card .card-body .quantityGroup .round-btn.add").click(function () {
        var target = $('.quantity', this.parentNode)[0];
        target.value = +target.value + 1;
        qty = target.value;
        totalCart();
    });
    /* sub btn */
    $("#mainheader .navbar-nav:not('.cart_ul') li.dropdown.drop-cart .dropdown-menu .card .card-body .quantityGroup .round-btn.sub").click(function () {
        var target = $('.quantity', this.parentNode)[0];
        if (target.value > 1) {
            target.value = +target.value - 1;
        }
        qty = target.value;
        totalCart();
    });

    $(".cart_section table td .quantityGroup .round-btn.add").click(function () {
        var stlid = $(this).parent().parent().parent().attr("stl-id");
        $("#mainheader .navbar-nav:not('.cart_ul') li.dropdown.drop-cart .dropdown-menu .card").each(function () {
            if ($(this).attr("stl-id") == stlid) {
                $(this).find(".card-body .quantityGroup .add").trigger("click");
                return false;
            }
        });
    });
    $(".cart_section table td .quantityGroup .round-btn.sub").click(function () {
        var stlid = $(this).parent().parent().parent().attr("stl-id");
        $("#mainheader .navbar-nav:not('.cart_ul') li.dropdown.drop-cart .dropdown-menu .card").each(function () {
            if ($(this).attr("stl-id") == stlid) {
                $(this).find(".card-body .quantityGroup .sub").trigger("click");
                return false;
            }
        });
    });
    $(".cart_section table td .iconGroup i").click(function () {
        var stlid = $(this).parent().parent().parent().attr("stl-id");
        $("#mainheader .navbar-nav li.dropdown.drop-cart .dropdown-menu .card").each(function () {
            if ($(this).attr("stl-id") == stlid) {
                $(this).find(".card-body i").trigger("click");
            }
        });
    });

    function totalminiCart() {
        var cart_sum = 0;
        var total_recurring = 0;
        var total_onetime = 0;
        var subtotal_cart = 0;

        $(".cart_section table tbody tr").each(function () {
            var input_qty = $(this).find(".quantityGroup .quantityTxt").val();
            cart_sum += Number(input_qty);
            var stlid = $(this).attr("stl-id");
            $("#mainheader .navbar-nav:not('.cart_ul') li.dropdown.drop-cart .dropdown-toggle span").text(cart_sum);
            $("#totalCart").text(cart_sum);
            $("#mainheader .navbar-nav:not('.cart_ul') li.dropdown.drop-cart .dropdown-menu .minicart-header span").text(cart_sum);
            //alert(cart_sum);
            $("#mainheader .navbar-nav:not('.cart_ul') li.dropdown.drop-cart .dropdown-menu .card").each(function () {
                if (stlid == $(this).attr("stl-id")) {
                    $(this).find(".quantityGroup .quantityTxt").val(input_qty);
                    //alert("data-id" + "|" + $(this).attr("stl-id") + "|" + $(this).find(".quantityGroup .quantityTxt").val());
                }
            });
        });
    }

    function totalCart() {
        var cart_sum = 0;
        var total_recurring = 0;
        var total_onetime = 0;
        var subtotal_cart = 0;
        $("#mainheader .navbar-nav:not('.cart_ul') li.dropdown.drop-cart .dropdown-menu .card").each(function () {
            var input_qty = $(this).find(".card-body .quantityGroup .quantityTxt").val();
            cart_sum += Number(input_qty);
            var stlid = $(this).attr("stl-id");
            $("#mainheader .navbar-nav:not('.cart_ul') li.dropdown.drop-cart .dropdown-toggle span").text(cart_sum);
            $("#totalCart").text(cart_sum);
            $("#mainheader .navbar-nav:not('.cart_ul') li.dropdown.drop-cart .dropdown-menu .minicart-header span").text(cart_sum);
            //alert(cart_sum + "|" + stlid);
            $(".cart_section table tbody tr").each(function () {
                if (stlid == $(this).attr("stl-id")) {
                    var single_price = $(this).find(".charges ul li.price .singleprice").text();
                    var single_mrp = $(this).find(".charges ul li.mrp .singleprice").text();
                    var single_yousave = $(this).find(".charges ul li.yousave .singleprice").text();
                    $(this).find(".quantityGroup .quantityTxt").val(input_qty);

                    var cart_price = parseInt(input_qty) * parseFloat(single_price);
                    var cart_mrp = parseInt(input_qty) * parseFloat(single_mrp);
                    var cart_yousave = parseInt(input_qty) * parseFloat(single_yousave);
                    //alert(cart_totalprice);
                    $(this).find(".charges ul li.price span").text(cart_price.toFixed(2));
                    $(this).find(".charges ul li.mrp span").text(cart_mrp.toFixed(2));
                    $(this).find(".charges ul li.yousave span").text(cart_yousave.toFixed(2));

                    total_recurring += Number($(this).find("td.recurring ul li.price span").text());
                    total_onetime += Number($(this).find("td.onetime ul li.price span").text());

                    $(".cart_section table td#totalRecurring span").text(total_recurring.toFixed(2));
                    $(".cart_section table td#totalOnetime span").text(total_onetime.toFixed(2));

                    $(".cart_section table td .checkoutTotal #subtotal_cart span").text(total_onetime.toFixed(2));

                    return false;
                }
            });
        });
    }

    /* Cart page - Request a Quote btn click */
    $(".cart_section .btnGroup .btn.requestaQuote").click(function () {
        $(".cart_section .btnGroup .cartGroupBtn,.cart_section .btnGroup .requestQuoteBtn").toggleClass("d-none");
    });

    $(".cart_section .btnGroup .btn.editQuote").click(function () {
        $(this).addClass("d-none");
        $("#request_Quote .viewDiv").addClass("d-none");
        $("#request_Quote .editDiv,.cart_section .btnGroup .editQuoteBtn").removeClass("d-none");
        $("#editCartTbl").removeClass("d-none");
        $("#viewCartTbl").addClass("d-none");
        $(".cart_section .basket").removeClass("d-none");
    });


    if (typeof (Storage) !== "undefined") {
        $("#request_Quote .viewDiv .form-group.description span,.cart_section #request_Quote .form-control.description.edit").text(localStorage.getItem("description"));
        $(".catalog_details .summary .summary-body .estimateCost span,.cart_section table td.recurring ul li.price span#detail_price, .cart_section table td.recurring ul li.price .singleprice,#totalRecurring span").text(localStorage.getItem("nginxtotalPrice"));
        $("#planName").text(localStorage.getItem("plan_name"));
        localStorage.setItem("plan_name", "Opensource");

        $("#gbdisk").text(localStorage.getItem("gbdisk"));
        $("#gbram").text(localStorage.getItem("gbram"));
        $("#gbbackups").text(localStorage.getItem("gbbackups"));
        $("#vpc").text(localStorage.getItem("vpc"));

    } else {
        localStorage.setItem("description", "N/A");
        localStorage.setItem("nginxtotalPrice", "0.00");
        $("#planName").text(localStorage.getItem("plan_name"));
        $("#request_Quote .viewDiv .form-group.description span,.cart_section #request_Quote .form-control.description.edit").text(localStorage.getItem("description"));
        $(".catalog_details .summary .summary-body .estimateCost span,.cart_section table td.recurring ul li.price span#detail_price, .cart_section table td.recurring ul li.price .singleprice,#totalRecurring span").text(localStorage.getItem("nginxtotalPrice"));
    }

    //$(".catalog_details .summary .summary-body .estimateCost span").text();



    $('#confirmQuoteModal').on('shown.bs.modal', function () {
        var desc = $(".cart_section #request_Quote .form-control.description").val();

        if (typeof (Storage) !== "undefined") {
            // Store
            localStorage.setItem("description", desc);
            // Retrieve
            $("#confirmQuoteModal .modal-body .form-group.description span,.viewDiv form .from-group.description span").text(localStorage.getItem("description"));
        }
    });

    /* catalog page */
    $(".catalog .page-title ul li a").click(function () {
        $(".catalog .page-title ul li a").removeClass("active");
        $(this).addClass("active");
        if ($(this).find("i").hasClass("fa-list")) {
            $(".catalog .card-deck").removeClass("gridview").addClass("listview");
        } else {
            $(".catalog .card-deck").removeClass("listview").addClass("gridview");
        }
    });

    // Removes an Item From Selected Items and Deselects
    $('.catalog .left-side .card .card-body .nav .nav-item .nav-link label .form-check-input').change(function () {
        if ($(this.checked)) {
            $(".catalog .filter").removeClass("d-none");
        }
        allchecked();
    });

    function allchecked() {
        $(".catalog .left-side .card .card-body .nav .nav-item .nav-link label .form-check-input").each(function () {
            var checkval = $(this).val();
            var checkpropVal = $(this).prop("checked");

            $(".catalog .filter .items_group .item").each(function () {
                if ($(this).attr("data-val") == checkval) {
                    if (checkpropVal == true) {
                        $(this).removeClass("d-none");
                    } else {
                        $(this).addClass("d-none");
                    }
                }
            });
        });
        if ($(".catalog .filter .item:not(.d-none)").length == 0) {
            $(".catalog .filter").addClass("d-none");
        }
    }
    $(".catalog .filter .item button").click(function () {
        var filterval = $(this).parent().attr("data-val");
        $(".catalog .left-side .card .card-body .nav .nav-item .nav-link label .form-check-input:checked").each(function () {
            if ($(this).val() == filterval) {
                $(this).prop("checked", false);
            }
        });
        $(this).parent().addClass("d-none");
        if ($(".catalog .filter .item:not(.d-none)").length == 0) {
            $(".catalog .filter").addClass("d-none");
        }

    });
    $(".catalog .filter .clearall").click(function () {
        $(".catalog .filter .item,.catalog .filter").addClass("d-none");
        $(".catalog .left-side .card .card-body .nav .nav-item .nav-link label .form-check-input").prop("checked", false);
    });

    $(".catalog .card-deck .card").click(function () {
        var href = $(this).find(".card-body .btn-outline-secondary").attr("href");
        window.location.href = href;
    });

    $(".catalog_details .tab-content .tab-pane .pricing_plan .plan_tbl .row").click(function () {
        if ($(this).hasClass("d-none")) {

        } else {
            $(".catalog_details .tab-content .tab-pane .pricing_plan .plan_tbl .row").removeClass("activCls");
            $(this).addClass("activCls");
            $(".catalog_details .tab-content .tab-pane .pricing_plan .plan_tbl .row i.fa-circle").removeClass("d-none");
            $(".catalog_details .tab-content .tab-pane .pricing_plan .plan_tbl .row i.fa-check-circle").addClass("d-none");
            $(this).find("i.fa-circle").addClass("d-none");
            $(this).find("i.fa-check-circle").removeClass("d-none");
        }
        estimatecost();
    });

    $("#gbdisk,#gbdisk1").on("input", function () {
        $("#gbdisk,#gbdisk1").val($(this).val());
        estimatecost();
    });
    $("#gbram,#gbram1").on("input", function () {
        $("#gbram,#gbram1").val($(this).val());
        estimatecost();
    });
    $("#gbbackups,#gbbackups1").on("input", function () {
        $("#gbbackups,#gbbackups1").val($(this).val());
        estimatecost();
    });
    $("#vpc,#vpc1").on("input", function () {
        $("#vpc,#vpc1").val($(this).val());
        estimatecost();
    });

    $("#target_namespace").on("input", function () {
        // Print entered value in a div box
        $(".target_namespace").text($(this).val());
    });
    $("#method").on("input", function () {
        // Print entered value in a div box
        $(".method").text($(this).val());
    });
    $("#cluster").on("input", function () {
        // Print entered value in a div box
        $(".cluster").text($(this).val());
    });
    $("#workspace").on("input", function () {
        // Print entered value in a div box
        $(".workspace").text($(this).val());
    });
    $("#resourceGroup").on("input", function () {
        // Print entered value in a div box
        $(".resourceGroup").text($(this).val());
    });

    function estimatecost() {
        var sumofestimatecost = 0;
        $(".catalog_details .tab-content .tab-pane .pricing_plan .plan_tbl .row").each(function () {
            if ($(this).hasClass("activCls")) {
                if ($(this).find("ul").hasClass("plan_price")) {
                    $(this).find("li").each(function () {
                        var perGbprice = $(this).find("span").text();
                        var clsname = $(this).attr("class");
                        $(".catalog_details .summary ul.price_calculator li").each(function () {
                            var gbinputVal = $(this).find(".form-control").val();
                            if ($(this).find(".form-control").attr("id") == clsname) {
                                var totalEstimate = gbinputVal * perGbprice;
                                sumofestimatecost += Number(totalEstimate);
                                /*alert(sumofestimatecost);*/
                            }
                        });
                    });
                } else {
                    /*alert("ul cls nthi");*/
                }
            } else {
                /*alert("active cls nthi");*/
            }
        });
        $(".catalog_details .summary .summary-body .estimateCost span").text(sumofestimatecost.toFixed(2));
    }
    estimatecost();
    $(".catalog_details .tab-content .tab-pane .targetMethod .items .innerdiv .dropdown .dropdown-menu .dropdown-item").click(function () {
        $(".catalog_details .catalog_header .description ul li.version span").text($(this).attr("data-version"));
    });
    $('.catalog_details .summary .summary-footer .form-check-label .form-check-input').change(function () {
        var checkVal = $(this).prop("checked");

        if (checkVal == true) {
            $(".catalog_details .summary .summary-footer .btn").removeClass("disabled");
        } else {
            $(".catalog_details .summary .summary-footer .btn").addClass("disabled");
        }
    });
    //$('[data-toggle="tooltip"]').tooltip();

    /* checkout btn click */
    $(".cart_section .btn-checkout,#mainheader .navbar-nav li.dropdown.drop-cart .btn-goto .btn-checkout").click(function () {
        $(".cart_section").addClass("d-none");
        $(".paymentCard").removeClass("d-none");
    });

    $(".catalog_details .summary .summary-footer .btn").click(function () {
        var nginxprice = $(".catalog_details .summary .summary-body .estimateCost span").text();
        var planname = $(".catalog_details .tab-content .tab-pane .pricing_plan .plan_tbl .row.activCls .plan_title").text();

        var gbdiskVal = $("#gbdisk").val();
        var gbramVal = $("#gbram").val();
        var gbbackupsVal = $("#gbbackups").val();
        var vpcVal = $("#vpc").val();

        if (typeof (Storage) !== "undefined") {
            // Store
            localStorage.setItem("nginxtotalPrice", nginxprice);
            localStorage.setItem("plan_name", planname);

            localStorage.setItem("gbdisk", gbdiskVal);
            localStorage.setItem("gbram", gbramVal);
            localStorage.setItem("gbbackups", gbbackupsVal);
            localStorage.setItem("vpc", vpcVal);

            // Retrieve
            $("#gbdisk").text(localStorage.getItem("gbdisk"));
            $("#gbram").text(localStorage.getItem("gbram"));
            $("#gbbackups").text(localStorage.getItem("gbbackups"));
            $("#vpc").text(localStorage.getItem("vpc"));

            $("#planName").text(localStorage.getItem("plan_name"));
            $(".cart_section table td.recurring ul li.price span#detail_price, .cart_section table td.recurring ul li.price .singleprice,#totalRecurring span").text(localStorage.getItem("nginxtotalPrice"));
        }
        $(".catalog_details .summary .summary-footer .form-check-label input").prop("checked", false);
    });
    $(".paymentCard .btn-makepayment").click(function () {

        $(".paymentCard .makePayment").addClass("d-none");
        $(".paymentCard .orderConfirm").removeClass("d-none");
        $(".paymentCard .orderConfirm .loader").removeAttr("style");

        $(".paymentCard .orderConfirm .loader").delay(1000).fadeOut("slow");
        setTimeout(function () {
            $(".paymentCard .orderConfirm .orderConfirmation").removeClass("d-none");
        }, 1500);
    });

    $("#mainheader .navbar-nav li.dropdown.drop-cart .dropdown-menu .card .card-body i.delete").click(function () {
        var count_item = $(".cart_section .basket.details #totalCart").text();
        if (count_item <= 1) {
            window.location.href = "/emptycart";
        }
    });

});
