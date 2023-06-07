//=======================Delete cart offers====================
//cart product 1
let delete_product = document.querySelector('.bi-trash3');
delete_product.addEventListener('click', () => {
  document.querySelector('.product-service').style.display = "none";
})
//cart product 2
let delete_product_2 = document.getElementById('delete-cart-product');
delete_product_2.addEventListener('click', () => {
  document.querySelector('.product-service-2').style.display = "none";
})


//=============================cart btn=========================

let cart_btn = document.querySelector('.cart-btn');
cart_btn.addEventListener('click', () => {
  document.querySelector('.product-cart').style.display = "block";
})

let close_cart_btn = document.querySelector('.close-cart-btn');

close_cart_btn.addEventListener('click', () => {
  document.querySelector('.product-cart').style.display = "none";
})


//=========================greeting messages========================
const clock = () => {
  let date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let midday;
  midday = (hours >= 12) ? "PM" : "AM";
  let current_time = setTimeout(() => {
    clock();
  }, 1000);
  if (hours >= 0 && hours < 4) {
    var greeting = `Hi Good Evening!`
  }
  else if (hours > 4 && hours <= 16) {
    var greeting = `Hi Good Morning!`;
  }
  else if (hours >= 16 && hours <= 24) {
    var greeting = `Hi Good Evening!`;
  }
  document.getElementById('greeting-msg-service').innerHTML = greeting;
}
clock();



//============================Gps drop down option=============================
let gps_container = document.querySelector('.user-location-track');
let isgpsClicked = true;
const gps_call = () => {
  if (isgpsClicked) {
    gps_container.style.display = "block";
    isgpsClicked = false;
  } else {
    gps_container.style.display = "none";
    isgpsClicked = true;
  }
}
let off_gps = document.querySelector('.bi-x-lg');
off_gps.addEventListener('click', () => {
  gps_container.style.display = "none";
})
let gps_drop_down = document.querySelector('#gps-btn');
gps_drop_down.addEventListener('click', () => {
  gps_call();

});

