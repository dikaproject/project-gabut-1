document.addEventListener('DOMContentLoaded', () => {
    createStars();
    const text = "Happy New Year 2025 Sayang ❤️";
    typeWriter(text, document.getElementById('title'), () => {
        document.getElementById('title').classList.add('rainbow-text');
        document.getElementById('startButton').style.display = 'block';
    });
});

function createStars() {
    const stars = document.getElementById('stars');
    for(let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = '#fff';
        star.style.position = 'absolute';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${Math.random() * 4 + 1}s infinite`;
        stars.appendChild(star);
    }
}

function createHearts() {
    const container = document.getElementById('heartContainer');
    for(let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.fontSize = `${Math.random() * 20 + 20}px`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            container.appendChild(heart);
        }, i * 300);
    }
}
// Add twinkling animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
    }
`;
document.head.appendChild(style);

const messages = [
    "Hai Sayang ❤️\nDi tahun baru ini...",
    "Aku ingin mengucapkan terima kasih\nuntuk semua kenangan indah\nyang telah kita lalui bersama...",
    "Semoga di tahun yang baru ini\nkita bisa terus bersama\ndan membuat lebih banyak kenangan indah...",
    "Aku sayang kamu ❤️\n\nFrom: [Nama Kamu]",
    // Tambahkan pesan sesuai keinginan
];

let currentMessage = 0;

function typeWriter(text, element) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 120);
        }
    }
    type();
}

document.getElementById('startButton').addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
    document.getElementById('bgMusic').play();
    typeWriter(messages[0], document.getElementById('text-content'));
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentMessage++;
    if (currentMessage < messages.length) {
        typeWriter(messages[currentMessage], document.getElementById('text-content'));
    } else {
        // Tampilkan foto di slide terakhir
        document.getElementById('text-content').innerHTML = `
            <div style="text-align: center;">
                <img src="img/foto-kalian.jpg" style="max-width: 100%; border-radius: 10px; margin-top: 20px;">
            </div>
        `;
        document.getElementById('nextBtn').style.display = 'none';
    }
});