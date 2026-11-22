// Troque NUM pelo WhatsApp real antes de publicar (DDI + DDD + número, só dígitos)
const NUM = "5515999999999";
const SIZES = ["P", "M", "G", "GG"];
const selected = {};

document.querySelectorAll(".sz").forEach((box) => {
  const product = box.dataset.p;
  selected[product] = "M";

  SIZES.forEach((size) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = size;
    if (size === "M") btn.classList.add("active");

    btn.addEventListener("click", () => {
      selected[product] = size;
      box.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });

    box.appendChild(btn);
  });
});

document.querySelectorAll(".order").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const item = link.dataset.p;
    const msg =
      item === "lista de espera"
        ? "Olá! Quero entrar na lista de espera do primeiro lote da MINOS."
        : `Olá! Tenho interesse na camiseta MINOS (${item}) - Tamanho ${selected[item] || "M"}.`;

    const url = `https://wa.me/${NUM}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener");
  });
});
