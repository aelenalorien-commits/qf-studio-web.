let products = [
    { id: 1, name: "Polera Americana - Modelo 01", category: "hombre", size: "S", price: 85, status: "available", img: "img/polera1S.jpeg", tag: "casual" },
    { id: 2, name: "Polera Americana - Modelo 02", category: "hombre", size: "M", price: 90, status: "available", img: "img/polera2M.jpeg", tag: "casual" },
    { id: 3, name: "Polera Americana - Modelo 03", category: "mujer", size: "M", price: 80, status: "available", img: "img/polera3M.jpeg", tag: "casual" },
    { id: 4, name: "Polera Americana - Modelo 04", category: "hombre", size: "L", price: 95, status: "available", img: "img/polera4L.jpeg", tag: "vintage" },
    { id: 5, name: "Polera Americana - Modelo 05", category: "mujer", size: "L", price: 85, status: "available", img: "img/polera5L.jpeg", tag: "casual" },
    { id: 6, name: "Polera Americana - Modelo 06", category: "hombre", size: "M", price: 80, status: "available", img: "img/polera6M.jpeg", tag: "casual" },
    { id: 7, name: "Polera Americana - Modelo 07", category: "mujer", size: "XL", price: 90, status: "available", img: "img/polera7XL.jpeg", tag: "vintage" },
    { id: 8, name: "Polera Americana - Modelo 08", category: "hombre", size: "L", price: 85, status: "available", img: "img/polera8L.jpeg", tag: "casual" },
    { id: 9, name: "Polera Americana - Modelo 09", category: "mujer", size: "L", price: 80, status: "available", img: "img/polera9L.jpeg", tag: "casual" },
    { id: 10, name: "Polera Americana - Modelo 10", category: "hombre", size: "S", price: 95, status: "available", img: "img/polera10S.jpeg", tag: "vintage" },

    { id: 11, name: "Chompa / Polerón - Modelo 01", category: "hombre", size: "L", price: 180, status: "available", img: "img/poleron1L.jpeg", tag: "vintage" },
    { id: 12, name: "Chompa / Polerón - Modelo 02", category: "mujer", size: "M", price: 170, status: "available", img: "img/poleron2M.jpeg", tag: "casual" },
    { id: 13, name: "Chompa / Polerón - Modelo 03", category: "hombre", size: "S", price: 165, status: "available", img: "img/poleron3S.jpeg", tag: "casual" },
    { id: 14, name: "Chompa / Polerón - Modelo 04", category: "mujer", size: "M", price: 160, status: "available", img: "img/poleron4M.jpeg", tag: "formal" },
    { id: 15, name: "Chompa / Polerón - Modelo 05", category: "hombre", size: "M", price: 190, status: "available", img: "img/poleron5M.jpeg", tag: "vintage" },
    { id: 16, name: "Chompa / Polerón - Modelo 06", category: "mujer", size: "XL", price: 175, status: "available", img: "img/poleron6XL.jpeg", tag: "casual" },
    { id: 17, name: "Chompa / Polerón - Modelo 07", category: "hombre", size: "L", price: 160, status: "available", img: "img/poleron7L.jpeg", tag: "casual" },
    { id: 18, name: "Chompa / Polerón - Modelo 08", category: "mujer", size: "S", price: 185, status: "available", img: "img/poleron8S.jpeg", tag: "formal" },
    { id: 19, name: "Chompa / Polerón - Modelo 09", category: "hombre", size: "M", price: 195, status: "available", img: "img/poleron9M.jpeg", tag: "vintage" },
    { id: 20, name: "Chompa / Polerón - Modelo 10", category: "mujer", size: "L", price: 170, status: "available", img: "img/poleroon10L.jpeg", tag: "casual" },

    { id: 21, name: "Calzado / Tenis - Modelo 01", category: "calzado", size: "38", price: 240, status: "available", img: "img/tenis1.jpeg", tag: "casual" },
    { id: 22, name: "Calzado / Tenis - Modelo 02", category: "calzado", size: "39", price: 260, status: "available", img: "img/tenis2.jpeg", tag: "casual" },
    { id: 23, name: "Calzado / Tenis - Modelo 03", category: "calzado", size: "37", price: 230, status: "available", img: "img/tenis3.jpeg", tag: "formal" },
    { id: 24, name: "Calzado / Tenis - Modelo 04", category: "calzado", size: "40", price: 280, status: "available", img: "img/tenis4.jpeg", tag: "casual" },
    { id: 25, name: "Calzado / Tenis - Modelo 05", category: "calzado", size: "39", price: 250, status: "available", img: "img/tenis5.jpeg", tag: "vintage" },
    { id: 26, name: "Calzado / Tenis - Modelo 06", category: "calzado", size: "41", price: 270, status: "available", img: "img/tenis6.jpeg", tag: "casual" },
    { id: 27, name: "Calzado / Tenis - Modelo 07", category: "calzado", size: "36", price: 220, status: "available", img: "img/tenis7.jpeg", tag: "casual" },
    { id: 28, name: "Calzado / Tenis - Modelo 08", category: "calzado", size: "42", price: 290, status: "available", img: "img/tenis8.jpeg", tag: "formal" },
    { id: 29, name: "Calzado / Tenis - Modelo 09", category: "calzado", size: "38", price: 245, status: "available", img: "img/tenis9.jpeg", tag: "casual" },
    { id: 30, name: "Calzado / Tenis - Modelo 10", category: "calzado", size: "40", price: 265, status: "available", img: "img/tenis10.jpeg", tag: "vintage" },
    { id: 31, name: "Calzado / Tenis - Modelo 11", category: "calzado", size: "39", price: 255, status: "available", img: "img/tenis11.jpeg", tag: "casual" }
];

