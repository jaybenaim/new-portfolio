$(function () {
  $(".repo-filter").hide();
  toggleFilters();
});

const toggleFilters = () => {
  $(".repo-filter-trigger").click(() => {
    $(".repo-filter").toggle();
  });
};
