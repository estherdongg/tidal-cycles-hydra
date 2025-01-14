s0.initVideo("/Users/esther_/Downloads/Raspberry & Jam-park-scenics-during-fall-650183-filmsupply.mp4")
src(s0).out(o0);

src(s0)
  .hue(() => Math.sin(time / 6))
  .saturate(() => Math.sin(time * 2))
  .modulate(src(o0), () => a.fft[0] * -0.4)
  .diff(src(s1), -1)
  .modulateScale(src(o0), () => Math.sin(time) * 0.5)
  .modulateHue(o0, 150)
  .out(o0);

src(s0)
  .hue(() => time / 10)
  .contrast([1, 2].fast(0.3).smooth())
  .modulate(src(s0))
  .scrollX(() => a.fft[0] * -0.0004, 0.1)
  .scrollY(-0.05, () => a.fft[0] * 0.0008)
  .add(src(o0), [0.3, 2].fast(0.5).smooth())
  .out(o0);


src(s0)
  .rotate(() => mouse.x * 0.001, () => mouse.y * 0.001)
  .out(o0);

src(s0).out(o0);

hush()
