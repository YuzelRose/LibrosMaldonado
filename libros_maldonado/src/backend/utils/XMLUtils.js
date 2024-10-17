export const generateXML = () => {
    return `
    cart: [
    ],
    list: [
    ]
    `;
}

export const addToCart = (item) => { 
    const userSessionXML = localStorage.getItem('userSession');
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(userSessionXML, "text/xml");
    
    const newCartItem = xmlDoc.createElement("Item");
    newCartItem.setAttribute("Id", item); 
    const itemIdElement = xmlDoc.createElement("ID");
    itemIdElement.textContent = item; 
    const quantityElement = xmlDoc.createElement("Cantidad");
    quantityElement.textContent = 1; 
    
    newCartItem.appendChild(itemIdElement);
    newCartItem.appendChild(quantityElement);

    const cartElement = xmlDoc.getElementsByTagName("Cart")[0];
    cartElement.appendChild(newCartItem);

    const serializer = new XMLSerializer();
    const updatedXML = serializer.serializeToString(xmlDoc);
    localStorage.setItem('userSession', updatedXML);
    alert('Artículo agregado al carrito con éxito.');
}

export const addToFavorites = (item) => {
    const userSessionXML = localStorage.getItem('userSession');
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(userSessionXML, "text/xml");

    const newFavItem = xmlDoc.createElement("Item");
    const itemIdElement = xmlDoc.createElement("ID");
    itemIdElement.textContent = item;
    newFavItem.appendChild(itemIdElement);

    const favListElement = xmlDoc.getElementsByTagName("FavList")[0];
    favListElement.appendChild(newFavItem);

    // Serializar el XML actualizado
    const serializer = new XMLSerializer();
    const updatedXML = serializer.serializeToString(xmlDoc);

    // Guardar el XML actualizado en localStorage
    localStorage.setItem('userSession', updatedXML);
    alert('Artículo agregado a favoritos con éxito.');
};


export const removeFromCart = (itemId) => {
    const userSessionXML = localStorage.getItem('userSession');
    if (userSessionXML) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(userSessionXML, 'text/xml');
        const cartElement = xmlDoc.getElementsByTagName('Cart')[0];
        if (cartElement) {
            const items = cartElement.getElementsByTagName('Item');
            for (let i = 0; i < items.length; i++) {
                const idElement = items[i].getElementsByTagName('ID')[0];
                if (idElement && idElement.textContent === String(itemId)) {
                    cartElement.removeChild(items[i]);
                    break;
                }
            }
            const serializer = new XMLSerializer();
            const updatedXML = serializer.serializeToString(xmlDoc);
            localStorage.setItem('userSession', updatedXML);
        }
    }
}

export const removeFromFavorites = (itemId) => {
    const userSessionXML = localStorage.getItem('userSession');
    if (userSessionXML) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(userSessionXML, 'text/xml');
        const FavListElement = xmlDoc.getElementsByTagName('FavList')[0];
        if (FavListElement) {
            const items = FavListElement.getElementsByTagName('Item');
            for (let i = 0; i < items.length; i++) {
                const idElement = items[i].getElementsByTagName('ID')[0];
                if (idElement && idElement.textContent === String(itemId)) {
                    FavListElement.removeChild(items[i]);
                    break;
                }
            }
            const serializer = new XMLSerializer();
            const updatedXML = serializer.serializeToString(xmlDoc);
            localStorage.setItem('userSession', updatedXML);
        }
    }
}

export const isCreated = () => {
    const userSessionXML = localStorage.getItem('userSession');
    return !!userSessionXML; 
}

export const eliminateXML = (setUSer) => {
    setUSer([])
    localStorage.removeItem('userSession');
    alert('Sesión cerrada.');
}

export const saveAndPay = () => {
    const userSessionXML = localStorage.getItem('userSession');

    if (!userSessionXML) {
        alert('No hay XML para descargar.');
        return;
    }
    const blob = new Blob([userSessionXML], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'userSession.xml'; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};