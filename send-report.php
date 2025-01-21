<?php
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $contactType = $_POST['contact-type'];
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $kontak = isset($_POST['kontak']) ? $_POST['kontak'] : '';
    $laporan = $_POST['laporan'];
    $message = $_POST['message'];

    // Insert data into database
    $stmt = $conn->prepare("INSERT INTO laporan (name, contact_type, contact_info, laporan_type, message) VALUES (?, ?, ?, ?, ?)");
    if ($contactType === "email") {
        $stmt->bind_param("sssss", $name, $contactType, $email, $laporan, $message);
    } else {
        $stmt->bind_param("sssss", $name, $contactType, $kontak, $laporan, $message);
    }
    
    if ($stmt->execute()) {
        echo "Laporan berhasil disimpan!";
    } else {
        echo "Gagal menyimpan laporan.";
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}

$to = "katargunungbahagia@gmail.com";  // Email address to receive the report
$subject = "Laporan Baru dari $name";
$body = "Nama: $name\n";
$body .= "Kontak: " . ($contactType === "email" ? $email : $kontak) . "\n";
$body .= "Jenis Laporan: $laporan\n";
$body .= "Deskripsi: $message\n";

$headers = "From: " . ($contactType === "email" ? $email : "no-reply@example.com");

if (mail($to, $subject, $body, $headers)) {
    echo "Laporan Anda telah berhasil dikirim ke email.";
} else {
    echo "Gagal mengirim laporan ke email.";
}

$whatsappNumber = "0895342600742";  // Katar's WhatsApp number
$whatsappMessage = "Laporan Baru: Nama: $name, Jenis Laporan: $laporan, Kontak: " . ($contactType === "email" ? $email : $kontak);

// Encode the message to be used in the URL
$encodedMessage = urlencode($whatsappMessage);

// Construct the WhatsApp API URL
$whatsappUrl = "https://wa.me/$whatsappNumber?text=$encodedMessage";

// Redirect to WhatsApp
header("Location: $whatsappUrl");
exit();

?>
