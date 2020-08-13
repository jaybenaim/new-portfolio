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
const showUserInfo = (data) => {
  let userDetailsContainer = $("#user-details");
  userDetailsContainer.append(
    `
    <p class="name text-primary">${data.name}</p>
    <p class="repo-amount">${data.public_repos} public repositories </p>
    <a href="${data.html_url}" target="_blank" rel="noopener noreferrer">Take me to Github</a>
    `
  );
};
