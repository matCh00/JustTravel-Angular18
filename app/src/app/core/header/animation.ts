import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const planeAnimation = [

  trigger('fly', [

    state('false', style({
      opacity: 0,
      transform: 'translate(-50%, -50%) scale(0.1)'
    })),

    state('true', style({
      opacity: 0
    })),

    transition('false => true', [
      animate('6s linear', keyframes([
        style({
          transform: 'translate(-50%, -50%) translateX(-30px) translateY(-10px) scale(0.1) rotateY(0)',
          opacity: 0,
          offset: 0
        }),
        style({
          transform: 'translate(-50%, -50%) translateX(40px) translateY(-6px) scale(0.2) rotateY(0)',
          opacity: 1,
          offset: 0.2
        }),
        style({
          transform: 'translate(-50%, -50%) translateX(80px) translateY(-2px) scale(0.3) rotateY(0)',
          opacity: 1,
          offset: 0.4
        }),
        style({
          transform: 'translate(-50%, -50%) translateX(110px) translateY(2px) scale(0.4) rotateY(0)',
          opacity: 1,
          offset: 0.55
        }),
        style({
          transform: 'translate(-50%, -50%) translateX(120px) translateY(10px) scale(0.5) rotateY(3.142rad)',
          opacity: 1,
          offset: 0.6
        }),
        style({
          transform: 'translate(-50%, -50%) translateX(-130px) translateY(10px) scale(1) rotateY(3.142rad)',
          opacity: 1,
          offset: 0.95
        }),
        style({
          transform: 'translate(-50%, -50%) translateX(-160px) translateY(10px) scale(1) rotateY(3.142rad)',
          opacity: 0,
          offset: 1
        })
      ]))
    ])
  ])
];
