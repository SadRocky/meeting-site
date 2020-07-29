// Button

let login_btn = document.querySelector('.tabs').children[0];
let register_btn = document.querySelector('.tabs').children[1];

// Blocks

let login_block = document.querySelector('#t_tab_1');
let register_block = document.querySelector('#t_tab_2');

let array = [login_block, register_block];

function wrapper(e) {

	array.forEach(item => {
		if ( item.classList.contains('active') ) {
			item.classList.remove('active');
		} 
	});

	arguments[0].classList.add('active');
}