'use strict';

(function () {
  class StrokeAnimatedText extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const container = document.createElement('div');
      container.innerHTML = `
      <style>
        .text-stroke {
            font-size: 92px;
            letter-spacing: 4px;
            fill: none;
            stroke: #000;
            stroke-width: 2;
            stroke-dasharray: 100%;
            stroke-dashoffset: 100%;
            animation: textStrokeAnim 4000ms linear both;
            animation-iteration-count: 1;
        }
        
        @keyframes textStrokeAnim {
            0% {
                stroke-dasharray: 100%;
                stroke-dashoffset: 100%;
                fill: #0000;
            }
            95% {
                stroke-dasharray: 0%;
                stroke-dashoffset: 90%;
                fill: #0000;
            }
            100% {
                stroke-dasharray: 0%;
                stroke-dashoffset: 0%;
                fill: #9b9dad;
                filter: drop-shadow(2px 2px 10px #0007);
            }
        }
      </style>
      <svg class="text-stroke" viewBox="0 0 500 100" width="80%" height="100%">
        <text class="text" x="0" y="75">good</text>
      </svg>
      `;

      shadow.appendChild(container);
    }
  }
  customElements.define('stroke-animated-text', StrokeAnimatedText);
})();