let cart = JSON.parse(localStorage.getItem('qf_cart')) || [];
let currentCategory = 'all';
let currentSize = 'all';
let isZoomed = false;
let currentLang = 'es';
const ADMIN_PHONE = "59167762868";

document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    if (document.getElementById('product-grid')) {
        renderProducts();
    }
});

function changeLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-es]');
    elements.forEach(el => {
        el.innerText = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
    });

    const inputChat = document.getElementById('ai-chat-input');
    if (inputChat) {
        inputChat.placeholder = lang === 'en' ? 'Type what you are looking for...' : 'Escribe lo que buscas...';
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) badge.innerText = cart.length;
}

function selectCategory(cat, btn) {
    currentCategory = cat;
    currentSize = 'all';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const sizeBar = document.getElementById('size-filter-bar');
    const sizeButtonsContainer = document.getElementById('size-buttons');

    if (cat !== 'all') {
        sizeBar.classList.remove('hidden');
        const availableSizes = [...new Set(products.filter(p => p.category === cat).map(p => p.size))].sort();
        let allText = currentLang === 'en' ? 'All' : 'Todas';
        let html = `<button class="size-btn active" onclick="selectSize('all', this)">${allText}</button>`;
        availableSizes.forEach(s => {
            html += `<button class="size-btn" onclick="selectSize('${s}', this)">${s}</button>`;
        });
        sizeButtonsContainer.innerHTML = html;
    } else {
        sizeBar.classList.add('hidden');
    }
    renderProducts();
}

