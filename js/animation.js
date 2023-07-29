
let btnAnimation = () => {
    const tlMessageBtn = gsap.timeline({
      defaults: { duration: 0.1 },
      repeat: -1,
      repeatDelay: 3,
    });
    tlMessageBtn
      .to(".main__start-button", { opacity: 1 }) 
      
    return tlMessageBtn;
  }

  const tl = gsap.timeline({ defaults: { duration: 0.5 } });

  tl.from(".main-title", { opacity: 0, y: 30 })
    .from(".main-title3", { opacity: 0, y: 30 })
    .from(".main__start-button", { opacity: 0, y: 30 })
    .from(".main__start-burger", { opacity: 0, y: 30 })
    .add(btnAnimation());