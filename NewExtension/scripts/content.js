function FistLoad() {
  const apiUrl = "https://localhost:7159/Click?";
  document.addEventListener("click", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    console.log("Tọa độ x: ", x);
    console.log("Tọa độ y: ", y);
    fetch(apiUrl + "x= " + event.clientX + "&y= " + event.clientY)
      .then((response) => response.text())
      .then((data) => {
        console.log("Dữ liệu từ API: ", data);
      })
      .catch((error) => console.error("Lỗi khi gọi API", error));
  });
  document.addEventListener("keydown", function (event) {
    var KeyDown = event.keyCode;
    console.log("Mã phím: " + KeyDown);
  });
}
FistLoad();
