<html>
        <head>
                <title>CodeIgniter Tutorial</title>
                <?php echo link_tag('assets/css/default.css'); ?>
        </head>
        <body>
                <h1><?php echo $title; ?></h1>
                <?php echo isset($msg)?heading($msg,3,'class="message"'):''; ?>