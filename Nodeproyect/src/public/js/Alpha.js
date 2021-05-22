$(document).ready( function () {
    $('#myTable').DataTable();
} );

let nombres = document.querySelectorAll(".nombres");
let listar = [];

let niveles = document.querySelectorAll(".niveles");
let listarnivel = []
for (let i = 0; i < nombres.length; i++) {
    //push
    listar.push(nombres[i].textContent)
    listarnivel.push(niveles[i].textContent)
}

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: listar,
        datasets: [{
            label: '# of Votes',
            data: listarnivel,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});