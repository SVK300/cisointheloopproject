// Metrics Dashboard JavaScript

// Deployment Success Rate Chart
const deploymentCtx = document.getElementById('deploymentChart').getContext('2d');
new Chart(deploymentCtx, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
        datasets: [{
            label: 'Success Rate (%)',
            data: [85, 87, 89, 91, 90, 92, 92],
            borderColor: 'rgb(16, 185, 129)',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: false,
                min: 80,
                max: 100
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Response Time Chart
const responseTimeCtx = document.getElementById('responseTimeChart').getContext('2d');
new Chart(responseTimeCtx, {
    type: 'bar',
    data: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
        datasets: [{
            label: 'Response Time (ms)',
            data: [120, 115, 135, 145, 140, 130, 125],
            backgroundColor: 'rgba(139, 92, 246, 0.7)',
            borderColor: 'rgb(139, 92, 246)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Usage by Category Chart
const usageCtx = document.getElementById('usageChart').getContext('2d');
new Chart(usageCtx, {
    type: 'doughnut',
    data: {
        labels: ['Threat Detection', 'Compliance', 'Incident Response', 'Risk Assessment', 'Data Protection'],
        datasets: [{
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(0, 47, 94, 0.8)',
                'rgba(139, 92, 246, 0.8)',
                'rgba(249, 168, 37, 0.8)',
                'rgba(16, 185, 129, 0.8)',
                'rgba(239, 68, 68, 0.8)'
            ],
            borderWidth: 2,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Trust Score Trend Chart
const trustTrendCtx = document.getElementById('trustTrendChart').getContext('2d');
new Chart(trustTrendCtx, {
    type: 'line',
    data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
            label: 'Trust Score',
            data: [75, 78, 80, 83, 85, 87],
            borderColor: 'rgb(0, 47, 94)',
            backgroundColor: 'rgba(0, 47, 94, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: false,
                min: 70,
                max: 100
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Simulate live updates for KPIs
function updateKPIs() {
    const trustScore = document.getElementById('trustScore');
    const uptime = document.getElementById('uptime');
    const deployTime = document.getElementById('deployTime');
    const successRate = document.getElementById('successRate');

    // Add subtle animations or variations
    setInterval(() => {
        // Small random variations to simulate live data
        const currentTrust = parseInt(trustScore.textContent);
        const variation = Math.random() > 0.5 ? 0 : (Math.random() > 0.5 ? 1 : -1);
        const newTrust = Math.max(85, Math.min(89, currentTrust + variation));
        trustScore.innerHTML = `${newTrust}<span class="kpi-unit">/100</span>`;
    }, 5000);
}

// Initialize live updates
updateKPIs();

