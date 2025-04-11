<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuanPay | Statut d'activation de votre compte</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            padding: 20px;
        }
        .confirmation-card {
            max-width: 600px;
            margin: auto;
            padding: 30px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-top: 5px solid #c6183d;
        }
        .confirmation-card h1 {
            color: #c6183d;
            font-size: 24px;
        }
        .confirmation-card p {
            font-size: 18px;
            color: #555;
        }
        .confirmation-button {
            background-color: #c6183d;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 20px;
            display: inline-block;
        }
        .confirmation-button:hover {
            background-color: #df2c53;
        }
    </style>
</head>
<body>

<div class="confirmation-card">
    <h1>Confirmation de votre compte</h1>
    <p>${message}</p>
    <a href="${buttonUrl}" class="confirmation-button">Se connecter</a>
</div>

</body>
</html>
