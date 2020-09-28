class FacilityPage {
  constructor(id){
    api.getFacility(id).then(this.buildPage.bind(this))
  }

  buildPage(facility){
    this.facility = facility
    this.renderPage()
  }

  renderPage(){
    const {location, messages, name, image_url} = this.facility
    const body = document.body
    body.innerHTML = ""
    const header = document.createElement("h1")
    header.innerText = `Welcome, traveler, to ${name}`
    const jumbotron = document.createElement("img")
    jumbotron.src = image_url
    jumbotron.alt = name
    const locationEle = document.createElement("h3")
    locationEle.innerText = `${name} is a place in what was once known as ${location}.`
    const signageIntro = document.createElement("h4")
    signageIntro.innerText = `As you explore, you see the following signs, some marked by those who came before:`
    const messageContainer = document.createElement("div")
    messageContainer.classList.add("message-container")
    const backButton = document.createElement("button")
    backButton.innerText = "Go back"
    backButton.addEventListener("click", () => new FacilityContainer)
    body.append(backButton, header, jumbotron, locationEle, signageIntro, messageContainer)
    messages.forEach(message => new MessageCard(message))
  }
}
