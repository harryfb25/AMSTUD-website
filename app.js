
document.addEventListener('mousemove', (e) => {
  const canvas = document.getElementById('cursor-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
});
