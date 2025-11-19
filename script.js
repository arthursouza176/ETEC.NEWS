document.getElementById("modoNoturno").onclick = function() {    
    document.body.classList.toggle("dark");
};
if (localStorage.getItem("visitou")) {
    alert("Bem-vindo de novo ao ETEC NEWS!");
} else {
    localStorage.setItem("visitou", "sim");
}
function destacarCard(card) {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
}

function normalizarCard(card) {
    card.style.transform = "scale(1)";
}
const video = document.querySelector("video");

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        video.play();
    }
}, { threshold: 0.4 });

observer.observe(video);

window.onscroll = function() {
    let btn = document.getElementById("btnTopo");
    btn.style.display = (window.scrollY > 200) ? "block" : "none";
};


document.getElementById("btnTopo").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