function selectSize(size, btn) {
    currentSize = size;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = '';

    let filtered = products.filter(p => {
        let matchCat = currentCategory === 'all' || p.category === currentCategory;
        let matchSize = currentSize === 'all' || p.size === currentSize;
        return matchCat && matchSize;
    });

    if (filtered.length === 0) {
        let noMsg = currentLang === 'en' ? 'No available pieces found with this selection.' : 'No hay piezas disponibles con esta selección.';
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#888; padding:30px;">${noMsg}</p>`;
        return;
    }

    filtered.forEach(p => {
        const isSold = p.status === 'sold';
        let soldText = currentLang === 'en' ? 'Sold Out' : 'Agotado';
        let availText = currentLang === 'en' ? 'Available' : 'Disponible';
        let sizeText = currentLang === 'en' ? 'Size' : 'Talla';
        let uniqueText = currentLang === 'en' ? 'Unique Piece' : 'Pieza Única';
        let detailBtnText = currentLang === 'en' ? 'View Details' : 'Ver Detalles';
        let soldBtnText = currentLang === 'en' ? 'Piece Sold Out' : 'Pieza Agotada';

        grid.innerHTML += `
            <div class="product-card ${isSold ? 'sold' : ''}">
                <div class="product-img-wrap" onclick="openProductDetail(${p.id})" style="cursor: pointer;">
                    <img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=500&q=80'">
                    <span class="status-badge ${isSold ? 'status-sold' : 'status-available'}">
                        ${isSold ? soldText : availText}
                    </span>
                </div>
                <div class="product-info">
                    <h3 onclick="openProductDetail(${p.id})" style="cursor: pointer;">${p.name}</h3>
                    <p class="product-meta">${sizeText}: ${p.size} • ${uniqueText}</p>
                    <p class="product-price">${p.price} Bs</p>
                    <button class="btn-primary" onclick="openProductDetail(${p.id})" ${isSold ? 'disabled style="background:#ddd; color:#888; cursor:not-allowed;"' : ''}>
                        ${isSold ? soldBtnText : detailBtnText}
                    </button>
                </div>
            </div>
        `;
    });
}

function openProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    isZoomed = false;
    const imgEl = document.getElementById('modal-product-img');
    imgEl.src = product.img;
    imgEl.style.transform = "scale(1)";

    let detailTitle = currentLang === 'en' ? 'Garment Detail' : 'Detalle de la Prenda';
    let sizeText = currentLang === 'en' ? 'Available size' : 'Talla disponible';
    let uniqueText = currentLang === 'en' ? 'Unique Piece' : 'Pieza Única';
    let soldBtnText = currentLang === 'en' ? 'Piece Sold Out' : 'Pieza Agotada';
    let addBtnText = currentLang === 'en' ? 'Add to Cart' : 'Añadir al Carrito';

    document.getElementById('modal-product-title').innerText = detailTitle;
    document.getElementById('modal-product-name').innerText = product.name;
    document.getElementById('modal-product-category').innerText = `Categoría: ${product.category.toUpperCase()}`;
    document.getElementById('modal-product-meta').innerText = `${sizeText}: ${product.size} • ${uniqueText}`;
    document.getElementById('modal-product-price').innerText = `${product.price} Bs`;
    
    const addBtn = document.getElementById('modal-add-btn');
    if (product.status === 'sold') {
        addBtn.innerText = soldBtnText;
        addBtn.disabled = true;
        addBtn.style.background = "#ddd";
        addBtn.style.color = "#888";
        addBtn.style.cursor = "not-allowed";
    } else {
        addBtn.innerText = addBtnText;
        addBtn.disabled = false;
        addBtn.style.background = "var(--text-dark)";
        addBtn.style.color = "var(--bg-light)";
        addBtn.style.cursor = "pointer";
        addBtn.onclick = () => {
            addToCart(product.id);
            closeModal('product-modal');
        };
    }
    openModal('product-modal');
}

