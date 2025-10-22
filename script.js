// const items={
//     'item1':[
//             "https://m.media-amazon.com/images/S/aplus-media-library-service-media/110ccf12-a999-4605-b29e-7e91f3fad8b1.__CR0,0,600,450_PT0_SX600_V1___.png",
//             "$39.99",
//             "Crocs x Jujusu Kaisen",
//             "Comfortable lightweight shoes for daily wear.",
//             "Reviws (80)",
//           ],

//     'item2':[
//             "https://m.media-amazon.com/images/S/aplus-media-library-service-media/44205cd4-db56-422c-80ff-5711a64e73fa.__CR0,0,600,450_PT0_SX600_V1___.png",
//             "$49.99",
//             "Crocs x McDonald's",
//             "Bright colors to match every outfit.",
//             "Reviws (74)",
//           ],
//     'item3':[
//             "https://www.sheknows.com/wp-content/uploads/2025/05/SK_FI_DBZ_Crocs.jpg?w=1440",
//             "$59.99",
//             "Dragon Ball Z Crocs",
//             "Premium edition with unique design details.",
//             "Reviws (24)",
//           ],
// };
// const cards= document.getElementById('rowcard');
// const keys= Object.keys(items); // ['item1','item2','item3','item4']

// cards.innerHTML= "";
// for(let i=0;i<keys.length;i++){
//     cards.innerHTML+=`
//     <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
//         <div style="width: 300px;height: 400px;" class="card shadow-lg">
//             <div style="width: 100%; height: 70%;" class="card-img d-flex justify-content-center shadow-lg">
//                 <img style="width: 80%; height: 100%;" src="${items[keys[i]][0]}" alt="">
//             </div>
//             <div style="width: 100%; height: 50%;" class="card-body">
//                 <h3 style="font-family: serif; font-weight: bold;" class="text-center mt-1">${items[keys[i]][1]}</h3>
//                 <h3 style="font-family: serif; font-weight: bold;" class="text-center mt-1">${items[keys[i]][2]}</h3>
//                 <p style="font-family: serif; font-weight: bold;" class="text-center mt-1">${items[keys[i]][3]}</p>
//             </div>
//             <div style="width: 100%; height: 15%;" class="card-footer">
//                 <button style="width: 100%; height: 100%;" class="btn btn-outline-primary">BUY</button>
//             </div>
//         </div>                
//     </div>`;
// }

// Simple local behaviour: nothing heavy needed
// (cart icon is static demo). Add items to cart if you want.

  document.querySelectorAll('.product-card .card-body').forEach(cardBody => {
  // Example: clicking product title alerts name (demo placeholder)
  const title = cardBody.querySelector('.card-title');
  //   title && title.addEventListener('click', () => alert('Product: ' + title.textContent));
});
