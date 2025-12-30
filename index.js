const text = "Hi there, I'm Ogunkoya Alfred";
    const typingElement = document.getElementById("typing");

    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        typingElement.textContent = text.substring(0, index);

        if (!isDeleting) {
            if (index < text.length) {
                index++;
            } else {
                setTimeout(() => isDeleting = true, 1000);
            }
        } else {
            if (index > 0) {
                index--;
            } else {
                setTimeout(() => isDeleting = false, 600);
            }
        }

        const delay = isDeleting ? 80 : 120;
        setTimeout(typeEffect, delay);
    }

    typeEffect();