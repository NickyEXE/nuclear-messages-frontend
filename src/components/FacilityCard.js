class FacilityCard {

  constructor(facility){
    this.facility = facility
    this.card = this.render()
    this.addEventListeners()
  }

  addEventListeners(){
    this.card.addEventListener("click", () => new FacilityPage(this.facility.id))
  }

  render(){
    const {name, location, image_url, id} = this.facility
    const card = document.createElement("div")
    card.classList.add("facility-card")
    const image = document.createElement("img")
    image.src = image_url
    image.alt = location
    const header = document.createElement("h3")
    header.innerText = name
    const locationP = document.createElement("p")
    locationP.innerText = location
    card.append(image, header, locationP)
    document.querySelector(".facility-container").appendChild(card)
    return card
  }

}
