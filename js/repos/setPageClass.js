const setCurrentPageClass = (pageLink, direction) => {
  if (pageLink === 0) {
    pageLink = 1;
  }
  let pageItem = $(".page-item");
  let linkItem = $(`[value=${pageLink}]`);
  let linkClass = pageItem.attr("class");

  if (direction === "prev" && pageLink >= 5) {
    $(".page-link-item").each((index, el) => {
      let value = Number($(el).text());
      $(el).attr("value", value - 1);
      $(el).text(value - 1);
    });
  } else if (direction === "next" && pageLink > 5) {
    $(".page-link-item").each((index, el) => {
      let value = Number($(el).text());
      $(el).attr("value", value + 1);
      $(el).text(value + 1);
    });
  } else if (direction === "next" && pageLink <= 11) {
    $(".page-link-item").each((index, el) => {
      $(el).attr("value", index + 1);
      $(el).text(index + 1);
    });
    $("[value='1']").addClass("active");
  } else {
    pageItem.removeClass("active");
    linkItem.parent().addClass(`${linkClass} active`);
  }
};
