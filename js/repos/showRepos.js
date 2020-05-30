// create repo result elements
const showResults = (data, filter) => {
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
                  <img src=${repo.image.link} alt=${
      repo.name
    } height='100%' width='100%'/> 
                  </div> 
                  <div class="card-title"><a href=${getLink(
                    repo
                  )} target="_blank" rel="noopener noreferrer">${shortName(
      repo.name
    )}</a></div>
                  </div></li>`;
    resultContainer.append(result);
  });
};
const shortName = (name) => {
  return name.length >= 8 ? name.slice(0, 8) + "..." : name;
};
const getLink = (repo) => {
  let filterKeys = {
    dolce: {
      link: "https://dolcenada.ca",
      alt: "dolcenada homepage",
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
