// get user info
async function fetchUserInfo() {
  const response = await fetch(
    "https://jays-portfolio-backend.herokuapp.com/api/users",
    {
      method: "GET",
    }
  );
  const data = await response.json();
  showUserInfo(data);
}
showUserInfo = (data) => {
  let userDetailsContainer = $("#user-details");
  userDetailsContainer.append(
    `<div class="col-sm-3 col-auto"><p>${data.name}</p><p>${data.public_repos} public repositories </p><a href="${data.html_url}">Take me to Github</a> </div>`
  );
};
setLoading = (bool) => {
  if (bool) {
    $("#repo__results")
      .append(`<div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span>
</div>`);
  } else {
    $(".spinner").hide();
  }
};
// get repos
async function fetchRepos(filter, startAt) {
  // set loading
  setLoading(true);
  startAt = !startAt ? 0 : Number(startAt) * 20;
  const response = await fetch(
    `https://jays-portfolio-backend.herokuapp.com/api/repos?start_at=${startAt}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  let reposWithImages = data.map((repo) => {
    repo.image = imageBuilder(filter, repo.name);
    return repo;
  });
  showResults(reposWithImages, filter);
}

// create repo result elements
showResults = (data, filter) => {
  let resultContainer = $("#repo__results");
  filter && clearRepos();
  setLoading(false);

  let filteredRepos = filter ? filterRepos(data, filter) : data;
  let styles = {
    listItem: `list-style:none;max-width:81%;margin:0auto;`,
    refStyle: "height:10px;width:10px;position:absolute;z-index:9999;",
  };
  filteredRepos.forEach((repo) => {
    repo.image = imageBuilder(filter, repo.name);

    let result = `<li style=${styles.listItem}><div class="card">
                  <div class="card-body">
                  <div class="card-image">
                  <a href=${repo.image.ref} style=${styles.refStyle}></a>
                  <img src=${repo.image.link} alt=${repo.name} height='100%' width='100%'/> 
                  </div> 
                  <div class="card-title"><a href='data.html_url'>${repo.name}</a></div>
                  </div></li>`;
    resultContainer.append(result);
  });
};

filterRepos = (repos, filter) => {
  if (filter === undefined) {
    filter = "all";
  }
  let results = {
    all: [...repos],
    bitmaker: [],
  };

  repos.forEach((repo, i) => {
    repo.name.includes("day") && results.bitmaker.push(repo);
    repo.name.includes("wdi") && results.bitmaker.push(repo);
  });

  return results[filter];
};
imageBuilder = (filter, name) => {
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
clearRepos = () => {
  let resultContainer = $("#repo__results");
  resultContainer.empty();
};

const setCurrentPageClass = (pageLink, direction) => {
  if (pageLink === 0) {
    pageLink = 1;
  }
  let pageItem = $(".page-item");
  let linkItem = $(`[value=${pageLink}]`);
  let linkClass = pageItem.attr("class");
  if (direction === "prev" && pageLink >= 5) {
    $(".page-link-item").each((index, el) => {
      let value = Number($(el).text());
      $(el).attr("value", value - 1);
      $(el).text(value - 1);
    });
  } else if (direction === "next" && pageLink > 5) {
    $(".page-link-item").each((index, el) => {
      let value = Number($(el).text());
      $(el).attr("value", value + 1);
      $(el).text(value + 1);
    });
  } else if (direction === "next" && pageLink <= 11) {
    $(".page-link-item").each((index, el) => {
      $(el).attr("value", index + 1);
      $(el).text(index + 1);
    });
    $("[value='1']").addClass("active");
  } else {
    pageItem.removeClass("active");
    linkItem.parent().addClass(`${linkClass} active`);
  }
};

const getCurrentPage = () => {
  return {
    element: $(".page-item.select-page.active").find(".page-link"),
    value: $(".page-item.select-page.active").find(".page-link").attr("value"),
  };
};

const prevPage = () => {
  let currentPage = getCurrentPage().value;
  currentPage = currentPage >= 1 ? Number(currentPage) - 1 : 0;

  clearRepos();
  fetchRepos("all", currentPage);
  setCurrentPageClass(currentPage, "prev");
};
const nextPage = () => {
  let currentPage = Number(getCurrentPage().value);
  currentPage = currentPage < 10 ? Number(currentPage) + 1 : 0;

  clearRepos();
  fetchRepos("all", currentPage);
  setCurrentPageClass(currentPage, "next");
};

// onload
$(function () {
  getCurrentPage();
  fetchUserInfo();
  fetchRepos("all", 0);

  // filter
  $(".repo-filter").click(function () {
    fetchRepos(this.name);
  });

  // pagination
  $(".select-page").click(function () {
    let pageLink = $(this).find(".page-link").text();
    clearRepos();
    fetchRepos("all", pageLink - 1);
    setCurrentPageClass(pageLink);
  });

  $("#prev-btn").click(() => {
    prevPage();
  });
  $("#next-btn").click(() => {
    nextPage();
  });
  // hide on scroll
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      $(".pagination").css("bottom", "2%");
    } else {
      $(".pagination").css("bottom", "-10%");
    }
    prevScrollpos = currentScrollPos;
  };
});
