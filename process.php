<?php

$result = array('error' => false);
$action = '';

$conn = new mysqli("localhost", "root", "", "CRUD_VUE");
if ($conn->connect_error) {
    die("La connexion a échoué" . $conn->connect_error);
} else {
    $result['connexion'] = "La connexion a la base de données à réussi !";
}

if (isset($_GET["action"])) {
    $action = $_GET['action'];
}

if ($action == 'read') {
    $sql = $conn->query("SELECT * FROM `users` WHERE 1");
    $users = array();

    while ($row = $sql->fetch_assoc()) {
        array_push($users, $row);
    }
    $result['users'] = $users;
//    var_dump($result);
//    echo json_encode($result);
//      $result['message'] = "Liste des utilisateurs";
}

//echo json_encode($result, JSON_FORCE_OBJECT);


if ($action == 'create') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $sql = $conn->query("INSERT INTO users (name, email, phone) VALUES ('$name','$email','$phone')");

    if ($sql) {
        $result['message'] = "Utilisateur ajouté à la base de données";
    } else {
        $result['message'] = "Echec de l'ajout de l'utilisateur";
        $result['error'] = true;
    }
    $fichier = fopen('testcrud.log', 'w');
    fwrite($fichier, "name : " . $name . "\n");
    fwrite($fichier, "email : " . $email . "\n");
    fwrite($fichier, "phone : " . $phone . "\n");
    fwrite($fichier, "sql : " . $sql . "\n");
    fwrite($fichier, "message : " . $result['message'] . "\n");
    fclose($fichier);
}

if ($action == 'update') {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $sql = $conn->query("UPDATE users SET name='$name', email='$email', phone='$phone' WHERE id='$id'");

    if ($sql) {
        $result['message'] = "Utilisateur mis à jour dans la base de données";
    } else {
        $result['message'] = "Echec de la mise à jour de l'utilisateur";
        $result['error'] = true;
    }
}

if ($action == 'delete') {
    $id = $_POST['id'];

    $sql = $conn->query("DELETE FROM users WHERE id='$id'");

    if ($sql) {
        $result['message'] = "Utilisateur a été éffacé de la base de données";
    } else {
        $result['message'] = "Echec de l'éffacement de l'utilisateur";
        $result['error'] = true;
    }
}
echo json_encode($result, JSON_UNESCAPED_UNICODE);
$conn->close();
?>