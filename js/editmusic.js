verify_id = sessionStorage.getItem("id_entered");
if (verify_id) {
  console.log(sessionStorage.getItem("id_entered"));
} else {
  window.location.href = "login.html";
}

check_counter = localStorage.getItem(verify_id.toString() + "_counter");
if (check_counter) {
} else {
  localStorage.setItem(verify_id.toString() + "_counter", 0);
}

function signout() {
  sessionStorage.removeItem("id_entered");
  window.location.href = "login.html";
}

function fetchsong() {
  id_to_fetch = document.getElementById("id_to_fetch").value;
  entered_id = sessionStorage.getItem("id_entered");
  allsongslist = JSON.parse(localStorage.getItem(entered_id + "_songslist"));
  for (i of allsongslist) {
    if (i) {
      if (id_to_fetch == i[0]) {
        document.getElementById("title").value = i[1];
        document.getElementById("singer").value = i[2];
        document.getElementById("youtubeurl").value = i[3];
        document.getElementById("duration").value = i[4];
      } else {
        //   console.log("error");
      }
    } else {
    }
  }
}

function updatenow() {
  id_to_fetch = document.getElementById("id_to_fetch").value;
  entered_id = sessionStorage.getItem("id_entered");
  allsongslist = JSON.parse(localStorage.getItem(entered_id + "_songslist"));
  for (i of allsongslist) {
    if (i) {
      if (id_to_fetch == i[0]) {
        i[1] = document.getElementById("title").value;
        i[2] = document.getElementById("singer").value;
        i[3] = document.getElementById("youtubeurl").value;
        i[4] = document.getElementById("duration").value;
        alert("song is updated check the list ");
        localStorage.setItem(
          verify_id.toString() + "_songslist",
          JSON.stringify(allsongslist)
        );
      } else {
        console.log("error");
      }
    } else {
    }
  }
}
