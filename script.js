fetch("http://localhost:3000/api/menu")
    .then(response => response.json())
    .then(data => {
        const menuContainer = document.getElementById("menu-container");

        data.forEach(item => {
            const menuItem = document.createElement("div");

            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>Rs. ${item.price}</p>
            `;

            menuContainer.appendChild(menuItem);
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });