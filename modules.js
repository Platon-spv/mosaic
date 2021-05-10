console.log("modules");



var imgAlpha = new Image();
var img = new Image();


//onload
var images = [];
images.push(imgAlpha);
images.push(img);

var imageCount = images.length;
var imagesLoaded = 0;



for (var i = 0; i < imageCount; i++) {
    images[i].onload = function() {

        imagesLoaded++;
        console.log("imagesLoaded ", imagesLoaded);
        if (imagesLoaded === imageCount) {
            allLoaded();
        }
    }
}
//onload end


imgAlpha.src = 'img/img-test/crop/xs.png';
img.src = 'img/img-test/crop/image_6487327-2_.png';




var ctx = canvas.getContext("2d");
var imageData;


// все картинки загрузились
function allLoaded() {
    console.log("allLoaded");
    // canvas.width = imgAlpha.width;
    // canvas.height = imgAlpha.height;
    canvas.width = imgAlpha.width*3;
    canvas.height = imgAlpha.height*3;

    imageData = ctx.getImageData(0, 0, imgAlpha.width, imgAlpha.height);
    draw(imgAlpha);
}
// все картинки загрузились end






// цвет пикселя в консоль
function pick(event) {
    var x = event.layerX;
    var y = event.layerY;
    var pixel = ctx.getImageData(x, y, 1, 1);
    var data = pixel.data;
    var rgba = 'rgba(' + data[0] + ', ' + data[1] +
        ', ' + data[2] + ', ' + (data[3] / 255) + ')';
    console.log("rgba: ", rgba, x, y);
    console.log("x, y: ", x, y);
    // console.log("getCanvasPixelColor: ", getCanvasPixelColor(ctx, x, y));

}
canvas.addEventListener('click', pick); // цвет пикселя в консоль


canvas.addEventListener('click', function(e) {
    // body...
    // var stoneOffset = floodFill(e.offsetX, e.offsetY);
    // var stoneSize = [stoneOffset[2] - stoneOffset[0], stoneOffset[3] - stoneOffset[1]];
    // console.log("stoneOffset:", stoneOffset, "stoneSize:", stoneSize);
    getStonesArray()
}); //заливка цветом
// цвет пикселя в консоль end








/**
 * getCanvasPixelColor
 * @param  {canvas element|context} ctx  The canvas from which to take the color
 * @param  {int} x                       The x coordinate of the pixel to read
 * @param  {int} y                       The y coordinate of the pixel to read
 * @return {array/object}                The rgb values of the read pixel
 */
function getCanvasPixelColor(ctx, x, y) {
    // if it's not a context, it's probably a canvas element
    if (!ctx.getImageData) {
        ctx = ctx.getContext('2d');
    }

    // extract the pixel data from the canvas
    var pixel = ctx.getImageData(x, y, 1, 1).data;

    // set each color property
    pixel.r = pixel[0];
    pixel.g = pixel[1];
    pixel.b = pixel[2];
    pixel.a = pixel[3];

    // convenience CSS strings
    pixel.rgb = 'rgb(' + pixel.r + ',' + pixel.g + ',' + pixel.b + ')';
    pixel.rgba = 'rgba(' + pixel.r + ',' + pixel.g + ',' + pixel.b + ',' + pixel.a + ')';

    return pixel;
};



