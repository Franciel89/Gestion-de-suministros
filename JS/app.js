

// funcion del grafico 


const ctx = document.getElementById('ventasChart').getContext('2d');

const ventasChart = new Chart(ctx, {
  type: 'doughnut', // Tipo de gráfico
  data: {
    datasets: [{
      data: [10, 10, 9, 9, 8, 7, 9], // Porcentajes o valores
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#f3e70aff'
      ],
      borderWidth: 5    // Espacio entre los elementos
    }]
  },
  options: {
    responsive: true,
  }
});

