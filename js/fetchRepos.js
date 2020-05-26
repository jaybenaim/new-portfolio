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
    `<div class="col-12"><p>${data.name}</p><p>${data.public_repos} public repositories </p><a href="${data.html_url}">Take me to Github</a> </div>`
  );
};

// get repos
async function fetchRepos(filter, startAt) {
  startAt = !startAt ? 0 : Number(startAt) * 20;
  const response = await fetch(
    `https://jays-portfolio-backend.herokuapp.com/api/repos?start_at=${startAt}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  showResults(data, filter);
}

// create repo result elements
showResults = (data, filter) => {
  let resultContainer = $("#repo__results");
  filter && clearRepos();
  let filteredRepos = filter ? filterRepos(data, filter) : data;
  let styles = `list-style:none`;

  filteredRepos.forEach((item) => {
    let result = `<li style=${styles}><div class="card">
                  <div class="card-body">
                  <div class="card-image>
                  <img src="item.
                    <div class="card-title"><a href='data.html_url'>${item.name}</a></div>
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
    repo.image = imageBuilder(filter);
    repo.name.includes("day") && results.bitmaker.push(repo);
    repo.name.includes("wdi") && results.bitmaker.push(repo);
  });

  return results[filter];
};
imageBuilder = (filter) => {
  let images = {
    all: "placeholder",
    bitmaker: "school-image",
  };

  return images[filter];
};
clearRepos = () => {
  let resultContainer = $("#repo__results");
  resultContainer.empty();
};

$(function () {
  fetchUserInfo();
  fetchRepos();

  // filter
  $(".repo-filter").click(function () {
    fetchRepos(this.name);
  });

  // pagination
  $(".select-page").click(function () {
    let pageLink = $(this).find(".page-link");
    let value = pageLink.attr("value");
    clearRepos();
    fetchRepos(null, value);
    setCurrentPage(value);
  });
});
const setCurrentPage = (pageLink) => {
  let pageItem = $(".page-item");
  let linkItem = $(`[value=${pageLink}]`);
  let linkClass = pageItem.attr("class");
  pageItem.removeClass("active");
  linkItem.parent().addClass(`${linkClass} active`);
};
