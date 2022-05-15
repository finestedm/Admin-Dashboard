const menuItems = document.querySelectorAll('sidebar > fieldset > ul > li');


menuItems.forEach(e => {
    var img = document.createElement("img")
    img.setAttribute('src', `./images/${e.innerHTML}.svg`);
    e.append(img)
});