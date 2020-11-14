import menu from "./menu.js";
import posts from "./posts.js";
import midias from "./midias.js";

// ==============================================
//                                     Navigation
// ==============================================
let navMenu = document.querySelector(".navigation .menu");

menu.map(
    (item) =>
        (navMenu.innerHTML += `<li class="item"><a class="link" href="${item.link}">${item.name}</a></li>`)
);

// ==============================================
//                                         Footer
// ==============================================
let footerMenu = document.querySelector(".footer .menu");

menu.map(
    (item) =>
        (footerMenu.innerHTML += `<li class="item"><a class="link" href="${item.link}">${item.name}</a></li>`)
);

let footerMidias = document.querySelector(".footer .midias");
midias.map(
    (midia) =>
        (footerMidias.innerHTML += `<li class="item">
        <a href="${midia.link}" title="${midia.name}">
            <img src="${midia.img}" alt="${midia.name}" />
        </a>
    </li>`)
);

// ==============================================
//                                          Posts
// ==============================================
let sectionPost = document.querySelector(".post .container");

posts.map(
    (post) =>
        (sectionPost.innerHTML += `<div class="row item">
<div class="col-12 col-md-6">
    <img
        class="post-img"
        src="${post.img}"
        alt=""
    />
</div>
<div class="col-12 col-md-6">
    <h1 class="title">${post.title}</h1>

    <p class="text">${post.text}</p>

    ${post.link && `<a class="btn" href="${post.link}">Purchase Now</a>`}
</div>
</div>`)
);
