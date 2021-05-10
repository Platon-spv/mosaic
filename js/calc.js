$(document).ready(function() {
    var data = new Map ([
        [1, [
            {
                val: 0.062,
                text: 75
            },
            {
                val: 0.07,
                text: 125
            },
            {
                val: 0.066,
                text: 150
            },
            {
                val: 0.072,
                text: 175
            },
            {
                val: 0.081,
                text: 200
            },
        ]],
        [4, [
            {
                val: 0.064,
                text: 150
            },
            {
                val: 0.065,
                text: 170
            },
            {
                val: 0.066,
                text: 180
            },
        ]],
        [5, [
            {
                val: 0.049,
                text: 20
            },
            {
                val: 0.047,
                text: 30
            },
            {
                val: 0.046,
                text: 50
            },
            {
                val: 0.045,
                text: 80
            },
            {
                val: 0.047,
                text: 110
            },
            {
                val: 0.052,
                text: 190
            },
        ]],
        [6, [
            {
                val: 0.045,
                text: 30
            },
            {
                val: 0.042,
                text: 50
            },
            {
                val: 0.04,
                text: 70
            },
            {
                val: 0.044,
                text: 110
            },
            {
                val: 0.045,
                text: 140
            },
            {
                val: 0.048,
                text: 180
            },
            {
                val: 0.05,
                text: 220
            },
        ]],
        [7, [
            {
                val: 0.045,
                text: 40
            },
            {
                val: 0.042,
                text: 90
            },
        ]],
        [18, [
            {
                val: 0.064,
                text: 80
            },
            {
                val: 0.07,
                text: 100
            },
        ]],
        [19, [
            {
                val: 0.055,
                text: 15
            },
            {
                val: 0.053,
                text: 25
            },
            {
                val: 0.05,
                text: 35
            },
            {
                val: 0.045,
                text: 50
            },
        ]],
        [20, [
            {
                val: 0.043,
                text: 50
            },
            {
                val: 0.049,
                text: 80
            },
        ]],
        [21, [
            {
                val: 0.041,
                text: 20
            },
            {
                val: 0.04,
                text: 25
            },
            {
                val: 0.039,
                text: 30
            },
        ]],
        [22, [
            {
                val: 0.037,
                text: 39
            },
        ]],
        [26, [
            {
                val: 0.064,
                text: 15
            },
            {
                val: 0.074,
                text: 25
            },
            {
                val: 0.085,
                text: 30
            },
        ]],
        [27, [
            {
                val: 0.047,
                text: 30
            },
            {
                val: 0.045,
                text: 50
            },
        ]],
        [51, [
            {
                val: 0.23,
                text: 600
            },
            {
                val: 0.26,
                text: 800
            },
            {
                val: 0.3,
                text: 1000
            },
        ]],
        [52, [
            {
                val: 0.15,
                text: 400
            },
            {
                val: 0.19,
                text: 500
            },
        ]],
        [53, [
            {
                val: 0.08,
                text: 200
            },
            {
                val: 0.09,
                text: 300
            },
        ]],
        [55, [
            {
                val: 0.17,
                text: 600
            },
        ]],
        [56, [
            {
                val: 0.16,
                text: 500
            },
            {
                val: 0.18,
                text: 600
            },
            {
                val: 0.27,
                text: 700
            },
            {
                val: 0.3,
                text: 800
            },
            {
                val: 0.36,
                text: 900
            },
            {
                val: 0.44,
                text: 1000
            },
            {
                val: 0.51,
                text: 1100
            },
            {
                val: 0.51,
                text: 1200
            }
        ]],
        [57, [
            {
                val: 0.074,
                text: 200  
            },
            {
                val: 0.1,
                text: 300  
            },
            {
                val: 0.13,
                text: 400  
            },
            {
                val: 0.16,
                text: 500  
            },
        ]],
        [58, [
            {
                val: 0.23,
                text: 500
            },
            {
                val: 0.26,
                text: 600
            },
            {
                val: 0.31,
                text: 800
            },
            {
                val: 0.41,
                text: 1000
            },
            {
                val: 0.52,
                text: 1200
            },
            {
                val: 0.65,
                text: 1400
            },
            {
                val: 0.79,
                text: 1600
            },
            {
                val: 0.92,
                text: 1800
            },
        ]],
        [59, [
            {
                val: 0.35,
                text: 800
            },
            {
                val: 0.47,
                text: 1000
            },
            {
                val: 0.58,
                text: 1200
            },
        ]],
        [60, [
            {
                val: 0.35,
                text: 800
            },
            {
                val: 0.41,
                text: 1000
            },
        ]],
        [61, [
            {
                val: 0.41,
                text: 1000
            },
        ]],
        [62, [
            {
                val: 0.23,
                text: 600
            },
            {
                val: 0.33,
                text: 800
            },
            {
                val: 0.38,
                text: 1000
            },
            {
                val: 0.5,
                text: 1200
            },
        ]],
        [63, [
            {
                val: 0.37,
                text: 1000
            },
            {
                val: 0.44,
                text: 1200
            },
            {
                val: 0.52,
                text: 1400
            },
            {
                val: 0.63,
                text: 1600
            },
        ]],
        [66, [
            {
                val: 0.35,
                text: 1000
            },
            {
                val: 0.47,
                text: 1200
            },
        ]],
        [67, [
            {
                val: 0.21,
                text: 800
            },
        ]],
        [68, [
            {
                val: 0.23,
                text: 700
            },
            {
                val: 0.24,
                text: 800
            },
            {
                val: 0.27,
                text: 1000
            },
            {
                val: 0.29,
                text: 1200
            },
        ]],
        [76, [
            {
                val: 0.64,
                text: 1600
            },
        ]],
        [77, [
            {
                val: 0.58,
                text: 1400
            },
        ]],
        [78, [
            {
                val: 0.52,
                text: 1200
            },
        ]],
        [79, [
            {
                val: 0.51,
                text: 1350
            },
            {
                val: 0.43,
                text: 1400
            },
        ]],
        [80, [
            {
                val: 0.092,
                text: 400
            },
        ]],
        [81, [
            {
                val: 2.04,
                text: 2500
            },
        ]],
        [82, [
            {
                val: 1.86,
                text: 2400
            },
        ]],
        [83, [
            {
                val: 0.81,
                text: 1600
            },
        ]],
        [84, [
            {
                val: 0.87,
                text: 1700
            },
        ]],
        [85, [
            {
                val: 0.93,
                text: 1800
            },
        ]],
        [91, [
            {
                val: 0.81,
                text: 1800
            },
        ]],
        [92, [
            {
                val: 0.76,
                text: 1700
            },
        ]],
        [93, [
            {
                val: 0.7,
                text: 1600
            },
        ]],
        [94, [
            {
                val: 0.87,
                text: 1800
            },
        ]],
        [95, [
            {
                val: 0.47,
                text: 1000
            },
            {
                val: 0.52,
                text: 1200
            },
        ]],
        [96, [
            {
                val: 0.7,
                text: 1500
            },
        ]],
        [1001, [
            {
                val: 0.0435,
                text: 9
            },
        ]],
        [1002, [
            {
                val: 0.042,
                text: 10
            },
        ]],
        [1003, [
            {
                val: 0.041,
                text: 11.2
            },
        ]],
        [1004, [
            {
                val: 0.0395,
                text: 12.5
            },
        ]],
        [1005, [
            {
                val: 0.039,
                text: 13.6
            },
        ]],
        [1006, [
            {
                val: 0.0385,
                text: 16.3
            },
        ]],
        [1007, [
            {
                val: 0.038,
                text: 19.3
            },
        ]],
        [1008, [
            {
                val: 0.044,
                text: 8
            },
        ]],
        [1009, [
            {
                val: 0.041,
                text: 11.2
            },
        ]],
        [1010, [
            {
                val: 0.039,
                text: 12.5
            },
        ]],
        [1011, [
            {
                val: 0.038,
                text: 15.3
            },
        ]],
    ]);

    var params = {};
    params.obl = $('#calc_area');
    params.inside_width = $('#calc_inside_width');
    params.material_inside = $('#calc_material_inside');
    params.thickness_material_inside = $('#calc_thickness_material_inside');

    params.wall_width = $('#calc_wall_width');
    params.material_wall = $('#calc_material_wall');
    params.thickness_material_wall = $('#calc_thickness_material_wall');

    params.outside_width = $('#calc_outside_width');
    params.material_outside = $('#calc_material_outside');
    params.thickness_material_outside = $('#calc_thickness_material_outside');

    params.material_type = $('#calc_type_heater');
    params.thickness_material_type = $('#calc_thickness_type_heater');

    function validateForm(params) {

        removeError($('.error'));
       
        for(var key in params) {
            if(params[key].val() == '') {
                // if(params[key].is(':visible')) {
                    addError(params[key]);
                    //params[key].parents('div').append('<p>'+params[key].data('msg')+'</p>');
                    return false;
                // }
            } 
        }
        return true;
    }
    function calcStyroFoam() {
        if(validateForm(params)) {
            var R = +params.obl.val();
            var inside_width = +params.inside_width.val()/100;
            var delta_inside_width = +params.thickness_material_inside.val();
            var wall_width = +params.wall_width.val()/100;
            var delta_wall_width = +params.thickness_material_wall.val();
            var outside_width = +params.outside_width.val()/100;
            var delta_outside_width = +params.thickness_material_outside.val();
            var type = +params.thickness_material_type.val();
            var result = (R - 0.158 - (inside_width/delta_inside_width + wall_width/delta_wall_width + outside_width/delta_outside_width)) * type;
            $('.calc_result').html(Math.floor(result*1000));
            $('.block_result').slideDown();
        }   
    }
    function resetCalc() {
        for(var key in params) {
            var el = params[key];
            el.val('');
            if(el.hasClass('select_thickness')) {
                el.find('option').remove();
                el.append($("<option/>", {
                    value: '',
                    text: 'Виберіть густину матеріалу'
                }));
                el.prop("disabled", true);
            } 
        }
        $('.block_result').slideUp();
    }
    function addError(obj) {
        obj.addClass('error');
    }

    function removeError(obj) {
        obj.removeClass('error');
    }
    $('#calc_width_styrofoam').on('click', function() {
        calcStyroFoam();
    });
    $('select.form_control').on('change', function() {
        removeError($(this))
    });
    $('.value_width').on('input', function() {
        if($(this).val().length > 0) {
            removeError($(this))
        }
    });
    $('.select_material').on('change', function() {
        var material = +$(this).val();

        var arrThickness = data.get(material);
        var select_thickness = $(this).parents('.block_calc').find('.select_thickness');

        $(this).parents('.block_calc').find('.select_thickness option').remove();
        arrThickness.forEach((item) => {
            select_thickness.append($("<option/>", {
                value: item.val,
                text: item.text
            }));
        });
        select_thickness.prop("disabled", false);
    });

    $('.type_material').on('change', function() {
        var type = +$(this).val();

        var options = [`<option value="">Виберіть матеріал</option><option value="1001">Ферозіт 25 extra</option><option value="1002">Ферозіт 25 lux</option><option value="1003" class="strong">Ферозіт 25 super</option><option value="1004" class="strong">Ферозіт 25 premium</option><option value="1005" class="strong">Ферозіт 35 extra</option><option value="1006">Ферозіт 35 lux</option><option value="1007">Ферозіт 35 super</option><option value="1008">SHPATEN 25 extra</option><option value="1009" class="strong">SHPATEN 35 extra fasad</option><option value="1010" class="strong">SHPATEN 35 extra</option><option value="1011" class="strong">SHPATEN 35 lux</option>`, 
        `<option value="">Виберіть матеріал</option><option value="1">Плити з мінеральної вати на синтетичному зв'язуючому негофрованої структури</option><option value="4">Плити з мінеральної вати на синтетичному зв'язуючому (вміст зв'язуючого за масою від 6,5 % до 8,0 %)</option><option value="5">Плити з мінеральної вати на синтетичному зв'язуючому (вміст зв'язуючого за масою від 4,0 % до 5,0 %)</option><option value="6">Плити з мінеральної вати на синтетичному зв'язуючому (вміст зв'язуючого за масою від 3,5 % до 4,2 %)</option><option value="7">Плити негорючі теплоізоляційні базальто-волокнисті</option><option value="18">Вата мінеральна</option>`];

        $('.form_group_heater .select_material option').remove(); 
        $('.form_group_heater .select_material').html(options[type-1]);       

        $(this).parents('.group_block_calc').find('.select_thickness option').remove();
    });

    $('.type_material').on('change', function() {
        var type_number = $(this).val();
        $('.calc_type');
    });

    $('#calc_reset').on('click', function() {
        resetCalc();
    });
});