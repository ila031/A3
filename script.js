// Function to reset the frame
function resetFrame() {
    const frame = document.querySelector('.frame');
    const topSection = document.querySelector('.top');
    const bottomSection = document.querySelector('.bottom');
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const mountains = document.querySelector('.mountains');

    // Reset frame border color
    frame.style.borderColor = '#333';

    // Reset top and bottom sections' background color
    topSection.style.backgroundColor = 'lightblue';
    bottomSection.style.backgroundColor = 'lightgreen';

    // Reset celestial bodies
    sun.style.display = 'none';
    moon.style.display = 'none';

    // Reset mountains
    mountains.style.display = 'none';

    // Remove all trees
    const trees = bottomSection.querySelectorAll('.tree');
    trees.forEach(tree => tree.remove());

    // Remove all clouds
    const clouds = topSection.querySelectorAll('.cloud');
    clouds.forEach(cloud => cloud.remove());

    // Remove all existing snowflakes
    const snowflakes = topSection.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => snowflake.remove());
    snowActive = false; // Reset snowActive flag to stop snowing

    // Reset snowflakes interval
    if (snowInterval) {
        clearInterval(snowInterval);
    }
}

// Event listener for the Reset button
document.querySelector('.reset-btn').addEventListener('click', resetFrame);

document.addEventListener('keydown', (event) => {
    const frame = document.querySelector('.frame');
    const topSection = document.querySelector('.top');
    const bottomSection = document.querySelector('.bottom');
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const mountains = document.querySelector('.mountains');

    if (event.key === 'f' || event.key === 'F') {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        frame.style.borderColor = randomColor;
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        topSection.style.backgroundColor = randomColor;
    }

    if (event.key === 'ArrowUp') {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        bottomSection.style.backgroundColor = randomColor;
    }

    if (event.key.toLowerCase() === 's') {
        sun.style.display = (sun.style.display === 'none' || sun.style.display === '') ? 'block' : 'none';
    }

    if (event.key.toLowerCase() === 'm') {
        moon.style.display = (moon.style.display === 'none' || moon.style.display === '') ? 'block' : 'none';
    }

    if (event.key.toLowerCase() === 'r') {
        mountains.style.display = (mountains.style.display === 'none' || mountains.style.display === '') ? 'flex' : 'none';
    }

    if (event.key.toLowerCase() === 't') {
        spawnTree();
    }

    if (event.key.toLowerCase() === 'c') {
        spawnCloud();
    }

    if (event.key.toLowerCase() === 'x') {
        startFallingSnow();
    }
});

// Function to spawn a tree at a random position on the bottom
function spawnTree() {
    const bottomSection = document.querySelector('.bottom');
    const tree = document.createElement('div');
    tree.classList.add('tree');
    tree.style.left = `${Math.random() * 90 + 5}%`;
    bottomSection.appendChild(tree);
}

// Function to spawn a cloud
function spawnCloud() {
    const topSection = document.querySelector('.top');
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.style.top = `${Math.random() * 30 + 10}px`; 
    topSection.appendChild(cloud);

    setTimeout(() => cloud.remove(), 15000); // Clouds disappear after 15 seconds
}

let snowActive = false;
let snowInterval;  // Variable to store interval for snowflakes

// Function to spawn snowflakes and make them fall from top to bottom
function startFallingSnow() {
    if (!snowActive) {
        snowActive = true;
        const topSection = document.querySelector('.top');
        
        // Create snowflakes every 300ms
        snowInterval = setInterval(() => {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            
            // Randomize snowflake's horizontal starting position
            snowflake.style.left = `${Math.random() * 100}%`;
            snowflake.style.top = '0px'; // Start snowflakes at the top
            
            topSection.appendChild(snowflake);
            snowflake.style.animation = 'fall 5s linear forwards';
            setTimeout(() => snowflake.remove(), 5000); // Remove snowflake after 5s
        }, 300); // snowflakes every 300ms
    }
}

// Event listener for reset button
document.querySelector('.reset-btn').addEventListener('click', resetFrame);

document.querySelector('header').addEventListener('click', function() {
    for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`; 
        document.body.appendChild(star);

        setTimeout(() => star.remove(), 5000);
    }
});
