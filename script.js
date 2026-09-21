function startSurprise() {

    document
        .getElementById("memories")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function openGift() {

    const gift =
        document.getElementById("gift");

    gift.style.display = "block";

    createConfetti();

    gift.scrollIntoView({
        behavior: "smooth"
    });

}


function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        const emojis =
            ["🎉", "✨", "🎊", "💖", "🎈"];

        confetti.innerHTML =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() *
            window.innerWidth +
            "px";

        confetti.style.top =
            "-50px";

        confetti.style.fontSize =
            "25px";

        confetti.style.zIndex =
            "1000";

        document.body.appendChild(
            confetti
        );


        let position = -50;


        const fall =
            setInterval(() => {

                position += 6;

                confetti.style.top =
                    position + "px";

                confetti.style.transform =
                    `rotate(${position * 4}deg)`;

                if (
                    position >
                    window.innerHeight
                ) {

                    clearInterval(fall);

                    confetti.remove();

                }

            }, 20);

    }

}