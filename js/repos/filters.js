$(function () {
  $(".repo-filter").hide();
  toggleFilters();
});

const toggleFilters = () => {
  let trigger = $(".repo-filter-trigger");
  let filters = $(".repo-filter");
  let activeFilterIcon = $("i").attr("class");

  trigger.click(() => {
    filters.toggle();
    if (activeFilterIcon.includes("down")) {
      $(".fa-chevron-down").replaceWith("<i class='fa fa-chevron-up'></i>");
      activeFilterIcon = $("i").attr("class");
    } else {
      $(".fa-chevron-up").replaceWith("<i class='fa fa-chevron-down'></i>");
      activeFilterIcon = $("i").attr("class");
    }
  });
};
const filterRepos = (repos, filter) => {
  if (filter === undefined) {
    filter = "all";
  }
  let results = {
    all: [...repos],
    bitmaker: [],
    games: [],
    rails: [],
  };

  repos.forEach((repo, i) => {
    repo.name = repo.name.toLowerCase();

    repo.name.includes("day") && results.bitmaker.push(repo);
    repo.name.includes("wdi") && results.bitmaker.push(repo);
    repo.name.includes("game") && results.games.push(repo);
    repo.name.includes("rail") && results.rails.push(repo);
    repo.name.includes("ruby") && results.rails.push(repo);
  });

  return results[filter];
};
async function findRepos(filter) {
  // set loading
  setLoading(true);
  clearRepos();
  if (filter === "all" || !filter) {
    filter = "";
  }

  const response = await fetch(
    `http://localhost:5000/api/repos/find/?filter=${filter}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  let reposWithImages = data.map((repo) => {
    repo.image = imageBuilder(filter, repo.name, repo.language);

    return repo;
  });

  showResults(reposWithImages);
  return reposWithImages;
}
