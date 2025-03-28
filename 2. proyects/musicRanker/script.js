document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');
    const scores = document.querySelectorAll('.score');
    const totalScoreElement = document.getElementById('totalScore');

    const maxValues = {
        escucha: 40,
        gusto: 30,
        aporte: 20,
        bonus: 10
    };

    // Inicializar los sliders en el medio
    sliders.forEach((slider, index) => {
        const bar = slider.parentElement;
        const barHeight = bar.offsetHeight;
        slider.style.bottom = `${barHeight / 2}px`;
    });

    sliders.forEach((slider, index) => {
        let isDragging = false;

        slider.addEventListener('mousedown', function(e) {
            isDragging = true;
        });

        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                const bar = slider.parentElement;
                const barRect = bar.getBoundingClientRect();
                let newPosition = barRect.bottom - e.clientY;
                newPosition = Math.max(-15, Math.min(barRect.height + 15, newPosition));

                const maxValue = maxValues[slider.id.replace('Slider', '').toLowerCase()];
                const step = 5;
                const value = Math.round((newPosition / barRect.height) * maxValue / step) * step;

                const clampedValue = Math.max(0, Math.min(maxValue, value));
                slider.style.bottom = `${(clampedValue / maxValue) * barRect.height}px`;
                scores[index].textContent = clampedValue;
                updateTotalScore();
            }
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
    });

    function updateTotalScore() {
        let totalScore = 0;
        scores.forEach(score => {
            totalScore += parseInt(score.textContent);
        });
        totalScoreElement.textContent = totalScore;
    }
});