//заливка цветом
function floodFill(x, y, imageData) {
    // debugger
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var width = imageData.width;
    var height = imageData.height;
    var stack = [
        [x, y]
    ];
    // debugger
    var pixel;
    var point = 0;
    var stoneXY = [x, y, x, y]
    //          [min x,y, max x,y]   
    // debugger

    while (stack.length > 0) {
        pixel = stack.pop();
        if (pixel[0] < 0 || pixel[0] >= width)
            continue;
        if (pixel[1] < 0 || pixel[1] >= height)
            continue;

        // Alpha
        // point = pixel[1] * 4 * width + pixel[0] * 4 + 3;

        // Green-канал
        point = pixel[1] * 4 * width + pixel[0] * 4 + 2;
        let borderColor = 250;
        let color = 128;
        // Если это не рамка и ещё не закрасили
        if (imageData.data[point] >= borderColor && imageData.data[point] != color) {
            // Закрашиваем
            imageData.data[point] = color;

            // Ставим соседей в стек на проверку
            stack.push([
                pixel[0] - 1,
                pixel[1]
            ]);
            stack.push([
                pixel[0] + 1,
                pixel[1]
            ]);
            stack.push([
                pixel[0],
                pixel[1] - 1
            ]);
            stack.push([
                pixel[0],
                pixel[1] + 1
            ]);
            //обновляем [min x,y, max x,y] координаты:
            if (stoneXY[0] > pixel[0]) { stoneXY[0] = pixel[0] };
            if (stoneXY[1] > pixel[1]) { stoneXY[1] = pixel[1] };
            if (stoneXY[2] < pixel[0]) { stoneXY[2] = pixel[0] };
            if (stoneXY[3] < pixel[1]) { stoneXY[3] = pixel[1] };

        }
    }
    stoneXY[4] = stoneXY[2] - stoneXY[0];
    stoneXY[5] = stoneXY[3] - stoneXY[1];

    //второй этап - закрашивание серых областей:

    // if ((stoneXY[4] > 5) && (stoneXY[5] > 5)) {
    //     // debugger



    //     stack = [
    //         [stoneXY[0] + Math.floor(stoneXY[4] / 2), stoneXY[1] + Math.floor(stoneXY[5] / 2)]
    //     ];
    //     let point1, point2, point3, point4, point6, point7, point8, point9;

    //     while (stack.length > 0) {
    //         pixel = stack.pop();
    //         if (pixel[0] < 0 || pixel[0] >= width)
    //             continue;
    //         if (pixel[1] < 0 || pixel[1] >= height)
    //             continue;

    //         // Alpha
    //         // point = pixel[1] * 4 * width + pixel[0] * 4 + 3;

    //         // Green-канал
    //         point = pixel[1] * 4 * width + pixel[0] * 4 + 2;

    //         point1 = (pixel[1] + 1) * 4 * width + (pixel[0] - 1) * 4 + 2;
    //         point2 = (pixel[1] + 1) * width + pixel[0] * 4 + 2;
    //         point3 = (pixel[1] + 1) * 4 * width + (pixel[0] + 1) * 4 + 2;
    //         point4 = pixel[1] * 4 * width + (pixel[0] - 1) * 4 + 2;

    //         point6 = pixel[1] * 4 * width + (pixel[0] + 1) * 4 + 2;
    //         point7 = (pixel[1] - 1) * 4 * width + (pixel[0] - 1) * 4 + 2;
    //         point8 = (pixel[1] - 1) * 4 * width + pixel[0] * 4 + 2;
    //         point9 = (pixel[1] + 1) * 4 * width + (pixel[0] + 1) * 4 + 2;

    //         borderColor = 130;
    //         color = 128;
    //         let whiteColor = 250

    //         // Если это не рамка и ещё не закрасили
    //         if (((imageData.data[point1] >= color) && (imageData.data[point1] < whiteColor)) &&
    //             ((imageData.data[point2] >= color) && (imageData.data[point2] < whiteColor)) &&
    //             ((imageData.data[point3] >= color) && (imageData.data[point3] < whiteColor)) &&
    //             ((imageData.data[point4] >= color) && (imageData.data[point4] < whiteColor)) &&
    //             ((imageData.data[point] >= color) && (imageData.data[point] < whiteColor)) &&
    //             ((imageData.data[point6] >= color) && (imageData.data[point6] < whiteColor)) &&
    //             ((imageData.data[point7] >= color) && (imageData.data[point7] < whiteColor)) &&
    //             ((imageData.data[point8] >= color) && (imageData.data[point8] < whiteColor)) &&
    //             ((imageData.data[point9] >= color) && (imageData.data[point9] < whiteColor))
    //         ) {
    //             // Закрашиваем
    //             imageData.data[point] = color;

    //             // Ставим соседей в стек на проверку
    //             stack.push([
    //                 pixel[0] - 1,
    //                 pixel[1]
    //             ]);
    //             stack.push([
    //                 pixel[0] + 1,
    //                 pixel[1]
    //             ]);
    //             stack.push([
    //                 pixel[0],
    //                 pixel[1] - 1
    //             ]);
    //             stack.push([
    //                 pixel[0],
    //                 pixel[1] + 1
    //             ]);
    //             //обновляем [min x,y, max x,y] координаты:
    //             if (stoneXY[0] > pixel[0]) { stoneXY[0] = pixel[0] };
    //             if (stoneXY[1] > pixel[1]) { stoneXY[1] = pixel[1] };
    //             if (stoneXY[2] < pixel[0]) { stoneXY[2] = pixel[0] };
    //             if (stoneXY[3] < pixel[1]) { stoneXY[3] = pixel[1] };

    //         }


    //     }




    // }





    ctx.putImageData(imageData, 0, 0);
    stoneXY[4] = stoneXY[2] - stoneXY[0];
    stoneXY[5] = stoneXY[3] - stoneXY[1];
    if ((stoneXY[4] > 5) && (stoneXY[5] > 5)) {
        stoneXY[6] = ctx.getImageData(stoneXY[0] - 3, stoneXY[1] - 3, stoneXY[4] + 6, stoneXY[5] + 6);


        return stoneXY;
    }

    return false;
}