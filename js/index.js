  // accordeon
  // для того, чтобы срабатывал клик именно по faq__item в css на внутренних элментах faq__item должен быть pointer-events: none
  const accordeonItems = document.querySelectorAll(`[data-accordeon]`)
  const accordeons = document.querySelectorAll('.faq__list')

  function handlerAccordeonClick(e) {
    if (e.target.classList.contains('faq__item')) {
      console.log('click')
      if (e.target.classList.contains('faq__item--active')) {
        e.target.classList.remove('faq__item--active')
        const content = e.target.querySelector('.faq__item-content')
        content.style.maxHeight = '0'
      } else {
        accordeonItems.forEach(item => {
          item.classList.remove('faq__item--active')
          const content = item.querySelector('.faq__item-content')
          content.style.maxHeight = '0'
        })
        e.target.classList.add('faq__item--active')
        const content = e.target.querySelector('.faq__item-content')
        content.style.maxHeight = content.scrollHeight + "px"
      }
    }
  }

  if (accordeons) accordeons.forEach(accordeon => accordeon.addEventListener('click', handlerAccordeonClick))