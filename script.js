document.getElementById('form-hora').addEventListener('submit', function(event) {
  event.preventDefault()

  const input = document.getElementById('inputHora')
  const msg = document.getElementById('mensagem')
  const img = document.getElementById('imagem')
  const hora = Number(input.value)

  if (hora < 0 || hora > 23 || isNaN(hora)) {
    msg.innerText = 'Por favor, digite uma hora válida entre 0 e 23.'
    img.style.display = 'none'
    document.body.style.background = '#f0f0f0'
    return
  }

  msg.innerText = `Você informou ${hora} horas.`

  if (hora >= 0 && hora < 12) {
    img.src = 'imagem/ChatGPT Image 28 de mai. de 2025, 14_16_34.png'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'imagem/ChatGPT Image 28 de mai. de 2025, 14_54_06.png'
    document.body.style.background = '#f6b17a'
  } else {
    img.src = 'imagem/ChatGPT Image 28 de mai. de 2025, 14_54_13.png'
    document.body.style.background = '#1c1c3c'
    document.body.style.color = 'white'
  }

  img.style.display = 'block'
})
