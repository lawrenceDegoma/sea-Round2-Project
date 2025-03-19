document.addEventListener("DOMContentLoaded", () => {
  // Load cafes from local storage or use default list
  let cafeTypes = JSON.parse(localStorage.getItem("cafes")) || [
    {
      name: "About Time",
      description:
        "Great place to study and do work. The downstairs lobby can get pretty loud, but there is a space upstairs that's meant to be a more quiet setting. Drinks are on the more expensive side, but overall good and consistent quality. Rating: 8.5/10",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLVgxVOmj6H7UVo88HXSpSSvzuR9NO-KN4T753oLJuB4y0EF3N77C2f3mBB75EdEUdAU&usqp=CAU",
      location: "LA",
      address: "3287 Wilshire Blvd B, Los Angeles, CA 90010",
    },

    {
      name: "Cafe Spot",
      description:
        "Spot is a direct contrast to About time in which the drinks are great, but it isn't the best place to do work. Not many seats that aren't reserved for at least three people. Rating: 6.5/10",
      image:
        "https://static.wixstatic.com/media/a875c0_fb5e00c4200f467586242268c42d2fd0~mv2.jpg/v1/fill/w_1652,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%EA%B0%80%EB%A1%9C%202.jpg",
      location: "LA",
      address: "3324 W 6th St, Los Angeles, CA 90020",
    },

    {
      name: "Memory Look",
      description:
        "Memory Look is the best cafe in Ktown in my opinion. This spot not only has great drinks but a great study space. Granted it's mainly outside seating which shouldn't be a problem for most parts of the year. Rating: 9.3/10",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/yuKGdOqclNOZXgQZM3m4gA/o.jpg",
      location: "LA",
      address: "2881 W Olympic Blvd, Los Angeles, CA 90006",
    },

    {
      name: "DAMO",
      description:
        "DAMO has some of the best matcha in LA. The menu's pricey and the study space is awful, but the drinks are up there for being some of the best in LA. Would not recommend if you want to do work, but would definitely suggest a grab and go visit. Rating: 7.2/10",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/u1eaS1L6qH8l1GwGIblKdw/o.jpg",
      location: "LA",
      address: "3510 W 8th St, Los Angeles, CA 90005",
    },

    {
      name: "Mandarin",
      description:
        "Modern coffee shop in Pasadena. Can taste the quality in their espresso, but nothing particularly special about the drinks. This shop is located in a cute alleyway remeniscent of a Harry Potter road. Would not make a great study spot. Rating: 6.5/10",
      image:
        "https://curtissu.com/wp-content/uploads/2023/06/DSC01164-scaled.jpg",
      location: "Pasadena",
      address: "380 S Lake Ave #111, Pasadena, CA 91101",
    },

    {
      name: "Community Goods",
      description:
        "Popularity blew up due to Justin and Hailey Bieber. Offers a selection of warm foods while most other cafes focus on pastries and sweets. Traffic in the cafe is crazy. Said to be overrated. Rating: NA",
      image:
        "https://toast-local-nyc3-production.nyc3.cdn.digitaloceanspaces.com/restaurants/ae29f177-223b-4689-8e5d-19885415eb34/community-goods-banner-288731918-857.webp",
      location: "LA",
      address: "710 N Edinburgh Ave, Los Angeles, CA 90046",
    },

    {
      name: "YEEMS",
      description:
        "Known for having the best vienna latte in Ktown. Their staple drink is described as tasting similar to tiramisu with the use of their house-made foam that tops off each drink. Rating: NA",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/UVycd4DbqxVNlAA_f632RQ/o.jpg",
      location: "LA",
      address: "3033 W 6th St #107, Los Angeles, CA 90020",
    },

    {
      name: "Republik",
      description:
        "Good balance of drink quality to study environment. Can get pretty loud at times. Their purple caramel latte is an ube latte sweetened with caramel which does justice to the filipino yam. Rating: 6.7/10",
      image:
        "https://www.visitpasadena.com/imager/assets_simpleviewinc_com/simpleview/image/upload/c_fit,w_800,h_600/crm/pasadenaca/republik-945x596-6_c3cc3d3e99a0496ea9909ca43528d03d_dab15827-ead2-df17-08c1ebd615adf7cb_c3874c415bc6570c0135981023e928db.jpg",
      location: "Pasadena",
      address: "854 E Green St, Pasadena, CA 91101",
    },

    {
      name: "Unincorporated Roasters",
      description:
        "The quality of espresso here is noticeably better than most. I usually get flavored lattes but would gladly drink a plain flat white from here. However, be ready for a grab and go as there is very little seating. Rating: 7.3/10",
      image:
        "https://dailycoffeenews.com/wp-content/uploads/2019/02/Unincorporated_Coffee.jpg",
      location: "Pasadena",
      address: "3045 Lincoln Ave, Altadena, CA 91001",
    },

    {
      name: "RNY",
      description:
        "Located in the same plaza as popular kbbq spot Hae Jang Chon, RNY has an inconvenient parking situation. Drinks are okay and workspace is adequate. Rating: 6.5/10",
      image:
        "https://fastly.4sqi.net/img/general/width960/26185791__bA4xJl-yFRRoRJ-CZzwHDbdu164wyqop60xpS_iaxw.jpg",
      location: "LA",
      address: "3829 W 6th St, Los Angeles, CA 90020",
    },

    {
      name: "3Thyme",
      description:
        "Known for their bold drinks that take a spin on traditional cafe selections. Operates as a coffee shop by day and wine by at night. Rating: N/A",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/Xtejj8C3eExeRyGkipA6eg/o.jpg",
      location: "LA",
      address: "600 S Harvard Blvd #100, Los Angeles, CA 90005",
    },

    {
      name: "Sip and Savor",
      description:
        "Allegedly the best tiramisu lattes in Orange County. Plenty of tables with outlets available and different chairs to choose from. Rating: N/A",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/5c8cFeKLRNi0wcj7fXWSGw/o.jpg",
      location: "OC",
      address: "106 W Wilshire Ave. Fullerton, CA 92832",
    },

    {
      name: "Fika Fika",
      description:
        "This shop has decent drinks with a solid workspace. They have two locations of around the same quality that remain consistent. Rating 6.2/10",
      image:
        "https://www.visitpasadena.com/imager/assets_simpleviewinc_com/simpleview/image/upload/c_fit,w_800,h_600/crm/pasadenaca/Fika-fika-5_c3cc3d3e99a0496ea9909ca43528d03d_da4e8962-b145-3e07-79c268bc97b1d1c0_9c763bc877987c02f78ae64259e693d3.jpg",
      location: "Pasadena",
      address: "1731 E Colorado Blvd, Pasadena, CA 91106",
    },

    {
      name: "Harucake",
      description:
        "Rumored to have some of the best cafe pastries in Los Angeles. Known for their corn latte. Traffic is heavy in this shop after going viral online. Rating: N/A",
      image:
        "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_center,f_auto/Harucake",
      location: "LA",
      address: "3450 W 6th St #107, Los Angeles, CA 90010",
    },

    {
      name: "Intellegencia",
      description:
        "Drinks are mediocre at best. Feels like a fake coffee shop with how the drinks are made. Good work spot though. Rating 4.5/10",
      image:
        "https://cloudinary-assets.dostuffmedia.com/res/dostuff-media/image/upload/venue-402113/1495227853.jpg",
      location: "Pasadena",
      address: "55 E Colorado Blvd, Pasadena, CA 91105",
    },

    {
      name: "Thank You Coffee",
      description:
        "Offers unique flavors of lattes and has an open space inside to do work. Cute aesthetic and seemingly good drinks. Rating N/A",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/Q4iSV8Xpem_0V9DWbLdZuQ/o.jpg",
      location: "OC",
      address: "255 N Anaheim Blvd Unit D, Anaheim, CA 92805",
    },

    {
      name: "Lamill Coffee",
      description:
        "Originally opened in LA but has grown in popularity in Anaheim. Coffee is a lighter roast and they are known for their cold brews. Rating N/A",
      image:
        "https://cdn.shopify.com/s/files/1/1507/4926/files/outside_resize2_480x480.jpg?v=1640044467",
      location: "OC",
      address: "2420 E Katella Ave, Anaheim, CA 92806",
    },

    {
      name: "Sojeata",
      description:
        "Praised for their matcha, this new cafe in Fullerton offers a variety of drink options with plenty of space to get work done. Rating: N/A",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/HQkTyzWcVmrCytQeE1J5iQ/o.jpg",
      location: "OC",
      address: "115 E Commonwealth Ave Unit A, Fullerton, CA 92832",
    },

    {
      name: "Bon Appatea",
      description:
        "Small cafe in Alhambra that offers some of the best popcorn chicken one can get from a cafe. Solid drinks and a decent workspace. Rating: 8/10",
      image:
        "https://static.spotapps.co/spots/93/fffe0745f64816b5fd7ef1284a398f/full",
      location: "Pasadena",
      address: "7 S 2nd St, Alhambra, CA 91801",
    },

    {
      name: "Blue Bottle",
      description:
        "This traditional coffee shop offers a variety of standard espresso drinks. Does not focus on flavored coffee, so would recommend if you are into drinks that aren't too sweet. Rating: 7.5/10",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/tdEnV91xzSDtKtRm8KVRmg/o.jpg",
      location: "Pasadena",
      address: "18 S Fair Oaks Ave, Pasadena, CA 91105",
    },

    {
      name: "Blk Dot Coffee",
      description:
        "Blk Dot offers a variety of traditional drinks along with an assortment of diverse drinks such as Vietnamese iced coffee and Thai tea. Would recommend as a grab an go spot as there isn't much seating. Rating: 8.5/10",
      image:
        "https://images.squarespace-cdn.com/content/v1/61f9f5824087542a39e9c634/dbebec3d-ad41-45e0-98c2-8a069ef2def8/lychee-honey-oolong.jpg?format=1000w",
      location: "OC",
      address: "924 Spectrum Center Dr, Irvine, CA 92618",
    },
  ];

  // Function to save cafe state to local storage
  function saveCafesToLocalStorage() {
    localStorage.setItem("cafes", JSON.stringify(cafeTypes));
  }

  // Populate cafe list based on location
  function populateCafeList(location) {
    const cafes = getCafesByLocation(location);
    const cafeList = document.querySelector(".dex-list");
    cafeList.innerHTML = ""; // Clear previous list

    cafes.forEach((cafe) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${(cafe.originalIndex + 1).toString().padStart(3, "0")}: ${cafe.name}`; // Add original index in 000 format
      listItem.classList.add("cafe-item"); // Add a class for styling

      // Add coffee cup marker
      const coffeeCup = document.createElement("img");
      coffeeCup.src = cafe.visited ? "images/full.png" : "images/empty.jpeg";
      coffeeCup.classList.add("coffee-cup");
      coffeeCup.classList.add("cafe-cup"); // Add a class for styling
      coffeeCup.setAttribute("data-index", cafe.originalIndex); // Set data-index attribute
      listItem.appendChild(coffeeCup);

      listItem.addEventListener("click", () => showCafeDetails(cafe));
      cafeList.appendChild(listItem);
    });
  }

  // Function to get cafes by location
  function getCafesByLocation(location) {
    switch (location) {
      case "LA":
        return cafesLA;
      case "OC":
        return cafesOC;
      case "Pasadena":
        return cafesPasadena;
      case "allCafes":
        return allCafes;
      default:
        return [];
    }
  }

  // Function to show café details
  function showCafeDetails(cafe) {
    const cafeNameElement = document.getElementById("cafeName");
    const cafeImageElement = document.getElementById("cafeImage");
    const cafeDescriptionElement = document.getElementById("cafeDescription");
    const cafeLocationElement = document.getElementById("cafeLocation");
    const cafeAddressElement = document.getElementById("cafeAddress");

    // Update elements with café details
    cafeNameElement.textContent = cafe.name;
    cafeImageElement.src = cafe.image;
    cafeDescriptionElement.textContent = cafe.description;
    cafeLocationElement.textContent = `Location: ${cafe.location}`;
    cafeAddressElement.textContent = `Address: ${cafe.address}`;

    cafeDescriptionElement.addEventListener("input", () => {
      cafe.description = cafeDescriptionElement.textContent;
      saveCafesToLocalStorage(); // Save changes to local storage
    });
  }

  // Load cafes into respective arrays
  let allCafes = [];
  let cafesLA = [];
  let cafesOC = [];
  let cafesPasadena = [];
  cafeTypes.forEach((cafe, index) => {
    switch (cafe.location) {
      case "LA":
        cafesLA.push({ ...cafe, originalIndex: index });
        allCafes.push({ ...cafe, originalIndex: index });
        break;
      case "OC":
        cafesOC.push({ ...cafe, originalIndex: index });
        allCafes.push({ ...cafe, originalIndex: index });
        break;
      case "Pasadena":
        cafesPasadena.push({ ...cafe, originalIndex: index });
        allCafes.push({ ...cafe, originalIndex: index });
        break;
      default:
        break;
    }
  });

  // Populate initial cafe list
  populateCafeList("allCafes");

  // Event listeners for location links
  document.getElementById("laLink").addEventListener("click", (event) => {
    event.preventDefault();
    populateCafeList("LA");
  });
  document
    .getElementById("ocLink")
    .addEventListener("click", () => populateCafeList("OC"));
  document
    .getElementById("pasadenaLink")
    .addEventListener("click", () => populateCafeList("Pasadena"));
  document
    .getElementById("allLink")
    .addEventListener("click", () => populateCafeList("allCafes"));

  // Reset button event listener
  document
    .querySelector("#resetButton")
    .addEventListener("click", () => populateCafeList("allCafes"));

  // Show details for first cafe
  if (allCafes.length > 0) {
    showCafeDetails(allCafes[0]);
  }

  // Toggle entry page and main content
  document.getElementById("enterButton").addEventListener("click", () => {
    document.getElementById("entryPage").classList.add("hide");
    document.getElementById("mainContent").style.display = "block";
  });

  document.querySelector(".dex-list").addEventListener("click", (event) => {
    if (event.target.classList.contains("coffee-cup")) {
      let cafeIndex = event.target.getAttribute("data-index");
      cafeTypes[cafeIndex].visited = !cafeTypes[cafeIndex].visited; // Toggle visited state
      event.target.src = cafeTypes[cafeIndex].visited
        ? "images/full.png"
        : "images/empty.jpeg"; // Update coffee cup image
      saveCafesToLocalStorage(); // Save state in local storage
    }
  });

  // function to trigger the animation
  function startEntryAnimation() {
    // Add the animation class to the circle element
    var circle = document.getElementById("enterButton");
    circle.classList.add("animate-split-circle");
  }

  document.getElementById("enterButton").addEventListener("click", () => {
    startEntryAnimation(); // Start the animation
    document.getElementById("entryPage").classList.add("hide");
    document.getElementById("mainContent").style.display = "block";
  });

  function populateMiniCardsGallery(cafes) {
    const miniCardsGallery = document.getElementById("miniCardsGallery");
    miniCardsGallery.innerHTML = ""; // Clear previous content

    cafes.forEach((cafe) => {
      const miniCard = document.createElement("div");
      miniCard.classList.add("mini-card");

      // Add mini card content
      miniCard.innerHTML = `
                <h3>${cafe.name}</h3>
                <img src="${cafe.image}" alt="${cafe.name}">
                <h4>${cafe.location}</h4>
            `;

      // Add click event listener to show cafe details
      miniCard.addEventListener("click", () => showCafeDetails(cafe));

      miniCardsGallery.appendChild(miniCard);
    });
  }

  function filterAndRepopulateMiniCards(location) {
    const cafes = getCafesByLocation(location);
    populateMiniCardsGallery(cafes);
  }

  // Initial population of mini cards gallery with all cafes
  populateMiniCardsGallery(allCafes);

  // Event listeners for location links
  document
    .querySelector("#resetButton")
    .addEventListener("click", () => populateMiniCardsGallery(allCafes));
  document
    .getElementById("laLink")
    .addEventListener("click", () => populateMiniCardsGallery(cafesLA));
  document
    .getElementById("ocLink")
    .addEventListener("click", () => populateMiniCardsGallery(cafesOC));
  document
    .getElementById("pasadenaLink")
    .addEventListener("click", () => populateMiniCardsGallery(cafesPasadena));
  document
    .getElementById("allLink")
    .addEventListener("click", () => populateMiniCardsGallery(allCafes));

  document.getElementById("searchIcon").addEventListener("click", handleSearch);
  const searchIcon = document.getElementById("searchIcon");
});
