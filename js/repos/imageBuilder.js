const imageBuilder = (filter, name, lang) => {
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

    yelp: {
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
    job: {
      link: "../img/api-img.png",
      rel:
        "https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2126876",
    },
    backend: {
      link: "../img/api-img.png",
      rel:
        "https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2126876",
    },
    api: {
      link: "../img/api-img.png",
      rel:
        "https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2126876",
    },
    ruby: {
      link: "../img/ruby.png",
      rel:
        "https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=160777",
    },
    rails: {
      link: "../img/ruby.png",
      rel:
        "https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=160777",
    },
    java: {
      link: "../img/js-logo.svg",
      ref: "https://seeklogo.com/vector-logo/273557/javascript-js",
    },
    javascript: {
      link: "../img/js-logo.svg",
      ref: "https://seeklogo.com/vector-logo/273557/javascript-js",
    },
  };

  let imageKeys = Object.keys(images);
  let image = imageKeys.filter((key) => {
    lang = lang && lang.toLowerCase();
    return name.includes(key) || (lang && lang.includes(key) && key);
  });
  let key = image[0];
  let matchedImage = images[key];

  return matchedImage ? matchedImage : images[filter];
};
