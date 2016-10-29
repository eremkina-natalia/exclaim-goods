var moreButton = document.querySelector('.goods button');
var elementsNode = document.querySelector('.goods .elements');

function createItemNode (item) {
  var itemNode = document.createElement('div');
  itemNode.classList.add('item');

  var previewNode = document.createElement('span');
  previewNode.classList.add('preview');

  var imgNode = document.createElement('img');
  imgNode.src = 'goods/' + item.preview;

  var titleNode = document.createElement('span');
  titleNode.classList.add('title');
  titleNode.appendChild(document.createTextNode(item.title));

  var priceNode = document.createElement('span');
  priceNode.classList.add('price');
  priceNode.appendChild(document.createTextNode(item.price + ' Р'));

  previewNode.appendChild(imgNode);

  itemNode.appendChild(previewNode);
  itemNode.appendChild(titleNode);
  itemNode.appendChild(priceNode);

  return itemNode;
}
/*function moreButtonClickHandler () {
  loadJSON('data.json', function (data) {
    var nodes = data.goods.map(createItemNode);
    nodes.forEach(function (itemNode) {
      elementsNode.appendChild(itemNode);
    })
  });
}
moreButton.addEventListener('click', moreButtonClickHandler);*/

var scrollTop = document.body.scrollTop;
function dataScroll() {
  var scrollTop = document.body.scrollTop;
//  var offsetTop = document.body.offsetTop;
//  var clientHeight = document.body.clientHeight;
//console.log('offsetTop ' + offsetTop); //0
//console.log('scrollTop ' + scrollTop); //828
//console.log('clientHeight ' + clientHeight); //1345
//console.log('window.pageYOffset ' +window.pageYOffset); //828
//console.log('scrollHeight ' +document.body.scrollHeight); //1345
  if (scrollTop > document.body.offsetHeight - 550){
    loadJSON('data.json', function (data) {
      var nodes = data.goods.map(createItemNode);
      nodes.forEach(function (itemNode) {
        elementsNode.appendChild(itemNode);
      })
    });
  }
};
document.addEventListener('scroll', dataScroll);
