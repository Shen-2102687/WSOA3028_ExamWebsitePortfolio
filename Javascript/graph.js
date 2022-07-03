const labels = [
    'C++',
    'C#',
    'Assembly',
    'Javascript',
    'HTML, CSS',
    'Unity Game Engine',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Skills and Experience Level',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [3, 3, 1, 1, 1, 3],
      backgroundColor:[
        'rgb(98, 209, 157)',
        'rgb(98, 165, 209)',
        'rgb(242, 193, 124)',
        'rgb(240, 129, 190)',
        'rgb(247, 109, 109)',
        'rgb(120, 227, 227)'
      ],
    }]
  };

  /*const config = {
    type: 'line',
    data: data,
    options: {}
  };*/

  const config = {
    type: 'bar',
    data,
    options: {
      indexAxis: 'y',
      /*responsive: true,*/
      plugins:{
        legend:{
            display: false
        },
      }
    }
  };

  const myChart = new Chart(
    document.getElementById('barGraph'),
    config
  );