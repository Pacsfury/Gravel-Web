let carddata = "Error fetching file"

fetch('./webcontent/card_content.json')
    .then(response => response.json())
    .then(data => {
        carddata = data;
        start();
    })

function start() {
    const cards = document.querySelectorAll(".card");
    const cd_explain = document.getElementById("card_explain");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            cd_explain.innerHTML = "<h2>" + carddata[card.id] + "</h2>";
        });
    });
}
