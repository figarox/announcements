<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        <title>Laravel</title>
        @viteReactRefresh 
        @vite('resources/js/app.jsx')
        @vite('resources/css/app.css')
        @vite('resources/css/other.css')
        @inertiaHead
        @routes
    </head>

    <body class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      @inertia

    </body>
</html>
