const setLoading = (bool, type) => {
  if (bool) {
    if (type === "fish") {
      $(".fish-spinner")
        .append(`<img src="../img/fish-loader.gif" class="loader-gif" width="400" height="300" alt="created by jacob benaim gif of fish looping catching rings"/>
  `);
    }
    $(".spinner")
      .append(`<img src="../img/loader.gif" class="loader-gif" alt="created by jacob benaim gif of person passing paper to themselves"/>
  `);
  } else {
    if (type == "fish") {
      $(".fish-spinner").hide();
    }
    $(".spinner").hide();
  }
};
