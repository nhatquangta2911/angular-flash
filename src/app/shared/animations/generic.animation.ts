import { animation, trigger, animate, style } from '@angular/animations';

const demoTransAnimation = animation([
  style({
    opacity: '{{ opacity }}',
  }),
  animate('{{ time }}'),
]);

export default {
  demoTransAnimation,
};
