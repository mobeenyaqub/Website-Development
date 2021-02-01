window.onload = function () {
    const form = document.querySelector("#searchForm");

    form.addEventListener('submit', async (e) => {

        e.preventDefault();
        const searchTerm = form.elements.query.value;
        const req = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
        makeImages(req.data);
        form.elements.query.value = " ";
        let d = document.querySelector('IMG');
        removeChild(d);
    })

    const makeImages = (shows) => {

        for (let result of shows) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }

    }

}