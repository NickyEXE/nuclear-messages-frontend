class MessageCard {
  constructor(message){
    this.message = message
    this.render()
    this.setEventListeners()
  }

  setEventListeners(){
    this.messageCard.addEventListener("dblclick", () => this.form.style.display = "block")
    this.form.addEventListener("submit", this.handleSubmit)
  }

  handleSubmit = (e) => {
    console.log(this)
    e.preventDefault()
    const content = e.target.content.value
    const messageId = this.message.id
    const userId = state.user.id
    api.postGraffiti(messageId, content, userId).then(graffiti => {
      if (graffiti.errors){
        const errorsField = document.getElementById("errors-field")
        errorsField.innerText = graffiti.errors
        let utterance = new SpeechSynthesisUtterance(graffiti.errors);
        speechSynthesis.speak(utterance);
        window.location = "#errors-field"
        setTimeout(() => {
          errorsField.innerText = ""
        }, 5000)
      }
      else {
        new Graffiti(graffiti, this)
      }
    })
    e.target.reset()
  }

  render(){
    const messageContainer = document.querySelector(".message-container")
    this.messageCard = document.createElement("div")
    this.messageCard.classList.add("message-card")
    const messageHeader = document.createElement("h3")
    messageHeader.innerText = this.message.content
    this.graffitiContainer = document.createElement("ul")
    this.graffitiContainer.classList.add("graffiti-container")
    this.form = document.createElement("form")
    const input = document.createElement("input")
    this.form.style.display = "none"
    input.name = "content"
    this.form.appendChild(input)
    this.messageCard.append(messageHeader, this.graffitiContainer, this.form)
    this.message.graffitis.forEach(graffiti => new Graffiti(graffiti, this))
    messageContainer.appendChild(this.messageCard)
  }
}
