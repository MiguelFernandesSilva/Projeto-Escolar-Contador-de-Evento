'use strict'

// REDIRECIONAMENTO
const eventInfo = document.getElementById('eventInfo');
const stream = document.getElementById('viewStream');
const logo = document.getElementById('logoContainer');

eventInfo.addEventListener('click', () => window.open('../src/pages/evento.html', '_self'));
stream.addEventListener('click', () => window.open('https://www.youtube.com/watch?v=XwfDn4jHmPY&list=PLFATgg_0-HEs&index=2', '_blank'));
logo.addEventListener('click', () => window.open('../index.html', '_self'));


// SCROLL AUTOMÁTICO
const scrollBtn = document.getElementById('scrollBtn');
const cardSection = document.getElementById('cards');

function scrollPage(){
    window.scrollTo({
        top: cardSection.offsetTop,
        behavior: 'smooth'
    });
}

scrollBtn.addEventListener('click', scrollPage);

//CONTADOR
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {

    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
};

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    const contar = () => {
        if (tempo <= 0) {
            atualizar(0);
            pararContagem();
            return;
        }
        atualizar(tempo);
        tempo--;
    };

    const id = setInterval(contar, 1000);
};

const tempoRestante = () => {
    const dataEvento = new Date('2026-10-09 12:00:00');
    const hoje = Date.now();

    return Math.floor((dataEvento - hoje) / 1000);
};

const elementoContador = document.getElementById('dias');

if (elementoContador) {
    contagemRegressiva(tempoRestante());
}

// CARDS
const body = document.getElementById('indexBody');
const rhymes = document.getElementById('cardRhymes');
const dj = document.getElementById('cardDj');
const graffiti = document.getElementById('cardGraffiti');
const breaking = document.getElementById('cardBreak');
const food = document.getElementById('cardFood');

const cardTexts = {
        cardRhymes:
        `
            A competição que faz jus a existencia da aldeia vista como nunca antes. Uma disputa de criatividade, presença e muita rima! 16 trios 
            compostos pelos melhores MCs das antigas e atuais gerações se enfrentam para mostrar seu talento, originalidade e sua capacidade de 
            improvisar, representando a força da palavra dentro da cultura Hip Hop.

            E o que deixa tudo mais acirrado: cada membro do trio vencedor leva <span> R$ 30 mil </span>, enquanto o melhor MC do trio recebe mais 
            <span> R$ 10 mil </span> na conta. Tudo para ser a competição de mais alto nível que promete muita energia, rivalidade e momentos 
            inesquecíveis em cima do octogono!
        `,
        cardDj:
        `
            Dois grandes nomes do Hip Hop brasileiro se encontram para uma batalha mortal que fará o público entender porquê eles são os melhores: 
            <span> Erick Jay </span> e <span> DJ Raylan </span>, ambos campeões mundiais, colocam sua técnica e criatividade frente a frente.

            Mais do que uma competição, é uma celebração da arte dos DJs e da importância dos beats para a cultura Hip Hop. E o melhor: o vencedor 
            ainda levará <span> R$ 10 mil </span> para casa!
        `,
        cardGraffiti:
        `
            A pintura também entra na disputa! Duas equipes profissionais, <span> Cheira Tinta </span> e <span> Duelo de Sprays </span>, se 
            enfrentarão em uma batalha que elevará o nível das artes de rua e de parede a um patamar completamente diferente e nunca visto antes.

            Venha acompanhar de perto a força do graffiti e descobrir como as ruas, para eles, não passam de grandes telas. E como de costume, a equipe
            vencedora ainda garante um prêmio de <span> R$ 10 mil </span>!
        `,
        cardBreak:
        `
            Prepare-se para muita técnica, ritmo e movimentos impressionantes! Nove dançarinos: <span> Bboy Luan San, Bgirl Lua, Bgirl Duda SP, 
            Bboy Rock Lee, Bboy Baby, Bboy Taz, Bboy West e Bboy Zym </span> entram no octogono para mostrar toda a sua habilidade no breaking.

            Com <span> R$ 10 mil </span> em jogo, cada giro pode fazer a diferença. Uma oportunidade de prestigiar uma das expressões mais 
            marcantes da cultura Hip Hop e sentir a energia da dança de perto!
        `,
        cardFood:
        `
            Para aproveitar o evento do começo ao fim, confira os alimentos que podem ser levados para o espaço. Assim, você pode curtir todas as 
            atrações com tranquilidade e energia para acompanhar cada batalha:

            <br> <br>
            <ul>
                <li> Alimentos industrializados devidamente lacrados </li>
                <li> Frutas cortadas e acondicionadas em embalagens transparentes e não-rigidas, do tipo "zip-lock" </li>
                <li> Sanduiches acondicionados em embalagem transparente e não rigida, do tipo "zip-lock" </li>
            </ul>


        `
    };

function getCardInfo(cardElement){
    const cardImage = cardElement.querySelector('.card-image');
    const cardTitle = cardElement.querySelector('.card-title');
    const cardSubtitle = cardElement.querySelector('.card-text');

    const imageSource = cardImage.getAttribute('src');

    const specificText = cardTexts[cardElement.id] || '';

    openCard(imageSource, cardTitle, cardSubtitle, specificText);
}

function openCard(imageSource, cardTitle, cardSubtitle, specificText){
    document.body.style.overflow = 'hidden';

    const openedCard = document.getElementById('openedCard');
    const opacitor = document.getElementById('opacitor');

    openedCard.innerHTML = '';

    openedCard.style.display = 'flex';
    opacitor.style.display = 'block';

    const backBtn = document.createElement('button');
    backBtn.classList.add('opened-card-button', 'green-btn', 'translate');
    backBtn.textContent = 'Voltar';

    const container = document.createElement('div');
    container.className = 'opened-card-container';

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    const image = document.createElement('div');
    image.style.backgroundImage = `url('${imageSource}')`;
    image.className = 'opened-card-image';

    const title = document.createElement('h1');
    title.className = 'opened-card-title';
    title.textContent = cardTitle.textContent;

    const description = document.createElement('p');
    description.className = 'opened-card-subtitle';
    description.textContent = cardSubtitle.textContent;

    const text = document.createElement('p');
    text.className = 'opened-card-text';
    text.innerHTML = specificText;

    openedCard.append(container);
    container.append(div1, div2);
    div1.append(image);
    div2.append(title, description, text, backBtn);

    const closeCard = () => {
        openedCard.style.display = 'none';
        opacitor.style.display = 'none';
        document.body.style.overflow = 'visible';
    };

    opacitor.addEventListener('click', closeCard);
    backBtn.addEventListener('click', closeCard);
}

rhymes.addEventListener('click', () => getCardInfo(rhymes));
dj.addEventListener('click', () => getCardInfo(dj));
graffiti.addEventListener('click', () => getCardInfo(graffiti));
breaking.addEventListener('click', () => getCardInfo(breaking));
food.addEventListener('click', () => getCardInfo(food));