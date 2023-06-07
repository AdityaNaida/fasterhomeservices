
//======================Booking page Content fetching======================


let booking_section = document.querySelector('#booking-container');
let json_url_2 = "bookings.json";
fetch(json_url_2)
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((ele, i) => {
      let { name, image, image_webp, time, date, confirmed, pending, cancelled , alt } = ele;
      let card = document.createElement('div');
      card.classList.add('booking-services-1');
      card.innerHTML = `

      <div class="booking-services-1-top">
      <picture>
        <source srcset=${image_webp} type="image/webp">
        <source srcset=${image} type="image/jpg">
      <img src=${image} alt=${alt} srcset="" loading="lazy" decoding="async">
    </picture>
      <div class="booking-name">
        <h4>${name}</h4>
      </div>
    </div>
    <div class="booking-services-1-bottom">
      <div class="booking-status">
        <big>status</big>
        <div class="time-date">
          <i class="bi bi-calendar"></i>
          <small>${time},<p>${date}</p></small>
        </div>
      </div>
      <div class="call-order-status">
        <h4 class="confirmed-status">${confirmed}</h4>
        <h4 class="pending-status">${pending}</h4>
        <h4 class="cancled-status">${cancelled}</h4>

        <button type="button"><i class="bi bi-telephone"></i> Call</button>
      </div>
    </div>
  
          
       
        `
        booking_section.appendChild(card);

    });
  });

  let upcoming_bookings = document.querySelector('.upcoming-bookings');
  let booking_history = document.querySelector('.bookings-History');


  //====================Upcoming Button on click activation====================
   
  upcoming_bookings.addEventListener('click',()=>{
    upcoming_bookings.style.background = "rgba(204, 141, 255, 0.42)";
    upcoming_bookings.style.color = "  #77468f";
    booking_history.style.background = "white";
    booking_history.style.color = "grey";
  })

   //==========================History Button on click activation=====================
    booking_history.addEventListener('click',()=>{
      booking_history.style.background = "rgba(204, 141, 255, 0.42)";
      booking_history.style.color = "  #77468f";
      upcoming_bookings.style.background = "white";
      upcoming_bookings.style.color = "grey";
  })
        



