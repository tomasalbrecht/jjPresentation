// var myCanvas = document.getElementById("milestones");
// var myCanvasContext = myCanvas[0].getContext("2d");

// var my_canvas = document.getElementById("milestones");
// var context = my_canvas.getContext("2d");



// context.beginPath();
// context.arc(95, 85, 80, 0, 2*Math.PI);
// context.stroke();

// function Rectangle(params) {
//     this.x = params.x || 0;
//     this.y = params.y || 0;
//     this.width = params.width || 0;
//     this.height = params.height || 0;
//     this.fillStyle = params.fillStyle || "#FFFFFF";
//     this.strokeStyle = params.strokeStyle || "#000000";
//     this.lineWidth = params.lineWidth || 0;
// }

// function Circle(params){
// 	this.x = params.x || 0;
//     this.y = params.y || 0;
//     this.width = params.width || 0;
//     this.height = params.height || 0;
//     this.fillStyle = params.fillStyle || "#FFFFFF";
//     this.strokeStyle = params.strokeStyle || "#000000";
//     this.lineWidth = params.lineWidth || 0;
//     this.class = params.class || "circles"
// }

// Rectangle.prototype.draw = function () {
//     if (this.fillStyle) {
//         context.fillStyle = this.fillStyle;
//         context.fillRect(this.x, this.y, this.width, this.height)
//     }
//     if (this.strokeStyle && this.lineWidth) {
//         context.strokeStyle = this.strokeStyle;
//         context.lineWidth = this.lineWidth;
//         context.strokeRect(this.x, this.y, this.width, this.height);
//     }
// }

// Circle.prototype.draw = function () {
//     if (this.fillStyle) {
//         context.fillStyle = this.fillStyle;
//         context.fillRect(this.x, this.y, this.width, this.height)
//     }
//     if (this.strokeStyle && this.lineWidth) {
//         context.strokeStyle = this.strokeStyle;
//         context.lineWidth = this.lineWidth;
//         context.strokeRect(this.x, this.y, this.width, this.height);
//     }
// }

// rectangles = [
//     new Rectangle({
//         x: 10,
//         y: 10,
//         width: 300,
//         height: 150,
//         fillStyle: "#FF0000"
//     }),
//     new Rectangle({
//         x: 250,
//         y: 10,
//         width: 100,
//         height: 80,
//         fillStyle: "#00FF00",
//         strokeStyle: "#00AA00",
//         lineWidth: 5
//     }),
//     new Rectangle({
//         x: 10,
//         y: 200,
//         width: 250,
//         height: 80,
//         strokeStyle: "#FF0000",
//         lineWidth: 1
//     })
// ]

// circles = [
//     new Circle({
//         x: 10,
//         y: 10,
//         width: 300,
//         height: 150,
//         fillStyle: "#FF0000"
        
//     }),
//     new Circle({
//         x: 250,
//         y: 10,
//         width: 100,
//         height: 80,
//         fillStyle: "#00FF00",
//         strokeStyle: "#00AA00",
//         lineWidth: 5
//     }),
//     new Circle({
//         x: 10,
//         y: 200,
//         width: 250,
//         height: 80,
//         strokeStyle: "#FF0000",
//         lineWidth: 1
//     })
// ]

// for (var i = 0; i < circles.length; ++i) {
//     circles[i].draw();
// }