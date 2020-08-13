// onload
$(function () {
  getCurrentPage();
  fetchUserInfo();
  // fetch repos start at page 0
  fetchRepos("all", 0);

  // filter
  $(".repo-filter-link").click(function () {
    let paginationContainer = $(".pagination-container");

    if (this.name === "all") {
      fetchRepos(this.name);
      paginationContainer.show();
    } else {
      findRepos(this.name);
      paginationContainer.hide();
    }
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
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      $(".pagination").css("bottom", "5%");
      if (this.window.innerWidth >= 450) {
        $(".pagination").show();
      }
    } else {
      $(".pagination").css("bottom", "-10%");
      if (this.window.innerWidth >= 450) {
        $(".pagination").hide();
      }
    }
    prevScrollpos = currentScrollPos;
  };
});

// get repos
async function fetchRepos(filter, startAt) {
  // set loading
  setLoading(true);
  startAt = !startAt ? 0 : Number(startAt) * 20;
  const response = await fetch(
    `http://localhost:5000/api/repos?start_at=${startAt}`,
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

const clearRepos = () => {
  let resultContainer = $("#repo__results");
  resultContainer.empty();
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
