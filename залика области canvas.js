// http://jsfiddle.net/SSh2C/


var ClickMode = {
    Paint: 0,
    Fill: 1
};
var mouseDown = false;
var currentMode = ClickMode.Paint;
var ctx = $('#canvas').get(0).getContext('2d');
ctx.lineWidth = 3;
var lastPoint = {x: 0, y: 0};

$('#canvas').mousedown(function(event){
    if (currentMode == ClickMode.Paint)
    {
        mouseDown = true;
        lastPoint.x = event.offsetX;
        lastPoint.y = event.offsetY;
    }
    else
        floodFill(event.offsetX, event.offsetY, 255, 255);
    return false;
}).mousemove(function(event){
    if (mouseDown)
    {
        ctx.beginPath();
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        
        lastPoint.x = event.offsetX;
        lastPoint.y = event.offsetY;
    }
}).mouseup(function(){
    mouseDown = false;
    return false
});

$('a').click(function(){
    var mode = $(this).attr('href').slice(1);
    switch(mode)
    {
        case "fill":
            currentMode = ClickMode.Fill;
            break;
       case "clear":
            ctx.clearRect(0, 0, 300, 300);
       case "paint":
            currentMode = ClickMode.Paint;
            break;
    }
    return false;
});
function floodFill(x, y, color, borderColor){
    var imageData = ctx.getImageData(0, 0, 300, 300);
    var width = imageData.width;
    var height = imageData.height;
    var stack = [[x, y]];
    var pixel;
    var point = 0;
    while (stack.length > 0)
    {   
        pixel = stack.pop();
        if (pixel[0] < 0 || pixel[0] >= width)
            continue;
        if (pixel[1] < 0 || pixel[1] >= height)
            continue;
        
        // Alpha
        point = pixel[1] * 4 * width + pixel[0] * 4 + 3;
        
        // Если это не рамка и ещё не закрасили
        if (imageData.data[point] != borderColor && imageData.data[point] != color)
        {
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
        }
    }
    ctx.putImageData(imageData, 0, 0);
}