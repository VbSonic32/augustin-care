// Generate grass blades
const layer = document.getElementById('grassLayer');
for (let i = 0; i < 120; i++) {
	const blade = document.createElement('div');
	blade.className = 'blade';
	const h = 40 + Math.random() * 120;
	const left = Math.random() * 100;
	const delay = Math.random() * 3;
	const dur = 2.5 + Math.random() * 2;
	const green = Math.floor(80 + Math.random() * 50);
	blade.style.cssText = `
    left: ${left}%;
    height: ${h}px;
    width: ${1 + Math.random() * 3}px;
    background: rgb(${30 + Math.random() * 20}, ${green}, ${40 + Math.random() * 20});
    animation-delay: ${delay}s;
    animation-duration: ${dur}s;
    opacity: ${0.4 + Math.random() * 0.6};
  `;
	layer.appendChild(blade);
}

// Month buttons
const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
const seasons = [
	'winter',
	'winter',
	'spring',
	'spring',
	'spring',
	'summer',
	'summer',
	'summer',
	'fall',
	'fall',
	'fall',
	'winter',
];

// Initialize icons
lucide.createIcons({
	attrs: {
		'stroke-width': 2,
	},
});
