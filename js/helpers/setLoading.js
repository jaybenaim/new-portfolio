const setLoading = (bool) => {
  if (bool) {
    $(".spinner")
      .append(`<img src="../img/loader.gif" class="loader-gif" alt="created by jacob benaim gif of person passing paper to themselves"/>
  `);
  } else {
    $(".spinner").hide();
  }
};
