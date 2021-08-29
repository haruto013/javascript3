const question = 'おいらが好きな人はなんでしょうか？'
const answers = [
  'ふとい人',
  'ほそい人',
  'ほそくて長い人',
  'ふとくて長い人'
];
const correct = 'ふとい人';

const $button = document.getElementsByTagName('button');
//クイズの問題文、選択肢を定義
const setupQuiz =  () => {
  
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
 while(buttonIndex < buttonLength){
 $button[buttonIndex].textContent = answers[buttonIndex];
  buttonIndex++;
 }

}
setupQuiz();

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('せいかい◎　ピンポンピンポーン');
    }else{
      window.alert('ぶっぶ〜❌');
    }
};

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];


//ボタンをクリックしたら正誤判定


$button[0].addEventListener('click', (e) => {
clickHandler(e);
  }); 

$button[1].addEventListener('click', (e) => {
  clickHandler(e);
});

$button[2].addEventListener('click', (e) => {
  clickHandler(e);
  });

$button[3].addEventListener('click', (e) => {
  clickHandler(e);
    });
    

  
