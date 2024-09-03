'use strict';

let scrollSpeed = 0.8;

document.addEventListener('DOMContentLoaded', function(){
	const scroller = document.getElementById('scroller');
	scroller.innerHTML = 
		`<img class="scroller-item" src='./IMG_5628.GIF'>`+
		`<img class="scroller-item" src='./IMG_5629.GIF'>`+
		`<img class="scroller-item" src='./tootabs.gif'>`+
		`<img url="https://dimden.dev" class="scroller-item clickable" src="./dimden.gif">`+
		`<img class="scroller-item" src='./toonsound.gif'>`+
		`<img class="scroller-item" src='./violence.gif'>`+
		`<img class="scroller-item" src='./boobies.gif'>`+
		`<img url="https://neomoth.dev" class="scroller-item clickable" src='https://cdn.neomoth.dev/r/neomothdev.gif'>`+
		`<img class="scroller-item" src='./lesbian.gif'>`+
		`<img class="scroller-item" src='./t4t.gif'>`+
		`<img class="scroller-item" src='./dinner.gif'>`+
		`<img class="scroller-item" src='./shrimp.gif'>`+
		`<img class="scroller-item" src='./cosmichorror.gif'>`+
		`<img class="scroller-item" src='./eyestrain.gif'>`+
		`<img class="scroller-item" src='./paws.png'>`+
		`<img class="scroller-item" src='./musicthing.gif'>`+
		`<img class="scroller-item" src='./loudmusic.gif'>`
	const scrollingItems = document.querySelectorAll('.scroller-item');
	const clickables = document.querySelectorAll('.clickable');
	const containerWidth = window.innerWidth;
	const spacing = 20;

	let itemPositions = [];
	let totalWidth = 0;
	// let childOffset = 0;

	// function recurse(i){
	// 	let children = Array.from(i.children);
	// 	if(children.length > 0){
	// 		children.forEach((child,index)=>{
	// 			childOffset += child.offsetWidth;
	// 			if(child.children.length > 0){
	// 				recurse(child);
	// 			}
	// 		});
	// 	}
	// }

	clickables.forEach(item=>{
		item.addEventListener('click',function(){
			window.open(this.getAttribute('url'));
		});
	});

	scrollingItems.forEach((item,index)=>{
		const itemWidth = item.offsetWidth;
		const initialPosition = containerWidth+totalWidth;
		item.style.transform = `translateX(${initialPosition}px)`;

		// if(item.children.length > 0){
		// 	recurse(item);
		// }
		itemPositions.push({
			element:item,
			width:itemWidth,
			left:initialPosition
		});

		totalWidth += itemWidth + spacing;
		// childOffset = 0;

		// item.style.left = `${containerWidth + (index*item.offsetWidth)}px`;
	});

	function animate(){
		let rightmost = Math.max(...itemPositions.map(pos=>pos.left+pos.width));

		itemPositions.forEach(pos=>{
			pos.left-=scrollSpeed;
			pos.element.style.transform = `translateX(${pos.left}px)`;
			if(pos.left + pos.width < 0){
				pos.left = rightmost+spacing;
				rightmost = pos.left+pos.width;
			}
		});
		// let currentLeft = parseFloat(item.style.left);
		// currentLeft-=2;
		// item.style.left = `${currentLeft}px`;
		// if (currentLeft + itemWidth < 0){
		// 	currentLeft = containerWidth+spacing;
		// }
		// item.style.left = `${currentLeft}px`;
		requestAnimationFrame(animate);
	}
	animate();
});

const scroller = document.getElementById('footer');
scroller.addEventListener('mouseenter',function(){
	scrollSpeed = 0;
});
scroller.addEventListener('mouseleave',function(){
	scrollSpeed = 0.8;
});