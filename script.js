// Atualiza a data automaticamente
const dateElement = document.getElementById('date');
const today = new Date();
dateElement.textContent += today.toLocaleDateString('pt-BR');

// Cardápio dinâmico (pode ser substituído por uma API no futuro)
const menuItems = {
    coffees_CATUAI: [
        "Espresso - R$ 8,00",
        "Com leite - R$ 10,00",
        "Cappuccino - R$ 12,00",

    ],
    coffees_NOVO_MUNDO: [
        "Espresso - R$ 8,00",
        "Com leite - R$ 10,00",
        "Cappuccino - R$ 12,00",

    ],
    coffees_BOURBON: [
        "Coado - R$ 15,00"
    ],
    coffees_ARARA: [
        "Coado - R$ 17,00"
    ],
    coffees_ICE: [
        "Ice Coffee <i>(Café, Leite, Cacau, <br>Gelo e Calda)</i> - R$18,00"
    ],

    snacks: [
        "Croissant - R$ 7,00",
        "Pão de Queijo - R$ 6,00",

        "Hamburguer Assado - R$ 12,00",
    ],
    drinks: [
        "Refrigerante <i>(Coca, Coca-Zero, Guaraná, Guaraná-Zero)</i> - R$ 5,00",
        "H20 - R$ 7,00",
        "Suco Natural <i>(Laranja, Acerola, Maracujá)<i/> - R$ 10,00",
        "Chá <i>(Consultar Sabores)</i> - R$ 7,00",
        "Água <i>(c/ e s/gás)</i> - R$ 4,00"
    ],
    plateOfFood: [
        "Omelete do Leo <i>(3 Ovos, Banana, Mussarela, Mel e Canela)</i> - R$ 25,00",
        "Omelete com Queijo e Bacon - R$ 15,00",
        "Omelete Simples - R$ 10,00",
        "Omelete com Queijo - R$ 12,00",
        "Omelete com Queijo e Bacon - R$ 15,00",
        "Pão na Chapa - R$ 8,00",
        "Pão Casquinha - R$ 10,00",
        "Pão com Ovo - R$ 12,00",
        "Pão com Ovo e Bacon - R$ 18,00",
        "Misto Quente - R$ 15,00",
        "Bauru - R$ 17,00",
        "Pão de Queijo Com Casquinha - R$ 9,00",
    ],
    cakes:[
        "Bolo de Pote <i>(Consultar Sabores)</i> - R$21,00"
    ]

};

// Preenche o cardápio
function loadMenu() {
    const coffeeCatuai = document.getElementById('coffee_CATUAI');
    const coffeeNovoMundo = document.getElementById('coffee_NOVO_MUNDO');
    const coffeeBourbon = document.getElementById('coffee_BOURBON');
    const coffeeArara = document.getElementById('coffee_ARARA');
    const coffeeIce = document.getElementById('coffee_ICE');
    

    const snacksList = document.getElementById('snacks');
    const drinksList = document.getElementById('drinks');
    const plateOfFoodList = document.getElementById('plateOfFood');
    const cakesList = document.getElementById('cakes');
    // Formata cada item do cardápio com nome e preço alinhados
    const formatItem = (item) => {
        const [name, price] = item.split(" - "); // Divide "Nome - R$ X,XX"
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="item-name">${name}</span>
            <span class="item-price">${price}</span>
        `;
        return li;
    };

    // Preenche café CATUAI
    menuItems.coffees_CATUAI.forEach(item => {
        coffeeCatuai.appendChild(formatItem(item));
    });

    // Preenche café NOVO MUNDO
    menuItems.coffees_NOVO_MUNDO.forEach(item => {
        coffeeNovoMundo.appendChild(formatItem(item));
    });
    // Preenche café BOURBON
    menuItems.coffees_BOURBON.forEach(item => {
        coffeeBourbon.appendChild(formatItem(item));
    });
    // Preenche café BOURBON
    menuItems.coffees_ARARA.forEach(item => {
        coffeeArara.appendChild(formatItem(item));
    });
    menuItems.coffees_ICE.forEach(item => {
        coffeeIce.appendChild(formatItem(item));
    });

    // Preenche salgados
    menuItems.snacks.forEach(item => {
        snacksList.appendChild(formatItem(item));
    });

    // Preenche bebidas
    menuItems.drinks.forEach(item => {
        drinksList.appendChild(formatItem(item))
    })
    // Preenche pratos
    menuItems.plateOfFood.forEach(item => {
        plateOfFoodList.appendChild(formatItem(item))
    })
    // Preenche doces
    menuItems.cakes.forEach(item => {
        cakesList.appendChild(formatItem(item))
    })
}

loadMenu();