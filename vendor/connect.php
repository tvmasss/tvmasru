<?php

    $connect = mysqli_connect('localhost', 'suppotnc_1', 'Staturn1983', 'suppotnc_1');

    if (!$connect) {
        die('Error connect to DataBase');
    }