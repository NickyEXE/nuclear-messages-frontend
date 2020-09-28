class FacilityContainer {
  constructor(){
    api.getFacilities().then(this.renderFacilities)
  }

  renderFacilities(facilities){
    const body = document.body
    body.innerHTML = ""
    const header = document.createElement("h1")
    header.innerText = "You are lost, wastelander..."
    body.append(header)
    setTimeout(() => {
      header.innerText = "What do you see ahead?"
      const container = document.createElement("div")
      container.classList.add("facility-container")
      body.appendChild(container)
      facilities.forEach(facility => new FacilityCard(facility))
    }, 0)
  }

}
