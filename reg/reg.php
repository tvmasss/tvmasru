<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$viber = $_POST['viber'];
$whatsapp = $_POST['whatsapp'];
$telegram = $_POST['telegram'];



$file = fopen("file.txt","at");
fwrite($file,"Имя: $name\nEmail: $email\nТелефон: $phone\nВайбер: $viber\nВатсап: $whatsapp\nТелега: $telegram\n\n\n");
fclose($file);

header("Location: reg.html");

?>