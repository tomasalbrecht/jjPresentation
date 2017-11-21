var chart = d3.select("#bCell");
var milestones = document.getElementById('bCell');
var rect = milestones.getBoundingClientRect()

console.log(chart.node());
width = chart.node().clientWidth;
height = 2*chart.node().clientHeight;	

var chartElements =
          [{
            ID: "1",
            time: "2016 4Q",
            bullet: "Prel results Study 5",
          }, 

          { ID: "2",
            time:"2017 1Q", 
            bullet: "Data collection preparation for phase 2 (DLBCL). Abstract Lugano (study 5)"},

          { ID: "3",
            time:"2017 2Q", 
            bullet: "Data collection phase 1 (FL) to commence   eCRF DLBCL studies finalized  Oral presentation Lugano (Study 5)"},

          { ID: "4",
            time:"2017 3Q", 
            bullet: "Roll-out data phase 2 (DLBCL) eCRF FL studies finalized",
          },

          { ID: "5",
            time:"2017 4Q",
            bullet: " SAP DLBCL study  SAP FL pilot study  Pilot data collection FL study Manuscript Study 5 submitted to JCO"},

          { ID: "6",
            time:"2018 1Q",
            bullet:  "Analysis FL pilot study ready Full data collection FL study start Abstract EHA (DLBCL)."},

          { ID: "7",
            time:"2018 2Q",
            bullet:  "SAP FL study ready"}
          ];




// SVG length
length = chartElements.length;
console.log("cool length", length);

xPos = (width/length);
yPos = (height*0.7);

var index = 1;
var offset = 85;

// A function to set a specific X position to each element.

var circleData = chartElements;

var circlegroup = chart.append("g")
                            .attr("id", "circlegroup");

var bullets = chart.append("g")
                            .attr("id", "bullets");


// Create a Line // 

var line = circlegroup.append("line")

var elements = chart.selectAll("circle")
                           .data(circleData);

var elmEnter = elements.enter()
                       .append("g");


var rects = elmEnter.append("rect");
var circles = elmEnter.append("circle");
var titles = elmEnter.append("text");
var bullets = elmEnter.append("text");


var rectAttributes = rects
                    .attr("class", "superBox") //this class here gives width
                    .attr("width", "12.5%")
                    .attr("height", 150)
                    .attr("fill", "rgba(0, 0, 50, 0.5)")
                    .attr("transform", function(d, i) {
                      return "translate(" + [i*xPos, 30] + ")"
                    });;

var lineAttributs = line
                    .attr("stroke", "black")
                    .attr("stroke-width", 4)
                    .attr("opacity", 0.8)  // colour the line
                    .attr("x1", function(d){return  65.2})     // x position of the first end of the line
                    .attr("y1", 30)      // y position of the first end of the line
                    .attr("x2", function(d){return 5*xPos +  65.2})     // x position of the second end of the line
                    .attr("y2", 30)

var circleAttributes = circles
                       .attr("cx", function(d, i){ return i * xPos +  65.2 })
                       .attr("cy", 30)
                       .attr("r", 25)
                       .attr("class", "circles")


var textAtributes = titles
                    .attr("class", "titles")
                    .attr("margin", "2px")
                    .text(function (d) {return d.time})
                    .attr("transform", function(d, i) {
                      return "translate(" + [i*xPos+(62.5/2), 0] + ")"
                    });

var bulletAtributes = bullets
                    .attr("class", "bullets")
                    .text(function (d) {return d.bullet})
                    .attr("y", 65)
                    .attr("dy", 1)
                    .style("margin", "20px")
                    .attr("transform", function(d, i) {
                      return "translate(" + [i*xPos, 0] + ")"
                    });
                   

function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 10).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 10).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
    console.log("this function works!")
}


wrap(bullets, 120)

function defPos() {
  d3.select(this).attr("cx", index*offset);
  index ++;

}// defPos(chartElements)


// circles.each(defPos);
// text.each(defPos);