//============================Accessing user Location=========================
const FindUserLocation = () => {
  const status = document.querySelector('.user-location-status');
  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geolocationApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=
        ${latitude}&longitude=${longitude}&localityLanguage=en`;
    fetch(geolocationApi)
      .then(res => res.json())
      .then(data => {
        status.textContent = data.locality;
        document.querySelector('.user-location-status').innerHTML = data.locality;
        console.log(data);
      });
  }
  const error = () => {
    status.textContent = 'Unable to retrive your location';
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

document.querySelector('.user-gps-location').addEventListener('click', () => {
  gps_container.style.display = "none";
  document.querySelector('.static-address').style.display = "none";

  FindUserLocation()
});


//====================Data fetch and filter from service_category.json file================
let service_page = document.getElementsByClassName('services-options')[0];

let json_url = "service_category.json";

fetch(json_url)
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((ele, i) => {
      let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
      let card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="services-product">
        <div class="services-product-top">
               <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
                <img src=${image} alt=${alt} srcset="" class="service-img" >
                </picture>
                <div class="service-name-price">
                  <div class="service-rating-name-add-btn">
                    <div class="service-name-rating">
                     <h3 class="service-name">${name}</h3>
                     <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                    </div>
                        <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
                  </div>
                  <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
                </div>
              </div>
              <div class="services-product-bottom">
                <div class="service-description">
                 <ul>
                  <li class="product-description-1">${description1}</li>
                  <li class="product-description-2">${description2}</li>
                  <li class="product-description-3">${description3}</li>
                 </ul>
                </div>
              </div>
              </div>
              </div>
        `
      service_page.appendChild(card);

    });



    let washing_machine_btn = document.getElementById('washingmachine-btn');
    let chimney_btn = document.getElementById('chimney-btn');
    let ro_btn = document.getElementById('ro-btn');
    let sofa_btn = document.getElementById('sofa-btn');
    let geyser_btn = document.getElementById('geyser-btn');
    let ac_btn = document.getElementById('ac-btn');
    let microwave_btn = document.getElementById('microwave-btn');
    let electrical_btn = document.getElementById('electrical-btn');
    let refrigerator_btn = document.getElementById('refrigerator-btn');
    let di_btn = document.getElementById('di-btn');
    let otg_btn = document.getElementById('otg-btn');
    let all_btn = document.getElementById('all-btn');


    //=================Washing machine btn filter=========================

    washing_machine_btn.addEventListener('click', () => {
      service_page.innerHTML = '';

      washing_machine_btn.style.background = "black";
      washing_machine_btn.style.color = "white";
      chimney_btn.style.background = "white"
      chimney_btn.style.color = "grey";
      ro_btn.style.background = "white"
      ro_btn.style.color = "grey";
      sofa_btn.style.background = "white"
      sofa_btn.style.color = "grey";
      geyser_btn.style.background = "white"
      geyser_btn.style.color = "grey";
      ac_btn.style.background = "white"
      ac_btn.style.color = "grey";
      microwave_btn.style.background = "white"
      microwave_btn.style.color = "grey";
      electrical_btn.style.background = "white"
      electrical_btn.style.color = "grey";
      refrigerator_btn.style.background = "white"
      refrigerator_btn.style.color = "grey";
      di_btn.style.background = "white"
      di_btn.style.color = "grey";
      otg_btn.style.background = "white"
      otg_btn.style.color = "grey";
      all_btn.style.background = "white"
      all_btn.style.color = "grey";


      let washing_machine_array = data.filter(ele => {
        return ele.category === "w-machine";
      })
      washing_machine_array.forEach((ele, i) => {
        let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <div class="services-product">
    <div class="services-product-top">
    <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
            <img src=${image} alt=${alt} srcset="" class="service-img">
            </picture>
            <div class="service-name-price">
              <div class="service-rating-name-add-btn">
                <div class="service-name-rating">
                 <h3 class="service-name">${name}</h3>
                 <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                </div>
                    <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
              </div>
              <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
            </div>
          </div>
          <div class="services-product-bottom">
            <div class="service-description">
             <ul>
              <li class="product-description-1">${description1}</li>
              <li class="product-description-2">${description2}</li>
              <li class="product-description-3">${description3}</li>
             </ul>
            </div>
          </div>
          </div>
          </div>
    `
        service_page.appendChild(card);
      });
    })

    // ========================Chimney Btn Filter==========================

    chimney_btn.addEventListener('click', () => {
      service_page.innerHTML = '';

      washing_machine_btn.style.background = "white";
      washing_machine_btn.style.color = "grey";
      chimney_btn.style.background = "#000"
      chimney_btn.style.color = "white";
      ro_btn.style.background = "white"
      ro_btn.style.color = "grey";
      sofa_btn.style.background = "white"
      sofa_btn.style.color = "grey";
      geyser_btn.style.background = "white"
      geyser_btn.style.color = "grey";
      ac_btn.style.background = "white"
      ac_btn.style.color = "grey";
      microwave_btn.style.background = "white"
      microwave_btn.style.color = "grey";
      electrical_btn.style.background = "white"
      electrical_btn.style.color = "grey";
      refrigerator_btn.style.background = "white"
      refrigerator_btn.style.color = "grey";
      di_btn.style.background = "white"
      di_btn.style.color = "grey";
      otg_btn.style.background = "white"
      otg_btn.style.color = "grey";
      all_btn.style.background = "white"
      all_btn.style.color = "grey";

      let chimney_btn_array = data.filter(ele => {
        return ele.category === "chimney";
      })
      chimney_btn_array.forEach((ele, i) => {
        let { name, rating, actual_rating, image, image_webp, price, description1, description2, description3, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<div class="services-product">
        <div class="services-product-top">
               <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
                <img src=${image} alt=${alt} srcset="" class="service-img" >
                </picture>
                <div class="service-name-price">
                  <div class="service-rating-name-add-btn">
                    <div class="service-name-rating">
                     <h3 class="service-name">${name}</h3>
                     <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                    </div>
                        <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
                  </div>
                  <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
                </div>
              </div>
              <div class="services-product-bottom">
                <div class="service-description">
                 <ul>
                  <li class="product-description-1">${description1}</li>
                  <li class="product-description-2">${description2}</li>
                  <li class="product-description-3">${description3}</li>
                 </ul>
                </div>
              </div>
              </div>
              </div>
    
    `
        service_page.appendChild(card);

      });
    })


    //============================Ro btn filter==========================


    ro_btn.addEventListener('click', () => {
      service_page.innerHTML = '';
      washing_machine_btn.style.background = "white";
      washing_machine_btn.style.color = "grey";
      chimney_btn.style.background = "white"
      chimney_btn.style.color = "grey";
      ro_btn.style.background = "#000"
      ro_btn.style.color = "white";
      sofa_btn.style.background = "white"
      sofa_btn.style.color = "grey";
      geyser_btn.style.background = "white"
      geyser_btn.style.color = "grey";
      ac_btn.style.background = "white"
      ac_btn.style.color = "grey";
      microwave_btn.style.background = "white"
      microwave_btn.style.color = "grey";
      electrical_btn.style.background = "white"
      electrical_btn.style.color = "grey";
      refrigerator_btn.style.background = "white"
      refrigerator_btn.style.color = "grey";
      di_btn.style.background = "white"
      di_btn.style.color = "grey";
      otg_btn.style.background = "white"
      otg_btn.style.color = "grey";
      all_btn.style.background = "white"
      all_btn.style.color = "grey";

      let ro_btn_array = data.filter(ele => {
        return ele.category === "purifier";
      })
      ro_btn_array.forEach((ele, i) => {
        let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <div class="services-product">
    <div class="services-product-top">
    <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
            <img src=${image} alt=${alt} srcset="" class="service-img">
            </picture>
            <div class="service-name-price">
              <div class="service-rating-name-add-btn">
                <div class="service-name-rating">
                 <h3 class="service-name">${name}</h3>
                 <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                </div>
                    <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
              </div>
              <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
            </div>
          </div>
          <div class="services-product-bottom">
            <div class="service-description">
             <ul>
              <li class="product-description-1">${description1}</li>
              <li class="product-description-2">${description2}</li>
              <li class="product-description-3">${description3}</li>
             </ul>
            </div>
          </div>
          </div>
          </div>
    `
        service_page.appendChild(card);

      });
    })

    //======================sofa btn filter===========================

    sofa_btn.addEventListener('click', () => {
      service_page.innerHTML = '';
      washing_machine_btn.style.background = "white";
      washing_machine_btn.style.color = "grey";
      chimney_btn.style.background = "white"
      chimney_btn.style.color = "grey";
      ro_btn.style.background = "white"
      ro_btn.style.color = "grey";
      sofa_btn.style.background = "#000"
      sofa_btn.style.color = "white";
      geyser_btn.style.background = "white"
      geyser_btn.style.color = "grey";
      ac_btn.style.background = "white"
      ac_btn.style.color = "grey";
      microwave_btn.style.background = "white"
      microwave_btn.style.color = "grey";
      electrical_btn.style.background = "white"
      electrical_btn.style.color = "grey";
      refrigerator_btn.style.background = "white"
      refrigerator_btn.style.color = "grey";
      di_btn.style.background = "white"
      di_btn.style.color = "grey";
      otg_btn.style.background = "white"
      otg_btn.style.color = "grey";
      all_btn.style.background = "white"
      all_btn.style.color = "grey";

      let sofa_btn_array = data.filter(ele => {
        return ele.category === "sofa";
      })
      sofa_btn_array.forEach((ele, i) => {
        let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <div class="services-product">
    <div class="services-product-top">
    <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
            <img src=${image} alt=${alt} srcset="" class="service-img">
            </picture>
            <div class="service-name-price">
              <div class="service-rating-name-add-btn">
                <div class="service-name-rating">
                 <h3 class="service-name">${name}</h3>
                 <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                </div>
                    <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
              </div>
              <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
            </div>
          </div>
          <div class="services-product-bottom">
            <div class="service-description">
             <ul>
              <li class="product-description-1">${description1}</li>
              <li class="product-description-2">${description2}</li>
              <li class="product-description-3">${description3}</li>
             </ul>
            </div>
          </div>
          </div>
          </div>
    `
        service_page.appendChild(card);

      });
    });


    // ======================Geyser btn filter=================================

    geyser_btn.addEventListener('click', () => {
      service_page.innerHTML = '';
      washing_machine_btn.style.background = "white";
      washing_machine_btn.style.color = "grey";
      chimney_btn.style.background = "white"
      chimney_btn.style.color = "grey";
      ro_btn.style.background = "white"
      ro_btn.style.color = "grey";
      sofa_btn.style.background = "white"
      sofa_btn.style.color = "grey";
      geyser_btn.style.background = "#000"
      geyser_btn.style.color = "white";
      ac_btn.style.background = "white"
      ac_btn.style.color = "grey";
      microwave_btn.style.background = "white"
      microwave_btn.style.color = "grey";
      electrical_btn.style.background = "white"
      electrical_btn.style.color = "grey";
      refrigerator_btn.style.background = "white"
      refrigerator_btn.style.color = "grey";
      di_btn.style.background = "white"
      di_btn.style.color = "grey";
      otg_btn.style.background = "white"
      otg_btn.style.color = "grey";
      all_btn.style.background = "white"
      all_btn.style.color = "grey";

      let geyser_btn_array = data.filter(ele => {
        return ele.category === "geyser";
      })
      geyser_btn_array.forEach((ele, i) => {
        let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <div class="services-product">
    <div class="services-product-top">
    <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
            <img src=${image} alt=${alt} srcset="" class="service-img">
            </picture>
            <div class="service-name-price">
              <div class="service-rating-name-add-btn">
                <div class="service-name-rating">
                 <h3 class="service-name">${name}</h3>
                 <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                </div>
                    <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
              </div>
              <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
            </div>
          </div>
          <div class="services-product-bottom">
            <div class="service-description">
             <ul>
              <li class="product-description-1">${description1}</li>
              <li class="product-description-2">${description2}</li>
              <li class="product-description-3">${description3}</li>
             </ul>
            </div>
          </div>
          </div>
          </div>
    `
        service_page.appendChild(card);

      });
    });


    //================================Ac btn filter==================================
    ac_btn.addEventListener('click', () => {
      service_page.innerHTML = '';
      washing_machine_btn.style.background = "white";
      washing_machine_btn.style.color = "grey";
      chimney_btn.style.background = "white"
      chimney_btn.style.color = "grey";
      ro_btn.style.background = "white"
      ro_btn.style.color = "grey";
      sofa_btn.style.background = "white"
      sofa_btn.style.color = "grey";
      geyser_btn.style.background = "white"
      geyser_btn.style.color = "grey";
      ac_btn.style.background = "#000"
      ac_btn.style.color = "white";
      microwave_btn.style.background = "white"
      microwave_btn.style.color = "grey";
      electrical_btn.style.background = "white"
      electrical_btn.style.color = "grey";
      refrigerator_btn.style.background = "white"
      refrigerator_btn.style.color = "grey";
      di_btn.style.background = "white"
      di_btn.style.color = "grey";
      otg_btn.style.background = "white"
      otg_btn.style.color = "grey";
      all_btn.style.background = "white"
      all_btn.style.color = "grey";

      let ac_btn_array = data.filter(ele => {
        return ele.category === "ac";
      })
      ac_btn_array.forEach((ele, i) => {
        let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <div class="services-product">
    <div class="services-product-top">
    <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
            <img src=${image} alt=${alt} srcset="" class="service-img">
            </picture>
            <div class="service-name-price">
              <div class="service-rating-name-add-btn">
                <div class="service-name-rating">
                 <h3 class="service-name">${name}</h3>
                 <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                </div>
                    <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
              </div>
              <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
            </div>
          </div>
          <div class="services-product-bottom">
            <div class="service-description">
             <ul>
              <li class="product-description-1">${description1}</li>
              <li class="product-description-2">${description2}</li>
              <li class="product-description-3">${description3}</li>
             </ul>
            </div>
          </div>
          </div>
          </div>
    `
        service_page.appendChild(card);

      });
    });



    //===========================Microwave btn filter===============================

    microwave_btn.addEventListener('click', () => {
      service_page.innerHTML = '';
      washing_machine_btn.style.background = "white";
      washing_machine_btn.style.color = "grey";
      chimney_btn.style.background = "white"
      chimney_btn.style.color = "grey";
      ro_btn.style.background = "white"
      ro_btn.style.color = "grey";
      sofa_btn.style.background = "white"
      sofa_btn.style.color = "grey";
      geyser_btn.style.background = "white"
      geyser_btn.style.color = "grey";
      ac_btn.style.background = "white"
      ac_btn.style.color = "grey";
      microwave_btn.style.background = "#000"
      microwave_btn.style.color = "white";
      electrical_btn.style.background = "white"
      electrical_btn.style.color = "grey";
      refrigerator_btn.style.background = "white"
      refrigerator_btn.style.color = "grey";
      di_btn.style.background = "white"
      di_btn.style.color = "grey";
      otg_btn.style.background = "white"
      otg_btn.style.color = "grey";
      all_btn.style.background = "white"
      all_btn.style.color = "grey";


      let microwave_btn_array = data.filter(ele => {
        return ele.category === "microwave";
      })
      microwave_btn_array.forEach((ele, i) => {
        let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <div class="services-product">
    <div class="services-product-top">
    <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
            <img src=${image} alt=${alt} srcset="" class="service-img">
            </picture>
            <div class="service-name-price">
              <div class="service-rating-name-add-btn">
                <div class="service-name-rating">
                 <h3 class="service-name">${name}</h3>
                 <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                </div>
                    <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
              </div>
              <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
            </div>
          </div>
          <div class="services-product-bottom">
            <div class="service-description">
             <ul>
              <li class="product-description-1">${description1}</li>
              <li class="product-description-2">${description2}</li>
              <li class="product-description-3">${description3}</li>
             </ul>
            </div>
          </div>
          </div>
          </div>
    `
        service_page.appendChild(card);

      });
    });


    //=======================Electrical btn filter=====================

    electrical_btn.addEventListener('click', () => {
      service_page.innerHTML = '';
      washing_machine_btn.style.background = "white";
      washing_machine_btn.style.color = "grey";
      chimney_btn.style.background = "white"
      chimney_btn.style.color = "grey";
      ro_btn.style.background = "white"
      ro_btn.style.color = "grey";
      sofa_btn.style.background = "white"
      sofa_btn.style.color = "grey";
      geyser_btn.style.background = "white"
      geyser_btn.style.color = "grey";
      ac_btn.style.background = "white"
      ac_btn.style.color = "grey";
      microwave_btn.style.background = "white"
      microwave_btn.style.color = "grey";
      electrical_btn.style.background = "#000"
      electrical_btn.style.color = "white";
      refrigerator_btn.style.background = "white"
      refrigerator_btn.style.color = "grey";
      di_btn.style.background = "white"
      di_btn.style.color = "grey";
      otg_btn.style.background = "white"
      otg_btn.style.color = "grey";
      all_btn.style.background = "white"
      all_btn.style.color = "grey";

      let electrical_btn_array = data.filter(ele => {
        return ele.category === "electrical";
      })
      electrical_btn_array.forEach((ele, i) => {
        let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <div class="services-product">
    <div class="services-product-top">
    <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
            <img src=${image} alt=${alt} srcset="" class="service-img">
            </picture>
            <div class="service-name-price">
              <div class="service-rating-name-add-btn">
                <div class="service-name-rating">
                 <h3 class="service-name">${name}</h3>
                 <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                </div>
                    <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
              </div>
              <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
            </div>
          </div>
          <div class="services-product-bottom">
            <div class="service-description">
             <ul>
              <li class="product-description-1">${description1}</li>
              <li class="product-description-2">${description2}</li>
              <li class="product-description-3">${description3}</li>
             </ul>
            </div>
          </div>
          </div>
          </div>
    `
        service_page.appendChild(card);

      });
    });



    //=====================Refridgerator btn filter=========================

    refrigerator_btn.addEventListener('click', () => {
      service_page.innerHTML = '';
      washing_machine_btn.style.background = "white";
      washing_machine_btn.style.color = "grey";
      chimney_btn.style.background = "white"
      chimney_btn.style.color = "grey";
      ro_btn.style.background = "white"
      ro_btn.style.color = "grey";
      sofa_btn.style.background = "white"
      sofa_btn.style.color = "grey";
      geyser_btn.style.background = "white"
      geyser_btn.style.color = "grey";
      ac_btn.style.background = "white"
      ac_btn.style.color = "grey";
      microwave_btn.style.background = "white"
      microwave_btn.style.color = "grey";
      electrical_btn.style.background = "white"
      electrical_btn.style.color = "grey";
      refrigerator_btn.style.background = "#000"
      refrigerator_btn.style.color = "white";
      di_btn.style.background = "white"
      di_btn.style.color = "grey";
      otg_btn.style.background = "white"
      otg_btn.style.color = "grey";
      all_btn.style.background = "white"
      all_btn.style.color = "grey";

      let refrigerator_btn_array = data.filter(ele => {
        return ele.category === "refrigerator";
      })
      refrigerator_btn_array.forEach((ele, i) => {
        let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <div class="services-product">
    <div class="services-product-top">
    <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
            <img src=${image} alt=${alt} srcset="" class="service-img">
            </picture>
            <div class="service-name-price">
              <div class="service-rating-name-add-btn">
                <div class="service-name-rating">
                 <h3 class="service-name">${name}</h3>
                 <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                </div>
                    <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
              </div>
              <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
            </div>
          </div>
          <div class="services-product-bottom">
            <div class="service-description">
             <ul>
              <li class="product-description-1">${description1}</li>
              <li class="product-description-2">${description2}</li>
              <li class="product-description-3">${description3}</li>
             </ul>
            </div>
          </div>
          </div>
          </div>
    `
        service_page.appendChild(card);

      });
    });


    //=================Di Fridge btn filter ================================

    di_btn.addEventListener('click', () => {
      service_page.innerHTML = '';
      washing_machine_btn.style.background = "white";
      washing_machine_btn.style.color = "grey";
      chimney_btn.style.background = "white"
      chimney_btn.style.color = "grey";
      ro_btn.style.background = "white"
      ro_btn.style.color = "grey";
      sofa_btn.style.background = "white"
      sofa_btn.style.color = "grey";
      geyser_btn.style.background = "white"
      geyser_btn.style.color = "grey";
      ac_btn.style.background = "white"
      ac_btn.style.color = "grey";
      microwave_btn.style.background = "white"
      microwave_btn.style.color = "grey";
      electrical_btn.style.background = "white"
      electrical_btn.style.color = "grey";
      refrigerator_btn.style.background = "white"
      refrigerator_btn.style.color = "grey";
      di_btn.style.background = "#000"
      di_btn.style.color = "white";
      otg_btn.style.background = "white"
      otg_btn.style.color = "grey";
      all_btn.style.background = "white"
      all_btn.style.color = "grey";

      let di_btn_array = data.filter(ele => {
        return ele.category === "difridge";
      })
      di_btn_array.forEach((ele, i) => {
        let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <div class="services-product">
    <div class="services-product-top">
    <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
            <img src=${image} alt=${alt} srcset="" class="service-img">
            </picture>
            <div class="service-name-price">
              <div class="service-rating-name-add-btn">
                <div class="service-name-rating">
                 <h3 class="service-name">${name}</h3>
                 <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                </div>
                    <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
              </div>
              <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
            </div>
          </div>
          <div class="services-product-bottom">
            <div class="service-description">
             <ul>
              <li class="product-description-1">${description1}</li>
              <li class="product-description-2">${description2}</li>
              <li class="product-description-3">${description3}</li>
             </ul>
            </div>
          </div>
          </div>
          </div>
    `
        service_page.appendChild(card);

      });
    });

    //============================OTG btn filter=============================

    otg_btn.addEventListener('click', () => {
      service_page.innerHTML = '';
      washing_machine_btn.style.background = "white";
      washing_machine_btn.style.color = "grey";
      chimney_btn.style.background = "white"
      chimney_btn.style.color = "grey";
      ro_btn.style.background = "white"
      ro_btn.style.color = "grey";
      sofa_btn.style.background = "white"
      sofa_btn.style.color = "grey";
      geyser_btn.style.background = "white"
      geyser_btn.style.color = "grey";
      ac_btn.style.background = "white"
      ac_btn.style.color = "grey";
      microwave_btn.style.background = "white"
      microwave_btn.style.color = "grey";
      electrical_btn.style.background = "white"
      electrical_btn.style.color = "grey";
      refrigerator_btn.style.background = "white"
      refrigerator_btn.style.color = "grey";
      di_btn.style.background = "white"
      di_btn.style.color = "grey";
      otg_btn.style.background = "#000"
      otg_btn.style.color = "white";
      all_btn.style.background = "white"
      all_btn.style.color = "grey";

      let otg_btn_array = data.filter(ele => {
        return ele.category === "otg";
      })
      otg_btn_array.forEach((ele, i) => {
        let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <div class="services-product">
    <div class="services-product-top">
    <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
            <img src=${image} alt=${alt} srcset="" class="service-img">
            </picture>
            <div class="service-name-price">
              <div class="service-rating-name-add-btn">
                <div class="service-name-rating">
                 <h3 class="service-name">${name}</h3>
                 <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                </div>
                    <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
              </div>
              <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
            </div>
          </div>
          <div class="services-product-bottom">
            <div class="service-description">
             <ul>
              <li class="product-description-1">${description1}</li>
              <li class="product-description-2">${description2}</li>
              <li class="product-description-3">${description3}</li>
             </ul>
            </div>
          </div>
          </div>
          </div>
    `
        service_page.appendChild(card);

      });
    });

    //===========================All btn filter=============================
    all_btn.addEventListener('click', () => {
      service_page.innerHTML = '';
      washing_machine_btn.style.background = "white";
      washing_machine_btn.style.color = "grey";
      chimney_btn.style.background = "white"
      chimney_btn.style.color = "grey";
      ro_btn.style.background = "white"
      ro_btn.style.color = "grey";
      sofa_btn.style.background = "white"
      sofa_btn.style.color = "grey";
      geyser_btn.style.background = "white"
      geyser_btn.style.color = "grey";
      ac_btn.style.background = "white"
      ac_btn.style.color = "grey";
      microwave_btn.style.background = "white"
      microwave_btn.style.color = "grey";
      electrical_btn.style.background = "white"
      electrical_btn.style.color = "grey";
      refrigerator_btn.style.background = "white"
      refrigerator_btn.style.color = "grey";
      di_btn.style.background = "white"
      di_btn.style.color = "grey";
      otg_btn.style.background = "white"
      otg_btn.style.color = "grey";
      all_btn.style.background = "#000"
      all_btn.style.color = "white";

      data.forEach((ele, i) => {
        let { name, rating, actual_rating, image, price, description1, description2, description3, image_webp, alt } = ele;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <div class="services-product">
    <div class="services-product-top">
    <picture>
               <source srcset=${image_webp} type="image/webp">
               <source srcset=${image} type="image/jpg">
            <img src=${image} alt=${alt} srcset="" class="service-img">
            </picture>
            <div class="service-name-price">
              <div class="service-rating-name-add-btn">
                <div class="service-name-rating">
                 <h3 class="service-name">${name}</h3>
                 <small class="service-ratings"><i class="bi bi-star-fill"></i>${rating}<p class="actual-rating">(${actual_rating})</p></small>
                </div>
                    <button class="service-add-btn" id="cart-add-btn">ADD <i class="bi bi-plus"></i></button>
              </div>
              <big class="actual-price"><i class="bi bi-currency-rupee"></i>${price}</big>
            </div>
          </div>
          <div class="services-product-bottom">
            <div class="service-description">
             <ul>
              <li class="product-description-1">${description1}</li>
              <li class="product-description-2">${description2}</li>
              <li class="product-description-3">${description3}</li>
             </ul>
            </div>
          </div>
          </div>
          </div>
    `
        service_page.appendChild(card);
      });
    });

  });
