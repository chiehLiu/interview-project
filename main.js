function getPic(data = {}) {
    const url = 'http://multipleproduct.wacocolife.com/api/gallery/showClient/1';

    fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            return res.json();
        }).then(result => {

            let imgI = result.items;

            imgI.forEach(img => {

                const imgEl = document.createElement('div');

                imgEl.classList.add('img-field')
                imgEl.innerHTML = `
                <h3 class="title">${img.title}</h3>
                <img src="http://multipleproduct.wacocolife.com/${img.url}" alt="商品圖片示意圖">`;
                let imgArea = document.getElementById('img-sidebar')
                imgArea.appendChild(imgEl)
            })
        })
};

getPic()