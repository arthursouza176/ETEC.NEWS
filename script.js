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

document.addEventListener("click", function(e) {
    // Cria o círculo
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    
    // Define posição
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";

    // Adiciona ao body
    document.body.appendChild(ripple);

    // Remove depois da animação
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-ball");
    document.body.appendChild(cursor);

    window.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top  = e.clientY + "px";
    });
});