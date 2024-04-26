"use strict";
const formulaire = document.getElementById("inscription-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

formulaire.addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch("http://127.0.0.1:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const result = await response.json();

  if (response.ok) {
    window.location.href = "accueil.html";
  }

  const token = result.token;

  localStorage.setItem("token", token);
});