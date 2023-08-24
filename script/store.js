/* const store = document.querySelectorAll('.store_address')
const map = document.querySelectorAll('.box')
console.log(store, map)
for(let i of map){i.style.display = 'none'}
map[0].style.display = 'block'
store.forEach(function(target, index){
    target.addEventListener('click', function(e){
        e.preventDefault();
        for(let i of map){i.style.display = 'none'};
        map[index].style.display = 'block';
        for(let i of store){i.classList.remove('active');
        target.classList.add('active')
    }
    })
}) */