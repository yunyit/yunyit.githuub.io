var new_format_date = new Date('2021-05-01');

hexo.extend.filter.register('post_permalink', function (original_link) {
  var pivot = original_link.slice(0, -1).lastIndexOf('/');
  var date_str = original_link.substring(0, pivot);
  var date = new Date(date_str);
  var title = original_link.substring(pivot + 1);

  var result = original_link;
  if (date > new_format_date) {
    result = title;
    console.log(' ', date, '### Change permalink:', original_link, '-->', result);
  }
  return result;
});
