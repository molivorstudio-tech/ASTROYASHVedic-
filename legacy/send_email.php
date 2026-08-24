<?php
    // Import PHPMailer classes into the global namespace
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    // Helper: Load environment variables from .env if present
    if (file_exists(__DIR__ . '/.env')) {
        $envLines = file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($envLines as $line) {
            $line = trim($line);
            if (empty($line) || strpos($line, '#') === 0) continue;
            if (strpos($line, '=') !== false) {
                list($name, $value) = explode('=', $line, 2);
                $name = trim($name);
                $value = trim($value, " \t\n\r\0\x0B\"'");
                putenv("{$name}={$value}");
                $_ENV[$name] = $value;
            }
        }
    }

    // Process form submission (handles both isset($_POST['submit']) and standard POST)
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name    = isset($_POST['name']) ? trim($_POST['name']) : '';
        $lname   = isset($_POST['last_name']) ? trim($_POST['last_name']) : '';
        $email   = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : '';
        $subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
        $msg     = isset($_POST['message']) ? trim($_POST['message']) : '';

        // Load PHPMailer classes
        require 'PHPMailer/PHPMailer.php';
        require 'PHPMailer/SMTP.php';
        require 'PHPMailer/Exception.php';

        $mail = new PHPMailer(true);

        try {
            $smtpHost      = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
            $smtpPort      = getenv('SMTP_PORT') ?: 465;
            $smtpUser      = getenv('SMTP_USERNAME') ?: '';
            $smtpPass      = getenv('SMTP_PASSWORD') ?: '';
            $recipientEmail = getenv('SMTP_RECIPIENT_EMAIL') ?: 'ajeetsingh@astroyash.com';

            $mail->isSMTP();
            $mail->Host       = $smtpHost;
            $mail->SMTPAuth   = true;
            $mail->Username   = $smtpUser;
            $mail->Password   = $smtpPass;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = (int)$smtpPort;

            // Turn off verbose debug logging for production
            $mail->SMTPDebug  = 0;

            // Recipients configuration
            $mail->setFrom($smtpUser, $name ? $name : 'Website Visitor');
            $mail->addAddress($recipientEmail, 'Astro Yash');

            if ($email) {
                $mail->addReplyTo($email, $name);
            }

            // Content
            $mail->isHTML(true);
            $mail->Subject = $subject ? $subject : 'New Inquiry from Astroyash Website';
            $mail->Body    = "First Name: <b>" . htmlspecialchars($name) . "</b><br>" .
                             "Last Name: <b>" . htmlspecialchars($lname) . "</b><br>" .
                             "Sender Email: <b>" . htmlspecialchars($email) . "</b><br>" .
                             "Message: <b>" . htmlspecialchars($msg) . "</b><br>";

            $mail->send();

            // Redirect to success confirmation page
            header("Location: contact_success.html");
            exit();
        } catch (Exception $e) {
            file_put_contents('error_log.txt', date('[Y-m-d H:i:s] ') . 'Error: ' . $e->getMessage() . PHP_EOL, FILE_APPEND);
            echo "Message could not be sent. Mailer Error: " . htmlspecialchars($mail->ErrorInfo);
        }
    }
?>
