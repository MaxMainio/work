const canvas = document.getElementById("mossSim");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 1000;

const frameCount = 60;
const currentFrame = index => (
  `https://maxmain.io/work/crosswalk-poetics/physical-map/assets/png-sequence/moss-${(index + 1).toString().padStart( '0')}.png`
);

const images = []
const moss = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(moss, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[moss.frame], 0, 0); 
}