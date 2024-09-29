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

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const container = document.querySelector(".container");

  // Kiểm tra xem người dùng đã chọn dark mode trước đó chưa
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme === "dark-theme") {
    container.classList.add("dark-theme");
    if (themeToggle) {
      themeToggle.checked = true; // Đồng bộ checkbox trạng thái với dark mode
    }
  }

  // Sự kiện khi gạt nút chuyển đổi
  if (themeToggle) {
    themeToggle.addEventListener("change", function () {
      if (themeToggle.checked) {
        container.classList.add("dark-theme");
        localStorage.setItem("selectedTheme", "dark-theme");
      } else {
        container.classList.remove("dark-theme");
        localStorage.removeItem("selectedTheme");
      }
    });
  }
});

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/66f86534e5982d6c7bb61f6a/1i8t4mm94";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
