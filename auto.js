var options = ['Sangat puas', 'Ya', 'Sangat setuju'];
[...document.querySelectorAll('.answerlist1')].forEach((answer) => {
  if (options.includes(answer.innerText)) {
    answer.parentElement
      .getElementsByClassName('answerlist2')[0]
      .children[0].click();
  }
});
let textarea = document.querySelector("textarea");
if(textarea) textarea.value = "saya sangat puas"
document.querySelector("input[value='simpan'").click();
