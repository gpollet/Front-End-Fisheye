//import { Photographer } from "../models/Photographer.js"
import { createHeader } from "../templates/components/PhotographerHeader.js"
import { API } from "../api/Api.js"
import { Photographer } from "../models/Photographer.js"

async function init() {
  // Create the main page header, then get photographers data and display them
  createHeader("mainPage")
  displayData(await API.getAllData())
}

function displayData(photographers) {
  new Photographer(photographers).displayHome(photographers)
}

init()
