//============= Started Popup of the Home Page===========
let start_close_btn = document.querySelector("#close-started");

const AutoPopUpStarted = () => {
  setTimeout(() => {
    document.querySelector(".lets-start-popup").classList.add("s-active");
  }, 10);
}

AutoPopUpStarted();

start_close_btn.addEventListener("click", () => {
  document.querySelector(".lets-start-popup").classList.remove("s-active");
});


// =======================Login form Popup==================

let login_close = document.querySelector(".popup .close-btn");

login_close.addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("active");
})

const AutoPopUp = () => {
  setTimeout(() => {
    document.querySelector(".popup").classList.add("active");
  }, 20);
}
AutoPopUp();

//===================Image slider from swipe js====================

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


//====================Greeting Messages for users================

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

  document.getElementById('greeting-msg').innerHTML = greeting;

}

clock();

//======================Gps drop down option=================

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


//======================Accessing user Location=======================
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

//==================display cart section==================

let cart_btn = document.querySelector('.cart-btn');
cart_btn.addEventListener('click', () => {
  document.querySelector('.product-cart').style.display = "block";
})

let close_cart_btn = document.querySelector('.close-cart-btn');
close_cart_btn.addEventListener('click', () => {
  document.querySelector('.product-cart').style.display = "none";
})

//===================Delete cart offers================

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


//==================remove drop-down from Login Number input==================

document.getElementById('number').addEventListener('keydown', function (e) {
  if (e.keyCode === 38 || e.keyCode == 40) {
    e.preventDefault()
  }
})

//==================Fetching Category Data======================

let categories_section = document.querySelector('.categories-parent');
let json_url = "categories.json";
fetch(json_url)
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((ele, i) => {
      let { name, image, image_webp, url, alt } = ele;
      let card = document.createElement('a');
      card.classList.add('categories-cards');
      card.href = url;
      card.innerHTML = `

          <picture>
            <source srcset=${image_webp} type="image/webp">
            <source srcset=${image} type="image/png">
          <img src=${image} loading="lazy" decoding="async" alt=${alt}/>
        </picture>
          <h3>${name}</h3>
       
        `
      categories_section.appendChild(card);

    });
  });

//==================Fetching Recomended Data======================

let recommended_section = document.querySelector('.recomended-parent');
let json_url_2 = "recommended.json";
fetch(json_url_2)
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((ele, i) => {
      let { name, image, image_webp, service_providor, price, offer, rating, alt } = ele;
      let card = document.createElement('div');
      card.classList.add('recomended-services');
      card.innerHTML = `

        <picture>
        <source srcset=${image_webp} type="image/webp">
        <source srcset=${image} type="image/jpg">
      <img src=${image} loading="lazy" decoding="async" alt=${alt}/>
      </picture>
      <div class="services-description">
        <div class="recomended-offers">
          <div class="services-ratings">
            <p>
              <span class="yellow"><i class="bi bi-star-fill"></i></span>
              ${rating}
            </p>
          </div>
          <div class="services-offers">
            <p>${offer}</p>
          </div>
        </div>
        <div class="service-provider">
          <h3>${name}</h3>
          <p>${service_providor}</p>
          <h3><span class="small-font"><i class="bi bi-currency-rupee"></i></span>${price}<sub
              class="small-font">/h</sub></h3>
        </div>
      </div>
          
       
        `
      recommended_section.appendChild(card);

    });
  });






