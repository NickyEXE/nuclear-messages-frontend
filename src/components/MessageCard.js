class MessageCard {
  constructor(message){
    this.message = message
    this.renderCard()
  }

  renderCard(){
    const messageContainer = document.querySelector(".message-container")
    const messageCard = document.createElement("div")
    messageCard.classList.add("message-card")
    const messageHeader = document.createElement("h3")
    messageHeader.innerText = this.message.content
    messageCard.append(messageHeader)
    messageContainer.appendChild(messageCard)
  }
}
