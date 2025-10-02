document.addEventListener('mousemove', function(e) {
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    document.body.appendChild(dot);

    // Subtract HALF the dot's width/height (e.g., 32px / 2 = 16px) to center it
    dot.style.left = (e.pageX - 16) + 'px';
    dot.style.top = (e.pageY - 16) + 'px';

    // ... (rest of the fade-out code remains the same)

    // 1. Give the browser a tiny moment to position the dot (10ms)
    setTimeout(() => {
        // 2. Trigger the Fade: Instantly set the dot to its final, faded state
        dot.style.opacity = '0'; // Starts the fade from 1 to 0
        dot.style.transform = 'scale(1)'; // Starts the shrink effect
    }, 10);

    // 3. Cleanup: Remove the dot completely after the transition is finished (500ms = 0.5s)
    setTimeout(() => {
        dot.remove();
    }, 500); 
});