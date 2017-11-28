var chart = d3.select("#milestones");

// var context = chart.node().getContext("2d");

var milestones = document.getElementById('milestones');
var rect = milestones.getBoundingClientRect()
console.log("eita porra")
console.log(chart.node());
width = chart.node().clientWidth;
height = chart.node().clientHeight;	
// console.log("new attempt", rect.width, height)


var chartElements =
          [{
            ID: "1",
            time: "2016 4Q",
            bullet: "EIT Health grant recieved for vizualisation work",
          }, 

          { ID: "2",
            time:"2017 1Q", 
            bullet: "Visualization collaboration with KTH begins – Student projects."},

          { ID: "3",
            time:"2017 2Q", 
            bullet: "eCRF for pilot data collection finalised"},

          { ID: "4",
            time:"2017 3Q", 
            bullet: "SAP for pilot data analysis ready."},

          { ID: "5",
            time:"2017 4Q",
            bullets:  "Lit review manuscript submission"},

          { ID: "6",
            time:"2018 1Q",
            bullets:  "SAP for comorbidity study approved."},
          ];

console.log("omg these are elements", chartElements)          

console.log("chartElements is:", typeof(chartElements));

// This are variables I created to generate specific positions.

// SVG length
length = chartElements.length;
console.log("cool length", length);

// Divide the SVG Position by the number of Milstones
xPos = (width/length);
console.log("this is var newWidth:", xPos);
console.log("typeOf", typeof(xPos));

// Just give some margin.
yPos = (height*0.7);
console.log("this is var newHeight:", yPos);


// A function to set a specific X position to each element.
function defPos() {
  d3.select(this).attr("cx", index*offset);
  index ++;
}

// defPos(chartElements)

var circleData = chartElements;
var circlegroup = chart.append("g")
                            .attr("id", "circlegroup");

var circles = circlegroup.selectAll("circle")
                           .data(circleData)
                           .enter()
                           .append("circle");

var circleAttributes = circles
                       //.attr("cx", function(d){return parseInt(d.ID) * 30})
                       .attr("cy", 30)
                       .attr("r", 10)
                       .style("fill", function (d) { return d.color; });
var index = 1;
var offset = 50;
circles.each(defPos);

d3.json("text-elements.json", function(json) {
    /* Define the data for the circles */
    var elem = svg.selectAll("circlegroup")
        .data(json.nodes)
  
    /*Create and place the "blocks" containing the circle and the text */  
    var elemEnter = elem.enter()
      .append("g")
      .attr("transform", function(d){return "translate("+d.x+",80)"})
 
    /*Create the circle for each block */
    var circle = elemEnter.append("circle")
      .attr("r", function(d){return d.r} )
      .attr("stroke","green")
      .attr("fill", "pink")
 
    /* Create the text for each block */
    elemEnter.append("text")
      .attr("dx", function(d){return -20})
      .text(function(d){return d.time})
})

// var newLines = selectAll("lines")
//                  .data(circleData)
//                  .enter()
//                  .append("line");
// var lineAttr = lines 
//                   .attr("x1", 30)
//                   .attr("y1", 30)
//                   .attr("x2", 60)
//                   .attr("y2", 60)
//                   .attr("stroke-width", 3);


var newLines = chart.append("lines")
                  .attr("x1", 30)
                  .attr("y1", 30)
                  .attr("x2", 60)
                  .attr("y2", 60)
                  .attr("stroke-width", 30);


console.log("wow circles!");
console.log(circlegroup);