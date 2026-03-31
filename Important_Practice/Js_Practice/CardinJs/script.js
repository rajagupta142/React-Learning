const Root=document.getElementById('root');

const restaurants = [
  { id: 1, name: "Pizza Hut", price: 200, rating: 4.2, discount: "50% OFF", img:"https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=LWxNqGlUSb5jfhv3Fu8lzYdXOebquU0_0WUKl0f5zxk="},
  
  { id: 2, name: "Burger King", price: 150, rating: 4.0, discount: "20% OFF", img: "https://media.istockphoto.com/id/639389404/photo/authentic-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=BIz-9inz1CdT5LkBOStg1LImZxPSAg5PyhCgFa4VqVc=" },
  { id: 3, name: "Pasta Street", price: 300, rating: 4.5, discount: "10% OFF", img: "https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.webp?a=1&b=1&s=612x612&w=0&k=20&c=-C6E5EYsOmqnUlt2-tPhmUs_Uzo7iSiwOv4abbg-0Hk=" },
  { id: 4, name: "Sushi House", price: 500, rating: 4.8, discount: "Free Delivery", img: "https://images.unsplash.com/photo-1682139710677-cb02f6bc4211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBwaWN0dXJlcyUyMG9mJTIwcmVzdHVyYW50fGVufDB8fDB8fHww"},
  { id: 5, name: "Taco Bell", price: 120, rating: 3.9, discount: "Buy 1 Get 1", img: "https://images.unsplash.com/photo-1758157835950-ceeda86f4693?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2QlMjBwaWN0dXJlcyUyMG9mJTIwcmVzdHVyYW50fGVufDB8fDB8fHww" }
];

// restaurants.forEach((obj)=>{
//     const card=document.createElement('div');
//     card.className="Details";
//     card.style.border="2px solid black";
//     card.style.height="300px";
//     card.style.width="300px";
//     card.style.display = "flex";
//     card.style.gap = "5px";
//     card.style.textAlign="center";

//     card.innerHTML=`
//     <img src="${obj.img}" alt="${obj.name}" style="height:60px; width:100%;  object-fit:cover;"/>
//     <h4>${obj.name}</h4>
//     <h5>${obj.price}</h5>
//     <p>${obj.rating}</p>
//     <p>${obj.discount}</p>
//     `;
//     Root.appendChild(card);
// });


restaurants.forEach((obj) => {
    const card = document.createElement('div');
    card.className = "Details";

    card.style.border = "2px solid black";
    card.style.height = "350px"; // increased height
    card.style.width = "200px";
    card.style.textAlign = "center";
    card.style.padding = "10px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "flex-start";
    card.style.gap = "3px";
    card.style.boxShadow = "2px 2px 8px rgba(0,0,0,0.2)";

    card.innerHTML = `
        <img src="${obj.img}" alt="${obj.name}" style="height:120px; width:100%; object-fit:cover;" />
        <h4 margin:5px 0 0 0>${obj.name}</h4>
        <p margin:2px 0>Price: ₹${obj.price}</p>
        <p margin:2px 0>⭐ ${obj.rating}</p>
        <p margin:2px 0>${obj.discount}</p>
    `;

    Root.appendChild(card);
});


