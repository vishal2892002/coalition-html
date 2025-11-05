fetch('https://fedskillstest.coalitiontechnologies.workers.dev')
  .then(res => res.json())
  .then(data => {
    const jessica = data.find(p => p.name === "Jessica Taylor");
    renderPatientInfo(jessica);
    renderChart(jessica);
  })
  .catch(err => console.error(err));
