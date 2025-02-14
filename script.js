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

// Função para obter a localização do usuário e atualizar o link de e-mail
function updateLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;

            // Atualiza o link do e-mail com a localização
            const emailButton = document.getElementById("emailButton");
            emailButton.href = `mailto:robertocasalijunior@gmail.com?subject=Ol%C3%A1%2C%20encontrei%20sua%20tag&body=Ol%C3%A1%2C%20encontrei%20sua%20smart%20tag%20com%20suas%20chaves%20e%20gostaria%20de%20devolv%C3%AA-las%20🙂%0A%0AMinha%20localiza%C3%A7%C3%A3o%20atual%20%C3%A9%20${mapsLink}`;
        }, function(error) {
            // Caso o usuário não permita o acesso à localização, o link será sem localização
            const emailButton = document.getElementById("emailButton");
            emailButton.href = `mailto:robertocasalijunior@gmail.com?subject=Ol%C3%A1%2C%20encontrei%20sua%20tag&body=Ol%C3%A1%2C%20encontrei%20sua%20smart%20tag%20com%20suas%20chaves%20e%20gostaria%20de%20devolv%C3%AA-las%20🙂`;
        });
    } else {
        // Caso o navegador não suporte geolocalização, o link será sem localização
        const emailButton = document.getElementById("emailButton");
        emailButton.href = `mailto:robertocasalijunior@gmail.com?subject=Ol%C3%A1%2C%20encontrei%20sua%20tag&body=Ol%C3%A1%2C%20encontrei%20sua%20smart%20tag%20com%20suas%20chaves%20e%20gostaria%20de%20devolv%C3%AA-las%20🙂`;
    }
}

// Chama a função quando o conteúdo da página for carregado
window.onload = function() {
    updateLocation();
};