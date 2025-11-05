function renderChart(patient) {
  const ctx = document.getElementById('bpChart').getContext('2d');
  const data = patient.diagnosis_history.map(d => ({
    year: new Date(d.date).getFullYear(),
    systolic: d.blood_pressure.systolic.value,
    diastolic: d.blood_pressure.diastolic.value
  }));

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(d => d.year),
      datasets: [
        {
          label: 'Systolic',
          data: data.map(d => d.systolic),
          borderColor: '#ff6384',
          fill: false
        },
        {
          label: 'Diastolic',
          data: data.map(d => d.diastolic),
          borderColor: '#36a2eb',
          fill: false
        }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}
