<?php
// ********************* CABEZERAS ***********************
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
// ********************* FIN CABEZERAS ***********************
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
// *********************************

$correo = $_POST["email"];
$nombre = $_POST["name"];
$mensaje = $_POST["message"];
// **************** Datos destinatario ****************
$asunto = "Test";
$destino = 'bohorquez866@gmail.com';
$nombreUser = "correo prueba"; // nombre, por ejemplo nuevo mensaje de 'portafolio web'
//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'correosnotificacion2020@gmail.com';                     //SMTP username
    $mail->Password   = 'yfetkvloojadbwbn';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom($destino, $nombreUser);
    $mail->addAddress($destino); 

    // //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $asunto;
    $mail->Body    = "Nombre: ".$nombre."<br> Correo: ".$correo."<br> Mensaje: ".$mensaje."<br>  ";

    $mail->send();
    echo 'enviado con éxito';
} catch (Exception $e) {
  //  echo "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
  echo 'error';
}
?>