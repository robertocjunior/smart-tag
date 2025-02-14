function updateFavicon() {
    const favicon = document.getElementById("favicon");
    const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

    // Se o usuário estiver no tema claro, muda o favicon para o whiteTheme.ico
    if (prefersLightMode) {
        favicon.href = "whitetheme.ico";
    } else {
        favicon.href = "darktheme.ico"; // Garante que o padrão continue sendo dark
    }
}

// Chama a função ao carregar a página
updateFavicon();

// Adiciona um listener para detectar mudanças no tema
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", updateFavicon);