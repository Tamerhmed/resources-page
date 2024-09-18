//LOAD TAGGBOX ONLY ONCE
//https://stackoverflow.com/questions/12713564/function-in-javascript-that-can-be-called-only-once

// const promoVideo = document.querySelector(".promo-video");

/* intersection observation.  */
window.addEventListener(
	'load',
	(event) => {
		mediaWallTrigger = document.querySelector('#media-wall-load-trigger');
		lastWords = document.querySelector('#last-words');
		createObserver();
	},
	false
);

function createObserver() {
	let observer;

	let options = {
		root: null,
		rootMargin: '0px',
		threshold: 0,
	};

	observer = new IntersectionObserver(handleIntersect, options);
	observer.observe(mediaWallTrigger);
	observer.observe(lastWords);
}

function handleIntersect(entries, observer) {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > 0) {
			if (entry.target.getAttribute('id') == 'media-wall-load-trigger') {
				loadTaggBox();
			}
		}
		
	});
}

const embedHook = document.getElementById('embed-hook');
const loadingTaggbox = document.getElementById('loading-taggbox');
const taggBoxCode = `<div class="taggbox" style="width:100%;height:100%;" data-widget-id="143032" data-tags="false" data-is-load="0"></div>`;

var loadTaggBox = (function () {
	var executed = false;
	return function () {
		if (!executed) {
			executed = true;
			// do something
			embedHook.innerHTML = taggBoxCode;
			console.log(taggBoxCode);
			var scriptElement = document.createElement('script');
			scriptElement.type = 'text/javascript';
			scriptElement.src = 'https://widget.taggbox.com/embed-lite.min.js';
			document.head.appendChild(scriptElement);
			// Select the node that will be observed for mutations
			const taggBox = document.querySelector('.taggbox');
			// Options for the observer (which mutations to observe)
			const config = { attributes: true };
			// Callback function to execute when mutations are observed
			const callback = (mutationList, observer) => {
				for (const mutation of mutationList) {
					if (taggBox.dataset.isLoad === '1') {
						loadingTaggbox.remove();
						mobserver.disconnect();
						//console.log('dataset change');
					}
				}
			};

			// Create an observer instance linked to the callback function
			const mobserver = new MutationObserver(callback);
			// Start observing the target node for configured mutations
			mobserver.observe(taggBox, config);
		}
	};
})();
