document.addEventListener('DOMContentLoaded', () => {
    fetch('novidades.json')
        .then(response => response.json())
        .then(produtos => {
            const container = document.getElementById('produtos-container-novidades');
            produtos.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.classList.add('produto');
            
                const a = document.createElement('a');
                a.classList.add("link");
                a.setAttribute("href", "#");

                const img = document.createElement('img');
                img.classList.add('img-produtos')
                img.src = produto.imagem; // Usa o caminho relativo fornecido no JSON
                a.appendChild(img);

                const descricaoDiv = document.createElement('div');
                descricaoDiv.classList.add('descricao');
                descricaoDiv.innerHTML = `<h3 class = "titulo-preco-container" >${produto.produto}</h3><p class = "paragrafo-preco-container">${produto.descricao}</p>`;
                a.appendChild(descricaoDiv);

                const precoDiv = document.createElement('div');
                precoDiv.classList.add('preco');
                precoDiv.textContent = `R$ ${produto.preco.toFixed(2)}`;
                a.appendChild(precoDiv);

                produtoDiv.appendChild(a);
                container.appendChild(produtoDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
});


document.addEventListener('DOMContentLoaded', () => {
    fetch('perfumes.json')
        .then(response => response.json())
        .then(produtos => {
            const container = document.getElementById('produtos-container-perfumes');
            produtos.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.classList.add('produto');
            
                const a = document.createElement('a');
                a.classList.add("link");
                a.setAttribute("href", "#");

                const img = document.createElement('img');
                img.classList.add('img-produtos')
                img.src = produto.imagem; // Usa o caminho relativo fornecido no JSON
                a.appendChild(img);

                const descricaoDiv = document.createElement('div');
                descricaoDiv.classList.add('descricao');
                descricaoDiv.innerHTML = `<h3 class = "titulo-preco-container" >${produto.produto}</h3><p class = "paragrafo-preco-container">${produto.descricao}</p>`;
                a.appendChild(descricaoDiv);

                const precoDiv = document.createElement('div');
                precoDiv.classList.add('preco');
                precoDiv.textContent = `R$ ${produto.preco.toFixed(2)}`;
                a.appendChild(precoDiv);

                produtoDiv.appendChild(a);
                container.appendChild(produtoDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('maquiagens.json')
        .then(response => response.json())
        .then(produtos => {
            const container = document.getElementById('produtos-container-maquiagens');
            produtos.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.classList.add('produto');
            
                const a = document.createElement('a');
                a.classList.add("link");
                a.setAttribute("href", "#");

                const img = document.createElement('img');
                img.classList.add('img-produtos')
                img.src = produto.imagem; // Usa o caminho relativo fornecido no JSON
                a.appendChild(img);

                const descricaoDiv = document.createElement('div');
                descricaoDiv.classList.add('descricao');
                descricaoDiv.innerHTML = `<h3 class = "titulo-preco-container" >${produto.produto}</h3><p class = "paragrafo-preco-container">${produto.descricao}</p>`;
                a.appendChild(descricaoDiv);

                const precoDiv = document.createElement('div');
                precoDiv.classList.add('preco');
                precoDiv.textContent = `R$ ${produto.preco.toFixed(2)}`;
                a.appendChild(precoDiv);

                produtoDiv.appendChild(a);
                container.appendChild(produtoDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('promocoes.json')
        .then(response => response.json())
        .then(produtos => {
            const container = document.getElementById('produtos-container-promocoes');
            produtos.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.classList.add('produto');
            
                const a = document.createElement('a');
                a.classList.add("link");
                a.setAttribute("href", "#");

                const img = document.createElement('img');
                img.classList.add('img-produtos')
                img.src = produto.imagem; // Usa o caminho relativo fornecido no JSON
                a.appendChild(img);

                const descricaoDiv = document.createElement('div');
                descricaoDiv.classList.add('descricao');
                descricaoDiv.innerHTML = `<h3 class = "titulo-preco-container" >${produto.produto}</h3><p class = "paragrafo-preco-container">${produto.descricao}</p>`;
                a.appendChild(descricaoDiv);

                const precoDiv = document.createElement('div');
                precoDiv.classList.add('preco');
                precoDiv.innerHTML = `<p class="precoCheio">De: R$ ${ (produto.preco.toFixed(2))}</p> 
                Por: R$ ${((produto.preco.toFixed(2))/5).toFixed(2)}`;
                a.appendChild(precoDiv);


                produtoDiv.appendChild(a);
                container.appendChild(produtoDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
});