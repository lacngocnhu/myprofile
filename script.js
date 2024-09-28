document.addEventListener("DOMContentLoaded", function () {
  // GỬI FORM ẨN DANH
  const messageForm = document.getElementById("message");
  if (messageForm) {
    messageForm.addEventListener("submit", function (event) {
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
  }

  //PHẦN SỞ THÍCH XỔ XUỐNG
  function toggle() {
    var favourites = document.getElementById("favourites");
    if (favourites) {
      favourites.classList.toggle("show");
    }
  }

  const favouritesButton = document.getElementById("fv-btn");
  if (favouritesButton) {
    favouritesButton.addEventListener("click", toggle);
  }

  //IN ĐẬM MENU TRANG ĐANG TRUY CẬP
  var currentUrl = window.location.pathname.split("/").pop();
  var links = document.querySelectorAll(".menu a");

  var isActiveSet = false;

  links.forEach(function (link) {
    var linkHref = link.getAttribute("href");
    if (currentUrl === linkHref) {
      link.classList.add("active");
      isActiveSet = true;
    }
  });

  // Nếu không có liên kết nào khớp, đặt mặc định cho liên kết "Trang chủ"
  var homeLink = document.getElementById("home");
  if (homeLink && !isActiveSet) {
    homeLink.classList.add("active");
  }

  //NGHE NHẠC KHI ẤN VÀO ẢNH
  const spotImage = document.getElementById("spotImage");
  if (spotImage) {
    spotImage.addEventListener("click", function () {
      var audio = document.getElementById("audioPlayer");
      if (audio) {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    });
  }

  //RANDOM CHÂM NGÔN
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

  const newQuoteButton = document.getElementById("new-quote");
  const quoteElement = document.getElementById("quote");

  if (newQuoteButton && quoteElement) {
    newQuoteButton.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.innerText = quotes[randomIndex];
    });
  }
});

const themeToggle = document.getElementById("themeToggle");
const container = document.querySelector(".container");

// Kiểm tra xem người dùng đã chọn giao diện trước đó chưa
window.onload = function () {
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme === "dark-theme") {
    themeToggle.checked = true; // Đặt checkbox ở trạng thái checked
    container.classList.add("dark-theme"); // Thêm lớp dark nếu đã lưu
  } else {
    container.classList.remove("dark-theme"); // Xóa lớp dark
  }
};

// Sự kiện khi gạt nút
themeToggle.addEventListener("change", function () {
  if (themeToggle.checked) {
    container.classList.add("dark-theme"); // Thêm lớp dark cho container
    localStorage.setItem("selectedTheme", "dark-theme"); // Lưu trạng thái dark
  } else {
    container.classList.remove("dark-theme"); // Xóa lớp dark
    localStorage.removeItem("selectedTheme"); // Xóa lưu trữ giao diện
  }
});
