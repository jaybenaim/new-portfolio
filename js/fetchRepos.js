async function fetchUserInfo() {
  const response = await fetch("https://api.github.com/users/jaybenaim", {
    method: "GET",
  });
  const data = await response.json();
  showUserInfo(data);
}
async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/jaybenaim/repos?per_page=40",
    {
      method: "GET",
    }
  );
  const data = await response.json();
  showResults(data);
}

showUserInfo = (data) => {
  let userDetailsContainer = $("#user-details");
  userDetailsContainer.append(
    `<div class="col-12"><p>${data.name}</p><p>${data.public_repos} public repositories </p><a href="${data.html_url}">Take me to Github</a> </div>`
  );
};
showResults = (data) => {
  let resultContainer = $("#repo__results");

  data.forEach((item) => {
    let result = `<div class="card">
                  <div class="card-body">
                    <div class="card-title"><a href='data.html_url'>${item.name}</a></div>
                  </div>`;
    resultContainer.append(result);
  });
};
$(function () {
  fetchUserInfo();
  fetchRepos();
});
