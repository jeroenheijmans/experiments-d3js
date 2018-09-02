const centerIndex = Math.floor(Math.random() * 100);

function getRandomEmoji(i) {
  const min = 10, max = 40;
  const size = i === centerIndex ? 100 : min + Math.floor(Math.random() * (max - min));

  return {
    char: String.fromCodePoint(128512 + Math.floor((Math.random() * 20))),
    size: size,
    strength: i === centerIndex ? -1000 : (size / max) * -150,
  };
}

const width = 1280, height = 720;

const nodes = d3.range(100).map(i => getRandomEmoji(i));

const manyBody = d3.forceManyBody();

manyBody.strength(d => d.strength);

const simulation = d3.forceSimulation(nodes)
  .on('tick', onTick)
  .velocityDecay(0.1)
  .force('x', d3.forceX())
  .force('y', d3.forceY())
  .force("gravity", manyBody);

const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

svg.selectAll("text")
  .data(nodes)
  .enter().append('svg:text')
  .text(d => d.char)
  .style('font-size', d => `${d.size}px`);

function onTick() {
  svg.selectAll('text')
    .attr('x', d => d.x - (d.size / 2) + (width / 2))
    .attr('y', d => d.y + (d.size / 2) + (height / 2));
}

const mainNode = nodes.find(n => n.size === 100);

svg.on('mousemove', function() {
  const position = d3.mouse(d3.event.currentTarget);
  // TODO (week 10?)
});

