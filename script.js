function showDialog() {
    document.getElementById('background').style.display = 'flex';
    document.getElementById('messageDialog').style.display = 'block';
}

function closeDialog() {
    document.getElementById('messageDialog').style.display = 'none';
    document.getElementById('confirmCloseDialog').style.display = 'block';
}

function confirmClose(answer) {
    if (answer) {
        document.getElementById('confirmCloseDialog').style.display = 'none';
        document.getElementById('readyDialog').style.display = 'block';
    } else {
        document.getElementById('confirmCloseDialog').style.display = 'none';
        document.getElementById('messageDialog').style.display = 'block';
    }
}

function ready(answer) {
    if (answer) {
        document.getElementById('readyDialog').style.display = 'none';
        document.getElementById('warningDialog').style.display = 'block';
        
        // Change overlay to black
        document.getElementById('background').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        
        // Vibrate for 3 seconds
        if (navigator.vibrate) {
            navigator.vibrate(3000);
        }

        const audio = document.getElementById('alertSound');
        audio.play();

        // Start the loading animation
        const loadingDiv = document.querySelector('.loading');
        loadingDiv.style.animation = 'loading 1s infinite';

        setTimeout(() => {
            window.location.href = 'https://www.facebook.com';
        }, 3000); // Redirect after 3 seconds
    } else {
        document.getElementById('readyDialog').style.display = 'none';
        const heart = document.getElementById('heart');
        heart.style.display = 'block';
        setTimeout(() => {
            heart.style.display = 'none';
        }, 3000);
    }
}
