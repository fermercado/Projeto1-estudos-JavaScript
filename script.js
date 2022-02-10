const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

function activeTab(index) {
  tabContent[index].classList.add('ativo')
}
