window.addEventListener("load", () => {
    const music = document.getElementById("bg-music");
    music.volume = 0.5; // soft romantic volume 💖
    music.play().catch(() => {
        // autoplay blocked until user interacts
        document.body.addEventListener("click", () => {
            music.play();
        }, { once: true });
    });
});
function showSurprise() {
    document.getElementById("surprise").classList.remove("hidden");

    const bgMusic = document.getElementById("bg-music");
    bgMusic.volume = 0.5;

    bgMusic.play().catch(() => {
        console.log("Autoplay blocked until user interaction");
    });
}
function playVoiceNote() {
    const bgMusic = document.getElementById("bg-music");
    const voice = document.getElementById("voice-note");

    bgMusic.volume = 0.15; // lower bgm
    voice.currentTime = 0;
    voice.play();

    voice.onended = () => {
        bgMusic.volume = 0.5; // restore bgm
    };
}
// Floating hearts animation (video filter style)
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 300);
const music = document.getElementById("bg-music");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
}, 5000);

// Q1 YES → show Q2
function yesClicked() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup2").style.display = "flex";
}

// Q2 YES → show Q3
function q2Yes() {
    document.getElementById("popup2").style.display = "none";
    document.getElementById("popup3").style.display = "flex";
}

// Q3 YES → FINAL romantic moment 💖
function q3Yes() {
    document.getElementById("popup3").style.display = "none";

    const ring = document.createElement("div");
    ring.className = "ring";
    ring.innerHTML = "💍";
    document.body.appendChild(ring);

    const bgMusic = document.getElementById("bg-music");
    const voice = document.getElementById("voice-note");
    const subtitles = document.getElementById("subtitles");

    const originalVolume = 0.5;
    const lowVolume = 0.15;

    // lower music
    let down = setInterval(() => {
        if (bgMusic.volume > lowVolume) bgMusic.volume -= 0.05;
        else clearInterval(down);
    }, 100);

    // play voice
    voice.currentTime = 0;
    voice.play();

    // subtitles typing
    subtitlesData.forEach(line => {
        setTimeout(() => {
            typeSubtitle(line.text, subtitles);
        }, line.time * 1000);
    });

    voice.onended = () => {
        subtitles.style.opacity = 0;
        let up = setInterval(() => {
            if (bgMusic.volume < originalVolume) bgMusic.volume += 0.05;
            else clearInterval(up);
        }, 100);
    };

    setTimeout(() => {
        ring.remove();
        showForeverText();
    }, 3000);
}
const subtitlesData = [
    { time: 0, text: "I am so lucky to have you❤️" },
    { time: 2.5, text: "Be with me forever ♾️💑" },
    { time: 5.5, text: "Whatever happens, I will always stand by you🤍" },
    { time: 9, text: "You are my bangaram 💛✨" },
    { time: 12, text: "I am totally yours💍❤️" },
    { time: 15, text: "I love you choo… much Bava😘💞" }
];

// 🎬 Typing effect
function typeSubtitle(text, element) {
    element.textContent = "";
    element.style.opacity = 1;
    let i = 0;

    const typing = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 50);
}
function noClicked() {
    alert("No option not allowed 😌💘");
}
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);



