<?php

header('Content-Type: application/json');

$users = [
    ['id' => 1, 'name' => 'John Doe'],
    ['id' => 2, 'name' => 'Jane Doe'],
    // Add more users as needed
];

echo json_encode($users);
