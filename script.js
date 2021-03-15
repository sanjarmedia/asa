

// // let array = [
// //     {
// //         name: 'Sanjar',
// //         surname:'Omonov',
// //         isPay: true,
        
// //     }
// // ];
// // console.log(array.json());

// html = ``
// const body = document.getElementById('div')
// fetch('https://hp-api.herokuapp.com/api/characters')
//     .then(  (response)=> response.json())
//     .then( data => {
//         data.forEach(data => {
//             console.log(data)
//             console.log(data.title)
//             html += `<p>${data.title}</p>`
//             body.innerHTML = html;
//         });
//     });





html = ``
const body = document.getElementById('demo');
fetch('https://hp-api.herokuapp.com/api/characters')
.then(  (response) => response.json() )
.then( full =>{
    full.forEach(full => {
        console.log(full)
    html += `<div class="d-flex align-items-center justify-content-between m-aouto">
            <div class="text">
              <h1> ${full.name}</h1>
              <h3> ${full.house}</h3>
            </div>
            <img class="img"; src="${full.image}">
            
            </div>`
    
    body.innerHTML = html
    });
});