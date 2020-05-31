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
      $("i").replaceWith("<i class='fa fa-chevron-up'></i>");
      activeFilterIcon = $("i").attr("class");
    } else {
      $("i").replaceWith("<i class='fa fa-chevron-down'></i>");
      activeFilterIcon = $("i").attr("class");
    }
  });
};
