(async () => {
  const rc = rough.canvas(document.getElementById('canvas'),
    {
      options: {
        simplification: 0.2, roughness: 0.5
      }
    });
  const width = 960, height = 1160;
  const projection = d3.geo.albers()
      .center([0, 55.4])
      .rotate([4.4, 0])
      .parallels([50, 60])
      .scale(6000)
      .translate([width / 2, height / 2]);
  const path = d3.geo.path()
      .projection(projection);
  const randomColor = () => {
    let r = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    return r;
  }
  const randomAngle = () => {
    return (Math.random() > 0.5 ? -1 : 1) * (1 + Math.random() * 88);
  }
  const randomStyle = () => {
    return (Math.random() > 0.5 ? 'solid' : '');
  }
  d3.json("./theo/js/uk.json", async (error, uk) => {
    if (error) throw error;
    console.log(uk);
    let topo = topojson.feature(uk, uk.objects.GBR_adm2).features;
    for (let feature of topo) {
      await rc.path(path(feature), {
        fill: randomColor(),
        fillStyle: randomStyle(),
        hachureAngle: randomAngle()
      });
    }
  });
})();
