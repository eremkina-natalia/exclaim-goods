function loadJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return ;

    if (xhr.status != 200) {
    } else {
      callback(JSON.parse(xhr.responseText));
    }
  }

  xhr.send();
}
