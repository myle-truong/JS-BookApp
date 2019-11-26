document.body.style.backgroundImage = "url('/img/bookshelf.jpg')";

// intial values
const API_KEY = "AIzaSyCur9bR6CxPRGi1gC2ZkE6tG-b4i4FlCuY";

// seclect element from the DOM
const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");
const content = document.querySelector(".content");

buttonElement.onclick = async function(event) {
    const value = inputElement.value;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}+inauthor:keyes&key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    content.innerHTML = `
    <h2 class="title">Title: ${data.items[0].volumeInfo.title} </h2>
    <h2>Author: ${data.items[0].volumeInfo.author} </h2>
    <img src="http://books.google.com/books/content?id=${value}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">: ${data.items[0].volumeInfo.img}  `;
};