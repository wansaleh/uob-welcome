export default function SmoothScroll({
  target = document,
  speed = 80,
  smooth = 12
} = {}) {
  if (target === document)
    target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body; // cross browser support for document scrolling

  let moving = false;
  let pos = target.scrollTop;
  const frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target; // safari is the new IE

  target.addEventListener('mousewheel', scrolled, { passive: false });
  target.addEventListener('DOMMouseScroll', scrolled, { passive: false });

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    const delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
      return -e.detail / 3; // Firefox
    }
    return e.wheelDelta / 120; // IE,Safari,Chrome
  }

  function update() {
    moving = true;

    const delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) window.requestAnimationFrame(update);
    else moving = false;
  }
}
