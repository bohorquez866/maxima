<?php
// ********************* CABEZERAS ***********************
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
// ********************* FIN CABEZERAS ***********************

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\exception;


require 'PHPMailer/exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';


// *********************************

$correo = $_POST["email"];
$nombre = $_POST["name"];
$mensaje = $_POST["message"];
$type =	$_POST["type"];
// **************** Datos destinatario ****************
$asunto = "New Contact";
$destino = 'customer@maximalimpieza.us ';
$nombreUser = "correo prueba"; // nombre, por ejemplo nuevo mensaje de 'portafolio web'
//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 1;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.dreamhost.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'customer@maximalimpieza.us';                     //SMTP username
    $mail->Password   = 'CorMay$$2022';                               //SMTP password
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
if($type == 'form1'){
	$phone = $_POST["phone"];
	$service = $_POST['service'];

   	$mail->Body = "Nombre: ".$nombre." <br> 
                       Correo: ".$correo." <br> 
                       Phone: ".$phone." <br>
                       Service: ".$service." <br>
                       Mensaje: ".$mensaje." <br>";

       $mail->send();
}

if($type == 'form2'){
 $mail->Body = "Nombre: ".$nombre." <br> 
                      Correo: ".$correo."<br> 
                      Mensaje: ".$mensaje." <br>";
$mail->send();
}
    echo 'enviado con éxito';
} catch (Exception $e) {
  //  echo "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
  echo 'error';
}

echo "alive"
?>