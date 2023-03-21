// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked () {
  // input
  const streetNumber=document.getElementById("first-name").value
  const streetName=parseInt(document.getElementById("age-entered").value) 
  
  // output
  document.getElementById("address").innerHTML=
  "Your address is: " + streetNumber + " "+ streetName + "."
}
