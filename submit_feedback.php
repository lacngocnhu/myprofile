<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myprofile";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Kết nối thất bại: " . $conn->connect_error);
}

$noidung = isset($_POST['noidung']) ? trim($_POST['noidung']) : '';

if (empty($noidung)) {
  header("Location: index.html?message=Lời nhắn không được để trống.");
  exit();
}

$sql = "INSERT INTO loinhan (noidung) VALUES (?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $noidung);

if ($stmt->execute()) {
  header("Location: index.html?message=Lời nhắn đã được gửi thành công.");
} else {
  header("Location: index.html?message=Lỗi: " . $stmt->error);
}

$stmt->close();
$conn->close();
?>