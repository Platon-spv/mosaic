var App = {
    slider_main: function() {
        $('.slider_main').slick({
            infinite: true,
            autoplay: true,
            dots: true,
            autoplaySpeed: 5000,
            speed: 400,
        });
        $('.new_product').slick({
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 400,
            fade: true,
            cssEase: 'linear'
        });
        $('.slider_mozayika').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 400,
            cssEase: 'linear',
            responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
        $('.slider_palitra').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 300,
            responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    },
    responsive_menu: function() {
        $('.navbar-toggle').click(function() {
            $('.navbar-collapse').slideToggle();
            $('.searchform').toggleClass('open');
            $('.navbar .wrap_cart').toggleClass('open');
        });
        // $('.menu-item-has-children .menu-item-has-children a').click(function(e) {
        //     e.preventDefault();
        //     $('.sub-menu').slideToggle();
        // });
    },
    accordion_term: function() {
        $('.term_parent').on('click', function(e) {
            e.preventDefault();
            if (!$(this).hasClass('open')) {
                $('.list_cat_product .child_term').slideUp();
                $('.list_cat_product .term_parent').removeClass('open');
                $(this).addClass('open');
                $(this).next('.child_term').slideDown();
            } else {
                $(this).removeClass('open');
                $(this).next('.child_term').slideUp();
            }
        });
        $('.head_cat_product').on('click', function() {
            $('.list_cat_product').slideToggle();
            $(this).toggleClass('open');
        })
    },
    tab: function() {
        $('ul.tabs li').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })
    },
    accordion_menu: function() {
        $('.menu-item-has-children .menu-item-has-children > a').on('click', function(e) {
            e.preventDefault();
            if (!$(this).hasClass('open')) {
                $('.navbar-nav .sub-menu .sub-menu').slideUp();
                $('.navbar-nav .sub-menu .menu-item-has-children > a').removeClass('open');
                $(this).addClass('open');
                $(this).next('.sub-menu').slideDown();
            } else {
                $(this).removeClass('open');
                $(this).next('.sub-menu').slideUp();
            }
        });
    },
    customSelect: function() {
        $('.form_select').each(function() {
            var $this = $(this),
                numberOfOptions = $(this).children('option').length;

            $this.addClass('select-hidden');
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');

            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());

            var $list = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($styledSelect);

            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

            var $listItems = $list.children('li');

            $styledSelect.click(function(e) {
                e.stopPropagation();
                $('div.select-styled.active').not(this).each(function() {
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').toggle();
            });

            $listItems.click(function(e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.hide();
                //console.log($this.val());
            });

            $(document).click(function() {
                $styledSelect.removeClass('active');
                $list.hide();
            });

        });
    },
    sendMsg: function() {
        $('.btn_chat').on('click', function() {
            $('#chat').addClass('show');
        });
        $('.close_chat').on('click', function() {
            $('#chat').removeClass('show');
        });
        $("#send_form").validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                question: {
                    required: true
                }
            },
            highlight: function(element) {
                $(element).addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).removeClass('has-error');
            },
            submitHandler: function(form) {
                $.ajax({
                    data: {
                        name: $("#send_form [name='name']").val(),
                        email: $("#send_form [name='email']").val(),
                        question: $("#send_form [name='question']").val()
                    },
                    type: "post",
                    url: window.location.origin+'/wp-content/themes/storefront/send.php',
                    success: function(data) {
                        console.log(data);
                        $('.wrap_form').addClass('hide');
                        $('.wrap_success').addClass('show');
                    }
                })
            }
        });
    },
    calc: function() {
        $('.add_square').on('click', function() {
            $('.hidden_block .item_square_form').appendTo('.col_1 .wrap_calc_form').clone();
        });
        $('.val_square').on('keydown', function(e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A, Command+A
                (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: home, end, left, right, down, up
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
        $('.add_material').on('click', function() {
            $('.hidden_block .empty_material').clone().appendTo('.col_2 .wrap_calc_form');
            //$('.col_2 .wrap_calc_form').append('<div class="empty_material copy_select"><div class="item_group_product form_select_group"><label>Група:</label><div><select class="form_select"><option value="">Виберіть групу</option><option value="">Декоративні штукатурки</option><option value="">Клейові суміші</option><option value="">Підготовчі засоби</option><option value="">Суміші для підлог</option><option value="">Фарби</option><option value="">Шпаклювальні суміші</option><option value="">Штукатурні суміші</option></select></div></div></div>');
            //setTimeout(function() {
            $('.col_2 .empty_material select').select2({
                minimumResultsForSearch: Infinity
            });
            //}, 500);
            $('.col_2 .empty_material .form_select_group select').on("select2:select", function(e) {
                var group = $(this).val();
                console.log(group);
                var sub_g = $(this).parents('.copy_select').find('.form_select_subgroup select');
                sub_g.html('<option value="">Виберіть підгрупу</option>');
                $.ajax({
                    dataType: 'json',
                    data: {
                        action: 'child_term',
                        id_par_term: group
                    },
                    url: myajax.url,
                    success: function(data, params) {
                        //console.log(data, params);
                        sub_g.select2({
                            data: data,
                            minimumResultsForSearch: Infinity
                        })
                    }
                })
            });
            $('.col_2 .empty_material .form_select_subgroup select').on("select2:select", function(e) {
                var product = $(this).val();
                console.log(product);
                var product_g = $(this).parents('.copy_select').find('.form_select_product select');
                product_g.html('<option value="">Виберіть товар</option>');
                $.ajax({
                    dataType: 'json',
                    data: {
                        action: 'product_term',
                        id_par_child_term: product
                    },
                    url: myajax.url,
                    success: function(data, params) {
                        //console.log(data, params);
                        product_g.select2({
                            data: data,
                            minimumResultsForSearch: Infinity
                        })
                    }
                })
            });
        });

        $('.btn_calc_ok').on('click', function() {
            var square = 0;
            $('.wrap_calc_form .val_square').each(function() {
                square += parseFloat($(this).val());
            });
            if (!square) {
                $('.error_msg').removeClass('hidden');
                $('.er_empty_square').removeClass('hidden');
                $('.result_calc').addClass('hidden');
            } else {
                $('.er_empty_square').addClass('hidden');
                if ($('.form_select_product select').val()) {
                    $('.col_3 .head_block').addClass('fill');
                    $('.error_msg').addClass('hidden');
                    $('.result_calc').removeClass('hidden');
                    $('.result_square span').text(square);
                    $('.inner_calc').html('');

                    var title, excerpt, height_layer, value_product;
                    $('.col_2 .copy_select').each(function(index, el) {
                        //console.log(el);
                        var id = $(el).find('.form_select_product select').val();
                        $.ajax({
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            dataType: 'json',
                            data: {
                                action: 'product_detail',
                                id_post_p: id
                            },
                            url: myajax.url,
                            success: function(data, params) {
                                //console.log(data[0], params);
                                title = data[0]['title'];
                                excerpt = data[0]['excerpt'];
                                p = data[0]['p'];
                                title_feromal = data[0]['title_feromal'];
                                height_layer = data[0]['height_layer'];
                                value_product = data[0]['value_product'];
                                if (p == 30 || p == 31 || p == 32 || p == 123) {
                                    var text = '<div class="item_result">' +
                                        '<p class="name_product">' + excerpt +
                                        ' <br><span>' + title + '</span></p>' +
                                        '<p class="val_product">' + square * 2 + 'шт</p>';
                                } else {
                                    if (title_feromal) {
                                        var text = '<div class="item_result">' +
                                            '<p class="name_product">' + excerpt +
                                            ' <br><span>' + title_feromal + '</span></p>' +
                                            '<p class="val_product">' + square * value_product + 'кг</p>';
                                    } else {
                                        var text = '<div class="item_result">' +
                                            '<p class="name_product">' + excerpt +
                                            ' <br><span>' + title + '</span></p>' +
                                            '<p class="val_product">' + square * value_product + 'кг</p>';
                                    }
                                    if (height_layer) {
                                        text += '<p class="note">' + height_layer + '</p></div>';
                                    } else {
                                        text += '<p class="note"></p></div>'
                                    }
                                }
                                $('.inner_calc').append(text)
                            }
                        });
                    });
                } else {
                    $('.error_msg').removeClass('hidden');
                    $('.result_calc').addClass('hidden');
                }
            }
        });

        $('.btn_reset').on('click', function() {
            $('.val_square').val('');
            $('.form_select_group select').val(null).trigger("change");
            $('.form_select_subgroup select').val(null).trigger("change");
            $('.form_select_product select').val(null).trigger("change");
            $('.col_2 .empty_material').remove();
            $('.result_calc').addClass('hidden');
        });
    },
    ajaxSelect: function() {
        $('.col_2 .wrap_calc_form select').select2({
            minimumResultsForSearch: Infinity
        });
        $('.form_select_group select').on("select2:select", function(e) {
            var group = $(this).val();
            //console.log(group);
            var sub_g = $(this).parents('.copy_select').find('.form_select_subgroup select');
            sub_g.html('<option value="">Виберіть підгрупу</option>');
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                data: {
                    action: 'child_term',
                    id_par_term: group
                },
                url: myajax.url,
                success: function(data, params) {
                    //console.log(data, params);
                    sub_g.select2({
                        data: data,
                        minimumResultsForSearch: Infinity
                    })
                },
                error: function(data, params) {
                    console.log(data);
                }
            })
        });

        $('.form_select_subgroup select').on("select2:select", function(e) {
            var product = $(this).val();
            //console.log(product);
            var product_g = $(this).parents('.copy_select').find('.form_select_product select');
            product_g.html('<option value="">Виберіть товар</option>');
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                data: {
                    action: 'product_term',
                    id_par_child_term: product
                },
                url: myajax.url,
                success: function(data, params) {
                    //console.log(data, params);
                    product_g.select2({
                        data: data,
                        minimumResultsForSearch: Infinity
                    })
                }
            })
        });

        $('.val_square').focus(function() {
            $('.col_2 .head_block').addClass('fill');
            $('.col_2').addClass('enable');
        });
        $('.val_square').blur(function() {
            if (!$(this).val()) {
                $('.col_2 .head_block').removeClass('fill');
                $('.col_2').removeClass('enable');
            }
        });
    },
    calcSingleProduct() {
        $('.result_calc').on('click', function() {
            let m = $('.amount_m').val();
            let h = $('.layout_h').val();
            let f = $('.variations label').text();
            let ind = f.indexOf(',') + 2;
            let mes = f.substring(ind);
            if(mes == 'см') {
                let h_p = $('.value select').val();
                r = Math.round(m * h_p * 0.01 * 100) / 100;
                mes = 'м3';
                $('.rez_calc').html(r + ' <span class="measur">м<sup>3</sup></span>');
            } else {
                r = Math.round(m * h * 100) / 100;
                mes = '<span class="measur">' + mes + '</span>';
                $('.rez_calc').addClass('field_last');
                $('.rez_calc').html(r + ' ' + mes);
            }       
        });
    },
    clickCatHome() {
        var isTouchDevice = 'ontouchstart' in document.documentElement;  
        $('.item_cat').click(function(e) {
            if(isTouchDevice){
                $('.wrap_subcat').removeClass('focus');
                $(this).find('.wrap_subcat').toggleClass('focus');
            }
        });
    }
};

$(document).ready(function() {
    App.responsive_menu();
    App.slider_main();
    App.accordion_term();
    App.tab();
    App.accordion_menu();
    //App.customSelect();
    App.calc();
    App.sendMsg();
    App.ajaxSelect();
    App.calcSingleProduct();   
    App.clickCatHome(); 
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');
        $('.quantity').each(function() {
          var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            //max = input.attr('max');
            max = 20;

          btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });

          btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
          });

        });
    $('.wac-btn-inc, .wac-btn-sub').text('');
});