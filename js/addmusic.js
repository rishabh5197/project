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

function addmusic() {
  title = document.getElementById("title").value;
  singer = document.getElementById("singer").value;
  youtubeurl = document.getElementById("youtubeurl").value;
  duration = document.getElementById("duration").value;
  localStorage.setItem(
    verify_id.toString() + "_counter",
    parseInt(localStorage[verify_id + "_counter"]) + 1
  );
  counterset = localStorage[verify_id + "_counter"];
  lists = [counterset, title, singer, youtubeurl, duration];
  old_list = JSON.parse(
    localStorage.getItem(verify_id.toString() + "_songslist")
  );
  if (old_list == null) {
    localStorage.setItem(
      verify_id.toString() + "_songslist",
      JSON.stringify([lists])
    );
  } else {
    old_list.push(lists);
    localStorage.setItem(
      verify_id.toString() + "_songslist",
      JSON.stringify(old_list)
    );
  }
  alert("Song added to list, you can go to landing page now...");
}

function signout() {
  sessionStorage.removeItem("id_entered");
  window.location.href = "login.html";
}
