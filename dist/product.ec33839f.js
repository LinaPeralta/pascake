var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequire46c0;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var r={id:t,exports:{}};return e[t]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},t.parcelRequire46c0=o);var r=o("4Bu0d"),a=o("etBjH"),c=o("1tHc5"),d=o("6naOk"),i=o("aDR0T");const s=document.getElementById("productInfo"),u=document.getElementById("productAssets"),l=document.getElementById("btn");let p,f=[];async function m(){const t=function(t){const e=window.location.search;return new URLSearchParams(e).get(t)}("id"),e=a.doc(r.db,"products",t);!function(t){u.innerHTML=`<img class="product__mainImage" id="mainImage" src="${t.img[0]}">`;const e=f.some((e=>e.id===t.id))?'<button class="product_cart" disabled>Producto añadido</button >':'<button class="product_cart">Añadir al carrito</button>';s.innerHTML=`\n    <div class="product__container">\n    <h1 class="product__name">${t.name}</h1>\n    <p class="product__description color">${i.currencyFormat(t.price)} ${t.description}</p>\n    <p class="product__description">Vegano: ${t.vegano}</p>\n    <p class="product__description">Azúcar: ${t.azucar}</p>\n    ${e}\n    </div>\n    `;const n=document.querySelector(".product_cart");n.addEventListener("click",(e=>{f.push(t),i.addProductToCart(f),p&&d.createFirebaseCart(r.db,p.uid,f),n.setAttribute("disabled",!0),n.innerText="Producto añadido"}))}({...(await a.getDoc(e)).data(),id:t})}l.addEventListener("click",(t=>{window.location.href="./index.html"})),c.onAuthStateChanged(r.auth,(async t=>{t?(p=t,f=await d.getFirebaseCart(r.db,p.uid)):f=i.getMyLocalCart(),m()}));
//# sourceMappingURL=product.ec33839f.js.map
