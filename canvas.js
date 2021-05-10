function draw(img) {
    // body...
    console.log("draw");


    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);


}


let stonesArray = [];
let testPointsVvalue = 0
// canvas.addEventListener('click', getStonesArray); // 
function getStonesArray() {
    console.log("getStonesArray start");
    console.time("getStonesArray");
    // debugger

    var image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    let point;
    let stoneDimentions;
    // for (var i = 1; i < imageData.length; i += 4 * 5) {
    //     let row = Math.floor((i - 1) / 4 / width);
    //     if (row % 5) {} else { i += width * 5 }
    //     // Green-канал
    //     point = imageData[i];
    //     if (point > 250) {
    //         // debugger
    //         y = Math.floor((i - 1) / 4 / width);
    //         x = ((i - 1) / 4) % width - 1;
    //         stonesArray.push(floodFill(x, y, image));
    //         imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    //         testPointsVvalue++;
    //         if (testPointsVvalue > 30000) { debugger }
    //     }

    // }

    for (var y = 0; y < height; y += 5) {
        for (var x = 0; x < width; x += 5) {
            point = imageData[(y * width + x) * 4 + 2];
            if (point === 255) {

                stoneDimentions = floodFill(x, y, image);
                if (stoneDimentions) { stonesArray.push(stoneDimentions) };



                imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                testPointsVvalue++;
                if (testPointsVvalue > 10000) { debugger }
            }



        }
    }
    // ctx.putImageData(image, 0, 0);
    console.log("END!!!! testPointsVvalue:", testPointsVvalue);
    console.log("stonesArray.length:", stonesArray.length);
    console.timeEnd("getStonesArray");
}





function isWhite(greenChannel) {
    // debugger

    // extract the pixel data from the canvas
    imageData

    // set each color property


    let color = (pixel.data[0] + pixel.data[1] + pixel.data[2]) / 3;
    // stonesArray.push(color)
    // if (color > 250) {
    //     pixel.data[0] = 0;
    //     pixel.data[1] = 0;
    //     pixel.data[2] = 0;
    //     // debugger
    //     ctx.putImageData(pixel, x, y);

    // }
    if (color > 250) { return true } else { return false }

}



function drawFromStonesArray() {
    var width = canvas.width;
    var height = canvas.height;
    // ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, width, height);
    var maxStoneDimetinon = findMaxStoneDimetinon()
    var cursor = [maxStoneDimetinon[0],maxStoneDimetinon[1]];
    for (var i = 0; i < stonesArray.length; i++) {
        let fragment = stonesArray[i][6];
        // debugger
        // var fragment = ctx.getImageData(stonesArray[i][0], stonesArray[i][1], stonesArray[i][4], stonesArray[i][5]);
        ctx.putImageData(fragment, cursor[0], cursor[1]);

        cursor[0] = cursor[0] + maxStoneDimetinon[0] * 2;
        if (cursor[0] + maxStoneDimetinon[0]  > width) {
            cursor[0] = maxStoneDimetinon[0];
            cursor[1] = cursor[1] + maxStoneDimetinon[1] * 2;

        }
        // ctx.putImageData(fragment, stonesArray[i][0] - 3, stonesArray[i][1] - 3);




    }
}



function findMaxStoneDimetinon() {
    let x = 0,
        y = 0;

    for (var i = 0; i < stonesArray.length; i++) {
        x < stonesArray[i][4] ? x = stonesArray[i][4] : x = x;
        y < stonesArray[i][5] ? y = stonesArray[i][4] : y = y;
    }

    console.log("maxStoneDimetinon", x, y);
    return [x, y]
}