// create repo result elements
const showResults = (data, filter) => {
  if (!filter) {
    filter = "all";
  }
  let resultContainer = $("#repo__results");
  let styles = {
    listItem: `list-style:none;`,
    refStyle: "height:10px;width:10px;position:absolute;z-index:9999;",
  };

  // disable loader and clear results
  setLoading(false);
  filter && clearRepos();

  // check if filter has been activated if not use default results
  let repos = filter ? filterRepos(data, filter) : data;
  // create element for each repo item
  repos.forEach((repo) => {
    repo.image = imageBuilder(filter, repo.name, repo.language);
    let language = repo.language ? repo.language : "";
    let result = `
            <li style=${styles.listItem}>
              <div class="card">
                  <div class="card-body">
                    <div class="card-image">
                      <a href=${repo.image.ref} style=${styles.refStyle}></a>
                      <img src=${repo.image.link} 
                      alt=${repo.name} height='100%' width='100%'/> 
                    </div> 
                    <div class="card-title">
                      <a href=${getLink(
                        repo
                      )} target="_blank" rel="noopener noreferrer">
                      ${shortName(repo.name)}
                      </a>
                      <p>
                      ${language}
                      </p>
                    </div>
               </div>
            </li>`;
    resultContainer.append(result);
  });
};
// Shorten name to size all cards equally
const shortName = (name) => {
  let width = window.innerWidth;

  if (name.length >= 8 && width >= 450) {
    return name.slice(0, 8) + "...";
  } else {
    return name;
  }
};

// generate link for deployed repos
const getLink = (repo) => {
  let filterKeys = {
    dolce: {
      link: "https://dolcenada.ca",
    },
    job: {
      link: "https://job-finder-web-scraper.herokuapp.com/",
    },
    shop_it_django: {
      link: "https://jaybenaim.github.io/shop_it_django/",
    },
    card_games: {
      link: "https://jaybenaim.github.io/card_games/",
    },
    isell: {
      link: "https://jaybenaim.github.io/isell/",
    },
    html5: {
      link: "https://jaybenaim.github.io/html5Game/",
    },
  };
  let linkKeys = Object.keys(filterKeys);
  let link = linkKeys.filter((key) => {
    return repo.name.toLowerCase().includes(key);
  });
  let key = link[0];
  let matchedLink = filterKeys[key];

  return matchedLink ? matchedLink.link : repo.html_url;
};
