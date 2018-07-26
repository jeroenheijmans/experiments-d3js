// With help of https://youtu.be/C4t6qfHZ6Tw

function lesson01() {
  d3.select('h1')
    .style('color', 'red')
    .attr('class', 'heading')
    .text('Updated from D3!');

  d3.select('body').append('p').text('Para 1 added from d3');
  d3.select('body').append('p').text('Para 2 added from d3');
  d3.select('body').append('p').text('Para 3 added from d3');

  d3.selectAll('p').style('color', 'blue');
}

function lesson02() {
  const dataset = [1, 2, 3, 4, 5];

  d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text(d => 'Hello ' + d);
}

function lesson03() {
  const dataset = [80, 100, 42, 22, 88, 99, 180];
  const svgWidth = 300, svgHeight = 100, barPadding = 5;
  const barWidth = svgWidth / dataset.length;

  const svg = d3.select('body')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

  const barchart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', d => svgHeight -d)
    .attr('height', d => d)
    .attr('width', barWidth - barPadding)
    .attr('transform', (_, index) => `translate(${[barWidth * index, 0]})`);
}

function lesson04() {
  const dataset = [80, 100, 42, 22, 88, 99, 180];
  const svgWidth = 300, svgHeight = 100, barPadding = 5;
  const barWidth = svgWidth / dataset.length;

  const svg = d3.select('body')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

  const barchart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', d => svgHeight - d)
    .attr('height', d => d)
    .attr('width', barWidth - barPadding)
    .attr('transform', (_, index) => `translate(${[barWidth * index, 0]})`);

  const texts = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(d => d)
    .attr('y', d => svgHeight - d - 2)
    .attr('x', (_, index) => (barWidth * index));
}

function lesson05() {
  const dataset = [1, 7, 2, 4, 8];
  const svgWidth = 300, svgHeight = 100, barPadding = 5;
  const barWidth = svgWidth / dataset.length;

  const svg = d3.select('body')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);

  const barchart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', d => svgHeight - yScale(d))
    .attr('height', d => yScale(d))
    .attr('width', barWidth - barPadding)
    .attr('transform', (_, index) => `translate(${[barWidth * index, 0]})`);

  const texts = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(d => d)
    .attr('y', d => svgHeight - yScale(d) - 2)
    .attr('x', (_, index) => (barWidth * index));
}

function lesson06() {
  const dataset = [80, 100, 42, 22, 88, 99, 180];
  const svgWidth = 300, svgHeight = 220;

  const svg = d3.select('body')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgWidth]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([svgHeight, 0]);

  const xAxis = d3.axisBottom().scale(xScale);
  const yAxis = d3.axisLeft().scale(yScale);

  svg.append('g')
    .attr('transform', 'translate(50, 10)')
    .call(yAxis);

  svg.append('g')
    .attr('transform', `translate(50, ${svgHeight - 20})`)
    .call(xAxis);
}

lesson06();
lesson05();
lesson04();
lesson03();
lesson02();
lesson01();

