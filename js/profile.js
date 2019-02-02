const form = document.getElementById("add-form")
const submit = document.getElementById("send")
let btnIds = null

submit.addEventListener('click', e => {
  post();
  console.log("submit")
  form.reset();
});
let btns = document.querySelectorAll('.addBtn')
btns.forEach( button => {
  button.addEventListener('click', evt => {
    console.log("check")
    const btn = evt.currentTarget;
    btnIds = btn.id
  })
})
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "#3a7d9e";
    }
    document.getElementById(pageName).style.display = "block";

    elmnt.style.backgroundColor = color;
  }
  
  document.getElementById("defaultOpen").click()

function post(){
  console.log("post")
 
  const post = {
    photo : document.getElementById('image-file').files[0].path,  
    description: document.getElementById('fish-name').value, 
    size: document.getElementById("fish-weight").value,
    listId: Number(btnIds)
}
  let listadd = null;
  if(btnIds == 1) {
      listadd = 'catch-list';
      console.log("1")
  }
  else if (btnIds == 2){
      listadd = 'trip-list';
  }
  else {
      listadd = 'tackle-list';
  }

  let itemId = document.getElementById(listadd)
  const newItem = `<div class="col">
                      <img src="${post.photo}">
                      <h4>${post.description}</h3>
                      <p>${post.size}</p>
                  </div>`;
  itemId.insertAdjacentHTML("beforeend", newItem, 'error')
}