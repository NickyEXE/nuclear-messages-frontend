class Graffiti {
  constructor(graffiti, message){
    this.graffiti = graffiti
    this.message = message
    this.render()
  }

  render(){
    const li = document.createElement("li")
    li.innerText = this.graffiti.content
    this.message.graffitiContainer.appendChild(li)
  }

}
