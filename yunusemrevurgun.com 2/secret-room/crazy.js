class CrazyMode {
      init() {
        document.body.innerHTML = '<button id="crazyButton">Activate Crazy Mode</button>'; // Reset everything
        document.body.className = 'body2';
        this.bindButton(); // Re-bind the button after resetting innerHTML
        document.querySelector('#crazyButton').setAttribute('class','finalbutton');
      }

      createRandomElement() {
        const element = document.createElement('div');
        const size = Math.random() * 50 + 10; // Random size between 10px and 60px

        element.classList.add('crazy-element');
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.top = `${Math.random() * window.innerHeight}px`;
        element.style.left = `${Math.random() * window.innerWidth}px`;
        element.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        element.style.animationDuration = `${Math.random() * 2 + 0.5}s`;

        document.body.appendChild(element);

        // Remove the element after 5 seconds to prevent clutter
        setTimeout(() => element.remove(), 5000);
      }

      startCreatingElements() {
        this.elementInterval = setInterval(() => {
          this.createRandomElement();
        }, 100);
      }

      bindButton() {
        document.querySelector('#crazyButton').addEventListener('click', () => {
          this.init();
          this.startCreatingElements();
        });
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      const crazyMode = new CrazyMode();
      crazyMode.bindButton();
    });