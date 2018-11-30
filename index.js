function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = (i + n).toString()
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}