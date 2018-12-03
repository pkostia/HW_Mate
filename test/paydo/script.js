let rating = document.querySelector('.user__like'),
		ratingItem = document.querySelectorAll('.feadback__my .thumb');

rating.addEventListener("click", e => {
	let target = e.target;
  if(target.classList.contains('thumb')){
    removeClass(ratingItem,'current-active')
    target.classList.add('active','current-active');
  }
})

rating.addEventListener("mouseover", e => {
	let target = e.target;
  if(target.classList.contains('thumb')){
    removeClass(ratingItem,'active')
    target.classList.add('active');
    mouseOverActiveClass(ratingItem)
  }
})
rating.addEventListener("mouseout", () => {
	addClass(ratingItem,'active');
  mouseOutActiveClas(ratingItem);
})

function removeClass(arr) {
  for(let i = 0, iLen = arr.length; i <iLen; i ++) {
    for(let j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.remove(arguments[j]);
    }
  }
}
function addClass(arr) {
  for(let i = 0, iLen = arr.length; i <iLen; i ++) {
    for(let j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.add(arguments[j]);
    }
  }
}

function mouseOverActiveClass(arr){
  for(let i = 0, iLen = arr.length; i < iLen; i++) {
    if(arr[i].classList.contains('active')){
      break;
    }else {
      arr[i].classList.add('active');
    }
  }
}

function mouseOutActiveClas(arr){
  for(let i = arr.length-1; i >=1; i--) {
    if(arr[i].classList.contains('current-active')){
      break;
    }else {
      arr[i].classList.remove('active');
    }
  }
}

let reply = document.querySelectorAll('.user__footer .js-reply');
[].forEach.call(reply,function(el){
    el.addEventListener('click', function (e) {
    	let container = el.closest('.comment');
    	let i = container.getAttribute('data-comment');
    	let com = document.querySelector(`[data-reply="${i}"]`);
    	com.classList.toggle('is--active');
    })
});

let containerThread = document.querySelectorAll('.user__thread_title');
// console.log(containerThread);
[].forEach.call(containerThread,function(el){
    el.addEventListener('click', function(e) {
    	e.preventDefault();
    	let container = el.closest('.comment');
    	let i = container.getAttribute('data-comment');
    	console.log(i);
    	let mess = document.querySelector(`[data-mess="${i}"]`);
    	mess.classList.add('is--active');
    	let com = document.querySelector(`[data-title="${i}"]`);
    	com.classList.add('is--remove');
    })
});



