document.addEventListener('DOMContentLoaded', () => {
	const name = document.getElementById('server-name');
	if (!name) return;

	name.classList.add('pulse');

	const parent = name.closest('.brand') || name.parentElement;
	parent.classList.add('flicker');

	function startFlicker() {
		const minDelay = 1200;
		const maxDelay = 5400;
		const nextDelay = Math.floor(minDelay + Math.random() * (maxDelay - minDelay));

		setTimeout(() => {
			parent.classList.add('f-on');
			setTimeout(() => parent.classList.remove('f-on'), 80 + Math.random() * 220);
			startFlicker();
		}, nextDelay);
	}

	startFlicker();

	let hue = 0;
	setInterval(() => {
		hue = (hue + 0.6) % 360;
		name.style.filter = `hue-rotate(${hue}deg)`;
	}, 120);
});
