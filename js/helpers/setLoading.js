const setLoading = (bool) => {
  if (bool) {
    $("#repo__results")
      .append(`<div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span>
</div>`);
  } else {
    $(".spinner").hide();
  }
};
