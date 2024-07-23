document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("message")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn việc gửi form theo cách mặc định

      const form = event.target;

      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.text(); // Đọc phản hồi dưới dạng văn bản
          } else {
            throw new Error("Có lỗi xảy ra khi gửi.");
          }
        })
        .then((text) => {
          alert("Lời nhắn đã được gửi thành công!");
          // Xử lý thông tin phản hồi nếu cần
          console.log("Phản hồi:", text);
          // Tải lại form nếu cần
          form.reset();
        })
        .catch((error) => {
          console.error("Lỗi:", error);
          alert("Có lỗi xảy ra khi gửi form.");
        });
    });
});
function toggleFavourites() {
  var favourites = document.getElementById("favourites");
  favourites.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.pathname.split("/").pop();
  var links = document.querySelectorAll(".menu a");

  links.forEach(function (link) {
    var linkHref = link.getAttribute("href");
    if (currentUrl === linkHref) {
      link.classList.add("active");
    }
  });
});

const quotes = [
  "Cà ton bon si la xua ki nê.",
  "Mèo kêu gà gáy, chuột chù cá sấu.",
  "Hương vị mây bay trên dải ngân hà.",
  "Bông hoa xà phòng nở rộ dưới ánh trăng.",
  "Đêm nay trăng sáng, gió thổi lá rơi.",
  "Con cá bơi lội trong nồi cơm điện.",
  "Chú chim bay qua cầu vồng bằng bánh mì.",
  "Chiếc lá rơi rụng trên biển xanh rì rào.",
  "Bầu trời xanh thẳm, mây trắng phau phau.",
  "Cơn mưa rào tắm cho bụi cây xanh.",
  "Hạt cát nhảy múa trong mắt bão.",
  "Mặt trời mọc đằng tây, lặn đằng nam.",
  "Ngôi sao băng bay qua ao nhà hàng xóm.",
  "Cây dừa đứng hát giữa lòng thành phố.",
  "Bánh mì trứng chiên bay lượn trong vũ trụ.",
  "Hồ nước mắt cá sấu chảy ra biển.",
  "Bàn tay vỗ nhẹ trên đám mây lười.",
  "Con vịt bơi qua sông bằng đôi cánh chuồn chuồn.",
  "Đêm nay ngôi sao lấp lánh trong tủ lạnh.",
  "Con đường lá vàng rơi giữa lòng đại dương.",
];

document.getElementById("new-quote").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
});
