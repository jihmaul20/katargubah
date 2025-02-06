if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die("CSRF Token tidak valid!");
}



$allowed_types = ['image/jpeg', 'image/png', 'application/pdf'];
if (!in_array($_FILES['evidence']['type'], $allowed_types)) {
    die("Format file tidak diizinkan!");
}
