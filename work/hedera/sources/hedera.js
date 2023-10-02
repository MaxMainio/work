// GLOBAL TRIGGERS	----------------------------------------------------------------------------------------------------------------
window.addEventListener('pageshow', e => {
    heroSwap();
    fitHeroIvy();
});

window.addEventListener('resize', e => {
    fitHeroIvy();
});









// HERO ----------------------------------------------------------------------------------------------------------------------------
const heroContainer = document.getElementById('first');
const heroFlower = document.getElementById('hero-flower');
const heroIvy = document.getElementById('hero-ivy');

// Hero Texts
heroTxt = new Array();
heroTxt[0] = "Hedera: A unique typeface blending structured design with organic ivy-inspired dynamics. Experience the fusion of human craftsmanship and nature's unpredictability";
heroTxt[1] = "Where Ivy truly shines is in its embodiment of a delicate balance. At its core, the typeface is a testament to human design - structured, precise, and meticulously crafted. Yet, it draws its vitality from the capricious patterns of nature. Mirroring the spontaneous growth of ivy plants, the connections between letters don't just follow but intertwine, mimicking the winding tendrils of creeping vines.";
heroTxt[2] = "These dynamic connections, enabled through inventive OpenType features, make the text come alive, reminiscent of flora seeking its path, wrapping and climbing structures. It's this intricate dance.a collaboration between the methodical strokes of human design and the wild, unrestrained spirit of nature.that defines Ivy.";
heroTxt[3] = "At the heart of Project Ivy is an evolution that mirrors the natural world. Drawing inspiration from the resilient growth of ivy plants, the typeface exhibits an organic dynamism. As one types, the letters don’t merely follow one another but instead interlace, intertwine, and overlap.";
heroTxt[4] = "The connections between glyphs mimic the intricate and unpredictable pathways of climbing vines, each character searching for its foothold and meandering its way across the canvas. This transformative feature, where letters don't just succeed but merge and meld, celebrates the harmony between structured design and the free spirit of nature.";



function heroSwap(){
    const selectedIMG = getRandomInt(1, 4);
    const selectedTXT = getRandomInt(0, (heroTxt.length - 1));

    heroFlower.src = 'assets/content/flowers/flower-' + selectedIMG + '.webp';
    heroFlower.style.backgroundImage = 'url(assets/no-index/flower-' + selectedIMG + '-small.webp)';

    heroIvy.innerHTML = heroTxt[selectedTXT];
};



function fitHeroIvy(){
    let width = heroContainer.offsetWidth;
    let newMeasurements = width * 0.04;

    heroIvy.style.fontSize = newMeasurements + 'px';
    heroIvy.style.lineHeight = newMeasurements + 'px';
};









// GLOBAL FUNCTIONS	----------------------------------------------------------------------------------------------------------------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};