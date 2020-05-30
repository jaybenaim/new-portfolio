const imageBuilder = (filter, name) => {
  let images = {
    all: {
      link: "../img/gradHat.png",
      ref: "https://seeklogo.com/vector-logo/248724/graduation",
    },
    bitmaker: {
      link: "../img/gradHat.png",
      ref: "https://seeklogo.com/vector-logo/248724/graduation",
    },
    bit: {
      link: "../img/gradHat.png",
      ref: "https://seeklogo.com/vector-logo/248724/graduation",
    },
    wdi: {
      link: "../img/gradHat.png",
      ref: "https://seeklogo.com/vector-logo/248724/graduation",
    },
    angular: {
      link: "../img/angular.png",
      ref: "https://icons8.com/icons/set/angularjs",
    },
    tour: {
      link: "../img/angular.png",
      ref: "https://icons8.com/icons/set/angularjs",
    },
    react: {
      link: "../img/react-logo.svg",
      ref: "https://seeklogo.com/vector-logo/273845/react",
    },
    java: {
      link: "../img/js-logo.svg",
      ref: "https://seeklogo.com/vector-logo/273557/javascript-js",
    },
    game: {
      link: "../img/games.jpg",
      ref: "http://clipart-library.com/clipart/6376.htm",
    },
    tic: {
      link: "../img/games.jpg",
      ref: "http://clipart-library.com/clipart/6376.htm",
    },
    python: {
      link: "../img/python.svg",
      ref: "https://seeklogo.com/vector-logo/273830/python",
    },
    django: {
      link: "../img/python.svg",
      ref: "https://seeklogo.com/vector-logo/273830/python",
    },
    free: {
      link: "../img/fcc.png",
      ref: "https://icons8.com/icons/set/free-code-camp",
    },
    boot: {
      link: "../img/bootstrap.png",
      rel: "https://icons8.com/icons/set/bootstrap",
    },
    shop: {
      link: "../img/shopping-cart.png",
      rel: "https://pixabay.com/vectors/shopping-cart-shopping-icon-1105049/",
    },
    sell: {
      link: "../img/shopping-cart.png",
      rel: "https://pixabay.com/vectors/shopping-cart-shopping-icon-1105049/",
    },
    dolce: {
      link: "../img/shopping-cart.png",
      rel: "https://pixabay.com/vectors/shopping-cart-shopping-icon-1105049/",
    },
    store: {
      link: "../img/shopping-cart.png",
      rel: "https://pixabay.com/vectors/shopping-cart-shopping-icon-1105049/",
    },
  };

  let imageKeys = Object.keys(images);
  let image = imageKeys.filter((key) => {
    return name.toLowerCase().includes(key);
  });
  let key = image[0];
  let matchedImage = images[key];

  return matchedImage ? matchedImage : images[filter];
};
