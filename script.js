let wrapper = document.querySelector(".wrapper")

for (let i = 1; i <= 100; i = i + 1) {
    if(i % 3 === 0 && i % 5 === 0){
        wrapper.innerHTML += 
        `<div class="my-square d-flex bg-success bg-opacity-75  justify-content-center align-items-center">
            Fizz-Buzz
        </div>`
    }else if(i % 5 === 0){
          wrapper.innerHTML += 
        `<div class="my-square bg-primary d-flex bg-opacity-75  justify-content-center align-items-center">
            Buzz
        </div>`
    }else if( i % 3 === 0){
         wrapper.innerHTML += 
        `<div class="my-square bg-warning bg-opacity-75  d-flex justify-content-center align-items-center">
            Fizz
        </div>`
    } else{
          wrapper.innerHTML += 
        `<div class="my-square d-flex bg-danger-subtle bg-opacity-75 justify-content-center align-items-center">
            ${i}
        </div>`
    }
}
