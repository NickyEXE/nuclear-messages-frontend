class FacilityContainer {
  constructor(){
    api.getFacilities().then(this.renderFacilities)
  }

  renderFacilities(facilities){
    const body = document.body
    body.innerHTML = ""
    const header = document.createElement("h1")
    header.innerText = "You are lost, wastelander..."
    header.innerText = "What do you see ahead?"
    const container = document.createElement("div")
    container.classList.add("facility-container")
    const prevFacilitiesHeader = document.createElement("h3")
    prevFacilitiesHeader.innerText = "Previously Visited Facilities"
    const previousVisitedFacilities = document.createElement("ul")
    state.user.unique_facilities.forEach(facility => {
      const li = document.createElement("li")
      li.innerText = facility
      previousVisitedFacilities.appendChild(li)
    })
    body.append(header, container, prevFacilitiesHeader, previousVisitedFacilities)
    facilities.forEach(facility => new FacilityCard(facility))
  }

}
