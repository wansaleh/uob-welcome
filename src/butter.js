/* eslint-disable no-prototype-builtins */
// butter.js

export default class Butter {
  constructor() {
    this.defaults = {
      wrapperId: 'butter',
      wrapperDamper: 0.2,
      cancelOnTouch: false
    };
    // this.wrapperDamper = 0.07;
    // this.wrapperId = 'butter';
    // this.cancelOnTouch = false;
    // this.active = false;
    // this.wrapper = '';
    // this.wrapperOffset = 0;
    // this.resizing = true;
    // this.animateId = '';
  }

  validateOptions(ops) {
    const self = this;

    Object.values(ops).forEach((prop) => {
      if (self.defaults.hasOwnProperty(prop)) {
        Object.defineProperty(self.defaults, prop, {
          value: Object.getOwnPropertyDescriptor(ops, prop).value
        });
      }
    });
  }

  init(options) {
    if (options) {
      this.validateOptions(options);
    }

    this.active = true;
    this.resizing = false;
    this.wrapperDamper = this.defaults.wrapperDamper;
    this.wrapperId = this.defaults.wrapperId;
    this.cancelOnTouch = this.defaults.cancelOnTouch;

    this.wrapper = document.getElementById(this.wrapperId);
    this.wrapper.style.position = 'fixed';
    this.wrapper.style.width = '100%';

    document.body.style.height = `${this.wrapper.clientHeight}px`;

    window.addEventListener('resize', this.resize.bind(this));
    if (this.cancelOnTouch) {
      window.addEventListener('touchstart', this.cancel.bind(this));
    }
    this.wrapperOffset = window.scrollY;
    this.animateId = window.requestAnimationFrame(this.animate.bind(this));

    window.addEventListener('load', this.resize.bind(this));
  }

  wrapperUpdate() {
    const scrollY = document.body.scrollTop || window.scrollY;
    this.wrapperOffset += (scrollY - this.wrapperOffset) * this.wrapperDamper;
    this.wrapper.style.transform = `translate3d(0,${-this.wrapperOffset.toFixed(
      2
    )}px, 0)`;
  }

  resize() {
    const self = this;

    if (!self.resizing) {
      self.resizing = true;
      cancelAnimationFrame(self.animateId);
      window.setTimeout(() => {
        if (
          parseInt(document.body.style.height, 10) !==
          parseInt(self.wrapper.clientHeight, 10)
        ) {
          document.body.style.height = `${self.wrapper.clientHeight}px`;
        }
        self.animateId = window.requestAnimationFrame(self.animate.bind(self));
        self.resizing = false;
      }, 150);
    }
  }

  animate() {
    this.wrapperUpdate();
    this.animateId = requestAnimationFrame(this.animate.bind(this));
  }

  cancel() {
    if (this.active) {
      cancelAnimationFrame(this.animateId);

      window.removeEventListener('resize', this.resize);
      window.removeEventListener('touchstart', this.cancel);
      this.wrapper.removeAttribute('style');
      document.body.removeAttribute('style');

      this.active = false;
      this.wrapper = '';
      this.wrapperOffset = 0;
      this.resizing = true;
      this.animateId = '';
    }
  }
}
