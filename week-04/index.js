// With help of https://youtu.be/C4t6qfHZ6Tw

function lesson07() {
  const dataset = [80, 100, 42, 22, 88, 99, 180];
  const svgWidth = 400, svgHeight = 240;

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

function lesson08() {
  const svgWidth = 400, svgHeight = 240;

  const svg = d3.select('body')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .attr('class', 'svg-container');

  const line = svg.append('line')
    .attr('x1', 100)
    .attr('x2', 280)
    .attr('y1', 50)
    .attr('y2', 50)
    .attr('stroke', 'red')
    .attr('stroke-width', 5);

  const rect = svg.append('rect')
    .attr('x', 100)
    .attr('y', 100)
    .attr('width', 100)
    .attr('height', 50)
    .attr('fill', 'gold');

  const circle = svg.append('circle')
    .attr('cx', 280)
    .attr('cy', 130)
    .attr('r', 50)
    .attr('fill', '#f80');
}

function lesson09() {
  const data = [
    { kind: 'love', share: 13.37 },
    { kind: 'hate', share: 27.22 },
    { kind: 'fear', share: 24.55 },
    { kind: 'happiness', share: 30.55 },
  ];

  const svgWidth = 240,
        svgHeight = 240,
        radius = (Math.min(svgWidth, svgHeight)) / 2;

  const svg = d3.select('body')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

    const g = svg.append('g')
      .attr('transform', `translate(${radius}, ${radius})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d.share);

    const path = d3.arc()
      .outerRadius(radius)
      .innerRadius(0);

    const arc = g.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g');

    arc.append('path')
      .attr('d', path)
      .attr('fill', d => color(d.data.share));

    const label = d3.arc()
      .outerRadius(radius)
      .innerRadius(0);

    arc.append('text')
      .attr('transform', d => `translate(${label.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text(d => `${d.data.kind} (${d.data.share})`);
}

function lesson10() {
  const data = [
    { date: new Date('2018-05-18'), value: 81 },
    { date: new Date('2018-05-19'), value: 87 },
    { date: new Date('2018-05-20'), value: 83 },
    { date: new Date('2018-05-21'), value: 63 },
    { date: new Date('2018-05-22'), value: 123 },
    { date: new Date('2018-05-23'), value: 103 },
    { date: new Date('2018-05-24'), value: 176 },
    { date: new Date('2018-05-25'), value: 168 },
    { date: new Date('2018-05-26'), value: 197 },
    { date: new Date('2018-05-27'), value: 208 },
    { date: new Date('2018-05-28'), value: 188 },
    { date: new Date('2018-05-29'), value: 209 },
    { date: new Date('2018-05-30'), value: 219 },
    { date: new Date('2018-05-31'), value: 214 },
    { date: new Date('2018-06-01'), value: 255 },
  ];

  const svgDimensions = { width: 500, height: 400 };

  const margins = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  };

  const svgDimensionsInner = {
    width: svgDimensions.width - margins.left - margins.right,
    height: svgDimensions.height - margins.top - margins.bottom,
  };

  const svg = d3.select('body')
    .append('svg')
    .attr('width', svgDimensions.width)
    .attr('height', svgDimensions.height);

  const g = svg.append('g')
    .attr('transform', `translate(${margins.left}, ${margins.top})`);

  const x = d3.scaleTime().rangeRound([0, svgDimensionsInner.width]);
  const y = d3.scaleLinear().rangeRound([svgDimensionsInner.height, 0]);

  const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.value));

  x.domain(d3.extent(data, d => d.date));
  y.domain([0, d3.max(data, d => d.value)]);

  g.append('g')
    .attr('transform', `translate(0, ${svgDimensionsInner.height})`)
    .call(d3.axisBottom(x))
    .select('.domain')
    .remove();

  g.append('g')
    .call(d3.axisLeft(y))
    .append('text')
    .attr('fill', '#138')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Vals (unitless)');

  g.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'navy')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.5)
    .attr('d', line);

}

lesson10();
lesson09();
lesson08();
lesson07();