function toggleZoomModal() {
    isZoomed = !isZoomed;
    const imgEl = document.getElementById('modal-product-img');
    if (isZoomed) {
        imgEl.style.transform = "scale(1.8)";
        imgEl.style.cursor = "zoom-out";
    } else {
        imgEl.style.transform = "scale(1)";
        imgEl.style.cursor = "zoom-in";
    }
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product && product.status === 'available') {
        if (!cart.some(item => item.id === product.id)) {
            cart.push(product);
            localStorage.setItem('qf_cart', JSON.stringify(cart));
            updateCartBadge();
            let msgAdded = currentLang === 'en' ? `!${product.name} added to cart!` : `¡${product.name} añadida al carrito!`;
            alert(msgAdded);
        } else {
            let msgExists = currentLang === 'en' ? 'This garment is already in your cart.' : 'Esta prenda ya se encuentra en tu carrito.';
            alert(msgExists);
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('qf_cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartPage();
}

function renderCartPage() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-amount');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#888; padding:20px;">Tu carrito está vacío. <a href="index.html#productos" style="color:#b05878;">Ver catálogo</a></p>`;
        if (totalEl) totalEl.innerText = "0 Bs";
        return;
    }

    let html = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        html += `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border-light);">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <img src="${item.img}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;">
                    <div>
                        <h4 style="font-size: 14px; font-weight: 400;">${item.name}</h4>
                        <p style="font-size: 12px; color: var(--text-muted);">Talla: ${item.size} • ${item.price} Bs</p>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:#E53E3E; cursor:pointer; font-size:13px;">Eliminar</button>
            </div>
        `;
    });
    container.innerHTML = html;
    if (totalEl) totalEl.innerText = total + " Bs";
}

function updateCartShippingUI() {
    const method = document.getElementById('shipping-method')?.value;
    const box = document.getElementById('shipping-details-box');
    if (!box) return;

    if (method === 'yango') {
        box.innerHTML = `
            <p><strong>Envío Local por Yango:</strong></p>
            <p style="font-size:13px; color:var(--text-muted); margin-top:4px;">Coordinación inmediata en Santa Cruz. El costo de la carrera corre por cuenta del cliente al recibir.</p>
        `;
    } else if (method === 'punto') {
        box.innerHTML = `
            <p><strong>Recojo en Punto de Entrega (Santa Cruz):</strong></p>
            <p style="font-size:13px; color:var(--text-muted); margin-top:4px;">Zona Este / Lunes a Sábado de 10:00 a 19:00.</p>
        `;
    } else if (method === 'nacional') {
        box.innerHTML = `
            <p><strong>Envíos Nacionales / Provinciales:</strong></p>
            <label style="margin-top:8px;">Empresa de Transporte o Trufi:</label>
            <input type="text" id="ship-agency" placeholder="Ej. Trufi Saguapac">
            <label style="margin-top:8px;">Ciudad de Destino:</label>
            <input type="text" id="ship-city" placeholder="Ej. La Paz">
        `;
    }
}

