const fungsi = () => {
	alert('Song added!');
}

const url = "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";

const fetchPromise = fetch(url, {method: 'GET'});

fetchPromise.then(res => {
	return res.json();
}).then(res => {
	// Console log res
	console.log(res);
	// Get image, title, artist, album and button element
	let image=document.getElementById('image');
	let title=document.getElementById('title');
	let artists=document.getElementById('artists');
	let album=document.getElementById('album');
	let spotifyBtn=document.getElementById('spotifyBtn');
	// Set attributes related to element
	image.setAttribute('src',res.album.images[0].url);
	image.setAttribute('width', res.album.images[0].width);
	title.innerText = res.name;
	artists.innerText = res.artists[0].name;
	album.innerText = res.album.name;
	spotifyBtn.setAttribute('href', res.album.external_urls.spotify);
}).catch(err => {
	alert(err.message);
});