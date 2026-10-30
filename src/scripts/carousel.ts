// Horizontal card carousels ([data-carousel]): arrow buttons step through
// the cards and a progress bar tracks the scroll position. Markup and base
// styles (.carousel, .carousel__btn, .carousel__progress) are shared in global.css.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
for (const root of document.querySelectorAll<HTMLElement>('[data-carousel]')) {
  const track = root.querySelector<HTMLElement>('.carousel')!;
  const [prev, next] = root.querySelectorAll<HTMLButtonElement>('.carousel__btn');
  const bar = root.querySelector<HTMLElement>('.carousel__progress span')!;
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    const visible = track.clientWidth / track.scrollWidth;
    bar.style.width = `${visible * 100}%`;
    bar.style.marginLeft = `${max > 0 ? (track.scrollLeft / max) * (1 - visible) * 100 : 0}%`;
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft >= max - 4;
  };
  for (const btn of [prev, next]) {
    btn.addEventListener('click', () => {
      const card = track.querySelector('li')!.getBoundingClientRect().width + 16;
      const step = Math.max(card, Math.floor(track.clientWidth / card - 0.2) * card);
      track.scrollBy({ left: Number(btn.dataset.dir) * step, behavior: reduce ? 'auto' : 'smooth' });
    });
  }
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}