function checkoutCartAndSendWhatsApp() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    const proofCode = document.getElementById('payment-proof')?.value.trim();
    if (!proofCode) {
        alert("Por favor ingresa el número de comprobante o transacción bancaria por QR para validar tu compra.");
        document.getElementById('payment-proof')?.focus();
        return;
    }
    const shippingMethod = document.getElementById('shipping-method').value;
    let shippingText = shippingMethod;
    if (shippingMethod === 'nacional') {
        const agency = document.getElementById('ship-agency')?.value.trim();
        const city = document.getElementById('ship-city')?.value.trim();
        if (!agency || !city) {
            alert("Completa la empresa de transporte y la ciudad de destino.");
            return;
        }
        shippingText = `Encomienda Nacional (${agency} hacia ${city})`;
    }

    cart.forEach(cartItem => {
        const prod = products.find(p => p.id === cartItem.id);
        if (prod) prod.status = 'sold';
    });

    let totalAmount = 0;
    let itemsListText = "";
    cart.forEach(item => {
        totalAmount += item.price;
        itemsListText += `- ${item.name} (Talla: ${item.size}) - ${item.price} Bs\n`;
    });

    const msg = `Hola QF studio! Acabo de realizar el pago por QR.\n\n*Comprobante Nro:* ${proofCode}\n*Prendas Adquiridas:*\n${itemsListText}\n*Total Pagado:* ${totalAmount} Bs\n*Modalidad de Envío:* ${shippingText}`;
    const waUrl = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(msg)}`;

    alert(`¡Compra registrada con éxito por un total de ${totalAmount} Bs! Las prendas seleccionadas pasaron a estado AGOTADO. Te redirigiremos a WhatsApp.`);
    cart = [];
    localStorage.removeItem('qf_cart');
    updateCartBadge();
    window.open(waUrl, '_blank');
    window.location.href = "index.html";
}

function toggleAI() { document.getElementById('ai-widget').classList.toggle('hidden'); }

function sendAIChatMessage() {
    const inputEl = document.getElementById('ai-chat-input');
    const chatBody = document.getElementById('ai-chat-body');
    const text = inputEl.value.trim().toLowerCase();
    
    if (!text) return;

    chatBody.innerHTML += `<div style="background: #E5E5E5; padding: 8px 12px; border-radius: 8px; font-size: 12px; color: #111; align-self: flex-end; max-width: 85%;">${inputEl.value}</div>`;
    inputEl.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
        const colorKeywords = ["color", "plomo", "gris", "blanco", "negro", "azul", "rojo", "verde", "amarillo", "rosado"];
        const asksForColor = colorKeywords.some(color => text.includes(color));

        if (asksForColor) {
            let colorMsg = currentLang === 'en' 
                ? "At the moment I cannot detect specific colors in the garments, but I can gladly help you search by <strong>size, category or model</strong>!"
                : "Por el momento no puedo detectar colores específicos en las prendas, ¡pero con gusto te puedo ayudar a buscar por <strong>talla, categoría o modelo</strong>!";
            chatBody.innerHTML += `<div style="background: #F4F4F4; padding: 10px 12px; border-radius: 8px; font-size: 12px; color: #111; align-self: flex-start; max-width: 90%; border: 1px solid var(--border-light);">${colorMsg}</div>`;
        } else {
            let found = products.filter(p => p.status === 'available' && (
                text.includes(p.category) || 
                text.includes(p.size.toLowerCase()) || 
                text.includes(p.name.toLowerCase()) ||
                text.includes(p.tag)
            ));

            if (found.length > 0) {
                let match = found[0];
                let yesText = currentLang === 'en' ? 'Yes, it is available! I recommend this unique piece:' : '¡Sí tenemos disponibilidad! Te recomiendo esta pieza única:';
                let btnAddText = currentLang === 'en' ? 'Add to Cart' : 'Añadir al Carrito';

                chatBody.innerHTML += `
                    <div style="background: #F4F4F4; padding: 10px; border-radius: 8px; font-size: 12px; color: #111; align-self: flex-start; max-width: 90%; border: 1px solid var(--border-light);">
                        ${yesText}<br>
                        <div style="display:flex; gap:8px; align-items:center; margin-top:6px; cursor:pointer;" onclick="openProductDetail(${match.id})">
                            <img src="${match.img}" style="width:40px; height:40px; object-fit:cover; border-radius:4px;">
                            <div>
                                <strong>${match.name}</strong><br>
                                <span style="color:#b05878;">Talla ${match.size} • ${match.price} Bs</span>
                            </div>
                        </div>
                        <button class="btn-primary full-width" style="margin-top:8px; padding:4px; font-size:11px;" onclick="addToCart(${match.id})">${btnAddText}</button>
                    </div>
                `;
            } else {
                let notFoundText = currentLang === 'en' ? 'No exact piece found with those details. Try searching for "size M", "men" or "model 01".' : 'No encontré una pieza exacta con esos datos. Prueba buscando por ejemplo: "talla M", "hombre" o "modelo 01".';
                chatBody.innerHTML += `<div style="background: #F4F4F4; padding: 8px 12px; border-radius: 8px; font-size: 12px; color: #111; align-self: flex-start; border: 1px solid var(--border-light);">${notFoundText}</div>`;
            }
        }
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    let loginMsg = currentLang === 'en' ? `Welcome, ${email}. Session started successfully.` : `Bienvenida/o, ${email}. Sesión iniciada correctamente.`;
    alert(loginMsg);
    closeModal('login-modal');
}
function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }