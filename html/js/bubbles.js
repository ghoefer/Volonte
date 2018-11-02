



var nodes = new vis.DataSet([
  {label: "Animals"},
  {label: "Adoption"},
  {label: "Children"},
  {label: "Fundraising"},
  {label: "Women"},
  {label: "Hospital"},
  {label: "Elderly Care"},
  {label: "Health"},
  {label: "Long Term"},
  {label: "Social"},
]);
var edges = new vis.DataSet();

var container = document.getElementById('bubbles');
var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  nodes: {borderWidth:0,shape:"circle",
  color:{background:'#FFA480',
  highlight:{background:'#fd8657', border: '#fd8657'}},
  font:{color:'#fff'}},
  physics: {
    stabilization: false,
    minVelocity:  0.01,
    solver: "repulsion",
    repulsion: {
      nodeDistance: 40
    }
  }
};
var network = new vis.Network(container, data, options);


// Events
network.on("click", function(e) {
  if (e.nodes.length) {
    var node = nodes.get(e.nodes[0]);
    // Do something
    nodes.update(node);
  }
});

$('back').click(function(){
    location.href='landing.html'
})
