/* url = 
// https://api.telegram.org/bot
// 706728723:AAE4EboBhbOWw4i0GhecG3mbUDCh38Wb2yU
// /getUpdates
*/

const BASE_URL = 'https://api.telegram.org/bot';
const TOKEN = '706728723:AAE4EboBhbOWw4i0GhecG3mbUDCh38Wb2yU';
var method = 'getUpdates';

var url = BASE_URL + TOKEN + '/' + method;
var link = '';
var quizBotLink = document.getElementById('quizBotLink');
quizBotLink.addEventListener("click", function(e) {
  e.target.href = url;
}, false);