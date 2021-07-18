<div align="center">
    <img src="./src/assets/images/orkut-logo.png">
</div>


<hr>
<p align="center">
    <a href="#-dart-propósito-e-funcionamento">Propósito e Funcionamento</a> &#xa0; | &#xa0; 
    <a href="#-wrench-tecnologias-utilizadas-">Tecnologias Utilizadas</a> &#xa0; | &#xa0; 
    <a href="#-checkered_flag-instalação-">Instalação</a> &#xa0; | &#xa0;
    <a href="#----mag_right-screenshots">Screenshots</a> &#xa0; | &#xa0;
    <a href="#-clipboard-to-do">To-do</a> &#xa0; | &#xa0;
    <a href="#-link-links-">Links</a>
</p>

<hr>

<h2 id="proposito" align="center"> :dart: Propósito e Funcionamento</h2>

<p>
    Este projeto é um clone do orkut.
    Nesse clone é possível adicionar seu perfil do github, que consumirá a api do mesmo,
    trazendo os dados dos seguidores que você possui.
    É possível, também criar amigos e comunidades. Essa função se comunica com o Dato CMS,
    que faz a gestão do conteúdo das páginas. Quando cadastramos uma pessoa ou comunidade,
    ele envia os dados para lá, por meio de uma api criada com esse fim. Da mesma maneira,
    ele se comunica com o sistema de CMS para trazer os dados cadastrados de lá.
</p>

<hr>

<h2> :wrench: Tecnologias Utilizadas </h2>

<ul>
    <li>HTML 5</li>
    <li>SASS</li>
    <li>React</li>
    <li>GraphQL</li>
    <li>Integração DatoCMS</li>
    <li>Styled Components</li>
    <li>Grid Templates</li>
    <li>Semantic Commits</li>
    <li>VSCode</li>
</ul>

<h2> :checkered_flag: Instalação </h2>

<details>
<summary>Windows</summary>

    1. Download and install Chocolatey:
    Get-ExecutionPolicy
    Set-ExecutionPolicy AllSigned
    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    
    2. Install nodejs
    choco install -y --force nodejs
    
    3. Install Yarn:
    npm install --global yarn
    
    3. Download this project as .zip and navigate to the folder where yout extract it
    cd /path/to/the/project
    
    4. Run:
    yarn start

</details>


<details>
<summary>Linux</summary>

    1. Install nodejs
    sudo apt-get install curl python-software-properties software-properties-common &&
    curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - &&
    sudo apt-get install nodejs 
    
    2. Install Yarn:
    sudo npm install yarn -g
    
    3. Download this project as .zip and navigate to the folder where yout extract it
    cd /path/to/the/project
    
    4. Run:
    yarn start

</details>


<h2>
    :mag_right: Screenshots
</h2>


<details>
    <summary>Screen Shots</summary>
    <div>
        <img src="./src/assets/images/01.png">
        <img src="./src/assets/images/02.png">
    </div>
</details>

<h2>:clipboard: To-do</h2>

<ul>
    <li></li>
</ul>

<h2> :link: Links </h2>

Deployed App: https://orkut-clone-mu.vercel.app/
