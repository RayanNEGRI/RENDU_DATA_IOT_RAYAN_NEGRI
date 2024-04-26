"use strict";

const title = document.getElementById("userName");
const title1 = document.getElementById("userName1");
const email = document.getElementById("userEmail");
const creation = document.getElementById("userCreation");
const miseAjour = document.getElementById("usermiseAjour");

const fetchUser = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login.html";
    return;
  }

  const response = await fetch(`http://127.0.0.1:3000/getMyProfile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    window.location.href = "/login.html";
    return;
  } else if (response.status === 403) {
    window.location.href = "/login.html";
    return;
  }

  const user = await response.json();

    console.log(user);
    title.innerHTML = user.user.name;
    title1.innerHTML = user.user.name;
    email.innerHTML = user.user.email;
    creation.innerHTML = user.user.createdAt;
    miseAjour.innerHTML = user.user.updatedAt;
    
};

fetchUser();