class ApiService {

  constructor(root){
    this.root = root
  }

  getFacilities = () => fetch(this.root+"/facilities").then(res => res.json())

  getFacility = (id) => fetch(this.root+"/facilities/" + id).then(res => res.json())

}
