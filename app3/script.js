// select all bulbs
    const bulbs = document.querySelectorAll('.bulb');

    // loop through bulbs
    bulbs.forEach((bulb) => {
      // add click event
      bulb.addEventListener('click', () => {
        // toggle on/off
        bulb.classList.toggle('on');
      });
    });
    // ON button → turn all bulbs ON
    document.getElementById('btnOn').addEventListener('click', () => {
      bulbs.forEach(bulb => bulb.classList.add('on'));
    });

    // OFF button → turn all bulbs OFF
    document.getElementById('btnOff').addEventListener('click', () => {
      bulbs.forEach(bulb => bulb.classList.remove('on'));
    });