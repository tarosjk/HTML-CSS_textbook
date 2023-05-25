const navBtn = $('.header-button') //ボタン
const gnav = $('.header-gnav') //ナビゲーション
const body = $('body') //body要素

// ボタンをクリックしたらbodyにクラスを追加・削除する
navBtn.on('click', () => {
  body.toggleClass('active')
})