// write your code here
// Using GET method
const newRamen = () =>{
    return fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(data => submitRaman(data))
}
console.log(newRamen());

const submitRaman = (raman) =>{
    let menu = document.getElementById("ramen-menu");
    let h2 = document.querySelector(".name");
    let h3 = document.querySelector(".restaurant");
    
    raman.forEach(d => {
    let images = document.createElement('img');
    images.setAttribute("src",d.image);
    images.addEventListener('click', () => {
        let image = document.getElementsByClassName('detail-image')[0];
        let comment = document.getElementById("comment-display");
        let rating = document.getElementById("rating-display");
        image.setAttribute("src", d.image );
        rating.textContent = d.rating;
        comment.textContent = d.comment;
        h2.textContent = d.name;
        h3.innerText = d.restaurant;
    });
    menu.appendChild(images);
    })
    
}
// Using POST method
let newObj;
const formSubmit = (e) => {
    e.preventDefault();
    let nameRamen = document.getElementById('new-name').value;
    let restaurant = document.getElementById('new-restaurant').value;
    let imageRamen = document.getElementById('new-image').value;
    let rating = document.getElementById('new-rating').value;
    let comment = document.getElementById('new-comment').value;
    newObj = {
        name: `${nameRamen}`,
        restaurant: `${restaurant}`,
        image: `${imageRamen}` ,
        rating: `${rating}`,
        comment: `${comment}`
    }
    fetch("http://localhost:3000/ramens",{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newObj)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    form.reset();
    
}
let form = document.getElementById("new-ramen");
form.addEventListener('submit', formSubmit);


