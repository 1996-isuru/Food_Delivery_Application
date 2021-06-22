<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery ajax load method</title>
</head>
<body>
    <h1>jquery AJAX load method example</h1>
    <button>Load Content</button>
    <div class="content"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
    <script>

        $(document).ready(function () {
            $('button').click(function(){
                // $('.content').load('content.php');

                // $('.content').load('content.php p');
                //this p is paragraph tag name

                $('.content').load('content.php p.display');
                //this display is the paragraph tag class name
            });
        });

    </script>
</body>
</html>