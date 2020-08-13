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
    const { name, language, description } = repo;
    let imageData = imageBuilder(filter, name, language);
    let result = `
            <li style=${styles.listItem}>
              <div class="card">
                  <div class="card-body">
                    <div class="card-image">
                      <a href=${imageData.ref} style=${styles.refStyle}></a>
                      <img src=${imageData.link} 
                      alt=${name} height='100%' width='100%'/> 
                    </div> 
                    <div class="card-title">
                      <a href=${getLink(
                        repo
                      )} target="_blank" rel="noopener noreferrer">
                      ${shortName(name)}
                      </a>
                    </div>

                      <p>
                      ${language !== null ? language : ""}
                      </p>
                      <p> 
                      ${fixDescription(description)}
                      </p> 
               </div>
            </li>`;
    resultContainer.append(result);
  });
};
const fixDescription = (description) => {
  return description === null ? "" : description;
};
// Shorten name to size all cards equally
const shortName = (name) => {
  let regex = /[-_+1-9]/gi;
  let splitName = name.replace(regex, " ");
  return splitName;
};

// generate link for deployed repos
const getLink = ({ svn_url, full_name, has_pages, deployed_url }) => {
  let name = full_name.replace("jaybenaim/", "");

  return deployed_url
    ? deployed_url
    : has_pages
    ? `https://jaybenaim.github.io/${name}`
    : svn_url;
};
