console.log('%c HI', 'color: firebrick')

function renderimage(dogimgs){
  const img_div = document.getElementById('dog-image-container')
  dogimgs.message.forEach(dogimg => {
    const img_tag = document.createElement("img")
    img_tag.src= dogimg
    img_div.append(img_tag);
  })
}

function renderbreed(dogbreds){
  const bred_ul = document.getElementById('dog-breeds')
  Object.keys(dogbreds.message).forEach(dogbred => {
    const li_tag = document.createElement("li")
    li_tag.innerText= dogbred
    li_tag.addEventListener("click", changecolor);
    bred_ul.append(li_tag);
  })
  document.getElementById("breed-dropdown").addEventListener("change", breed_filter);
}


function breed_filter(event){
  const breds = document.getElementById('dog-breeds').querySelectorAll("li")
  breds.forEach(bred => {
    bred.style.display = "block"
    if (event.target.value == "all" ) {
      bred.style.display = "block";
    }
    else if (bred.innerText[0] != event.target.value) {
      bred.style.display = "none"
    }
  })
  console.log(event.target.value);
}

function changecolor(event){
  event.target.style.color = "red";
}

document.addEventListener("DOMContentLoaded", function(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(dogimgs => renderimage(dogimgs));

  fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(dogbreds => renderbreed(dogbreds));
})
