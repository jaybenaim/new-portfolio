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
async function fetchRepos(filter) {
  const response = await fetch(
    "https://jays-portfolio-backend.herokuapp.com/api/repos",
    {
      method: "GET",
    }
  );
  const data = await response.json();
  showResults(data, filter);
}

showUserInfo = (data) => {
  let userDetailsContainer = $("#user-details");
  userDetailsContainer.append(
    `<div class="col-12"><p>${data.name}</p><p>${data.public_repos} public repositories </p><a href="${data.html_url}">Take me to Github</a> </div>`
  );
};
showResults = (data, filter) => {
  let resultContainer = $("#repo__results");
  filter && clearRepos();
  let filteredRepos = filterRepos(data, filter);
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
clearRepos = () => {
  let resultContainer = $("#repo__results");
  resultContainer.empty();
};
filterRepos = (repos, filter) => {
  if (filter === undefined) {
    filter = "all";
  }
  let results = {
    all: [...repos],
    bitmaker: [],
  };
  repos.forEach((repo) => {
    repo.name.includes("day") && results.bitmaker.push(repo);
    repo.name.includes("wdi") && results.bitmaker.push(repo);
  });

  return results[filter];
};

const setDataToJson = () => {
  let repos = fetchRepos();
  fs.writeFileSync("../data/phraseFreqs.json", JSON.stringify(output));
};

$(function () {
  fetchUserInfo();
  fetchRepos();

  $(".repo-filter").click(function () {
    fetchRepos(this.name);
  });
});
