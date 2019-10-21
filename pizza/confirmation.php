<?php
    $first = $_POST['firstName'];
    $last = $_POST['lastName'];
    $method = $_POST['method'];
    $address = $_POST['address'];
    $size = $_POST['size'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Poppa's Pizza</title>

    <style>
        body {
            padding: 2em;
        }
    </style>
</head>
<body>
    <h1>Thank you for your order!</h1>
    <h2>Order summery:</h2>
    <p>First name:
        <?php print "$first $last"; ?>
    </p>
    <p>Method of delivery:
        <?php print "$method"; ?>
    </p>
    <p>Address:
        <?php print "$address"; ?>
    </p>
    <p>Size:
        <?php print "$size"; ?>
    </p>

    <?php
        //Send order by email
        $email = "emishkin@mail.greenriver.edu";
        $email_body = "Order Summary --\r\n";
        $email_body .= "Name: $first $last\r\n";
        $email_subject = "New Order Placed";
        $to = $email;
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email \r\n";
        $success = mail($to, $email_subject, $email_body, $headers);

        //Print final confirmation
        $msg = $success ? "Your order has been successfully placed."
        : "We're sorry. There was a problem with your order.";

        echo "<p>$msg</p>";

    ?>

</body>
</html>