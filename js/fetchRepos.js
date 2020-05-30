const setLoading = (bool) => {
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

const filterRepos = (repos, filter) => {
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
      $(".pagination").css("bottom", "5%");
    } else {
      $(".pagination").css("bottom", "-10%");
    }
    prevScrollpos = currentScrollPos;
  };
});
