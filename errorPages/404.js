module.exports = `<html lang="en">

<head>
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <title>404</title>
    <link rel="manifest" href="manifest.json">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <meta name="theme-color" content="#5d1d1d"></meta>
    <script src="scripts/ajax.js" async></script>
    <script src="scripts/main.js" async></script>
    <script src="serviceworker.js" async></script>
    <style>
        * {
            outline: none;
            box-sizing: border-box;
        }
        
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }
        
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
            display: block;
        }
        
        body {
            line-height: 1;
        }
        
        ol,
        ul {
            list-style: none;
        }
        
        blockquote,
        q {
            quotes: none;
        }
        
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
            content: '';
            content: none;
        }
        
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
        
        *::-webkit-input-placeholder {
            font-size: .8rem;
            color: #a0a0a0;
            opacity: 1;
        }
        
        *:-ms-input-placeholder {
            font-size: .8rem;
            color: #a0a0a0;
            opacity: 1;
        }
        
        *:-moz-placeholder {
            font-size: .8rem;
            color: #a0a0a0;
            opacity: 1;
        }
        
        *::-moz-placeholder {
            font-size: .8rem;
            color: #a0a0a0;
            opacity: 1;
        }
        
        [class*="col-"] {
            float: left;
            padding: 15px;
            border: none;
        }
        
        .row::after {
            content: "";
            clear: both;
            display: table;
        }
        
        [class*="col-"] {
            width: 100%;
        }
        
        @media only screen and (min-width: 600px) {
            .col-m-1 {
                width: 8.33%;
            }
            .col-m-2 {
                width: 16.66%;
            }
            .col-m-3 {
                width: 25%;
            }
            .col-m-4 {
                width: 33.33%;
            }
            .col-m-5 {
                width: 41.66%;
            }
            .col-m-6 {
                width: 50%;
            }
            .col-m-7 {
                width: 58.33%;
            }
            .col-m-8 {
                width: 66.66%;
            }
            .col-m-9 {
                width: 75%;
            }
            .col-m-10 {
                width: 83.33%;
            }
            .col-m-11 {
                width: 91.66%;
            }
            .col-m-12 {
                width: 100%;
            }
        }
        
        @media only screen and (min-width: 768px) {
            .col-1 {
                width: 8.33%;
            }
            .col-2 {
                width: 16.66%;
            }
            .col-3 {
                width: 25%;
            }
            .col-4 {
                width: 33.33%;
            }
            .col-5 {
                width: 41.66%;
            }
            .col-6 {
                width: 50%;
            }
            .col-7 {
                width: 58.33%;
            }
            .col-8 {
                width: 66.66%;
            }
            .col-9 {
                width: 75%;
            }
            .col-10 {
                width: 83.33%;
            }
            .col-11 {
                width: 91.66%;
            }
            .col-12 {
                width: 100%;
            }
        }
        
        #script-block {
            height: 0;
        }
        
        body {
            background-color: #dedede;
        }
        
        .header {
            height: 3rem;
            border-bottom: 1px solid #b4b4b4;
            background-color: #5d1d1d;
            color: #fefefe;
        }
        
        .main-body {
            min-height: calc(100% - 3rem);
            background-color: #dedede;
        }
        
        sidebar {
            height: calc(100% - 3rem);
        }
        
        .content {
            min-height: calc(100% - 3rem);
        }
        
        .sidebar.left {
            padding: 1rem 1rem 1rem 0;
        }
        
        .sidebar.right {
            padding: 1rem 0 1rem 1rem;
        }
        
        .content {
            padding: 1rem;
        }
        
        .sidebar .pagelink {
            box-shadow: none;
            -webkit-box-shadow: none;
            padding: .5rem;
            margin-bottom: .5rem;
            background: #2a2a2a;
            background-image: -webkit-linear-gradient(top, #3a3a3a, #232323);
            background-image: linear-gradient(top, #3a3a3a, #232323);
            cursor: pointer;
            color: #fefefe;
        }
        
        .sidebar .pagelink:not(.active):hover {
            box-shadow: none;
            -webkit-box-shadow: none;
            background: #2a2a2a;
            background-image: -webkit-linear-gradient(top, #4e4e4e, #232323);
            background-image: linear-gradient(top, #4e4e4e, #232323);
        }
        
        .sidebar .pagelink.active,
        .sidebar .pagelink:active {
            background: #1d1d1d;
            -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .sidebar.left .pagelink {
            border-radius: 0 .5rem .5rem 0;
        }
        
        .sidebar.right .pagelink {
            border-radius: .5rem 0 0 .5rem;
        }
        
        .sidebar .message {
            border: 1px solid #b4b4b4;
            background-color: #ffffff;
            padding: .5rem;
            margin: 0 1rem .5rem 0;
        }
        
        h1 {
            font-size: 125%;
            padding-bottom: .5rem;
        }
        
        .content>div {
            box-shadow: .1rem .1rem #a0a0a0;
            border: 1px solid #b4b4b4;
            background-color: #ffffff;
            border-radius: .5rem;
            padding: .5rem;
            margin-bottom: .5rem;
        }
        
        .content>div,
        .sidebar .h1,
        .sidebar .message {
            /* These are technically the same, but use both */
            overflow-wrap: break-word;
            word-wrap: break-word;
            /* Instead use this non-standard one: */
            word-break: break-word;
            /* Adds a hyphen where the word breaks, if supported (No Blink) */
            -ms-hyphens: auto;
            -moz-hyphens: auto;
            -webkit-hyphens: auto;
            hyphens: auto;
        }
    </style>
</head>

<body>
    <div id="script-block"></div>
    <div class="row">
        <div class="col-12 col-m-12 header">
            <span id="page-title">
                404
            </span>
        </div>
    </div>
    <div class="row main-body">
        <div class="col-2 col-m-2 left sidebar">
            <div class="pagelink" onclick="openPage('index.html', true);" id="Index">Index</div>
            <div class="pagelink" onclick="openPage('test.html', true);" id="Test">Test</div>
        </div>
        <div class="col-7 col-m-7 content" id="main-content">
            <div>
                404: The requested page was not found.
            </div>
        </div>
        <div class="col-3 col-m-3 right sidebar">
        </div>
    </div>
</body>

</html>`;