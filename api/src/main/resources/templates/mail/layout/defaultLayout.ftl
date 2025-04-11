<#macro myLayout>
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
            body {
                width: 50%;
                height: 100%;
                margin: 0;
                padding: 0;
            }
            @media screen and (max-width: 768px){
                body {
                    width: 80%;
                }
            }

            .card {
                position: relative;
                display: block;
                min-width: 0;
                word-wrap: break-word;
                background-color: #fff;
                background-clip: border-box;
                border: 1px solid rgba(0, 0, 0, .125);
                border-radius: .25rem;
            }

            .card-body {
                flex: 1 1 auto;
                padding: 0 1.25rem 0 1.25rem;
            }

            .card-header {
                flex: 1 1 auto;
                padding: .25rem 1.25rem;
                margin-bottom: 0;
                background-color: #C6183D; /* Or  */
                border-bottom: 1px solid rgba(0, 0, 0, .125);
                color: #fff;
            }
            .confirmation-button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #C6183D; /* Principal */
                color: #fff !important;
                text-decoration: none;
                border-radius: 4px;
            }

            .confirmation-button:hover {
                background-color: #D6183D; /* Principal on hover */
                color: white !important;
            }
        </style>
    </head>
    <body>
    <table cellspacing="0" cellpadding="0" style="width:100%;height:100%">
        <tr>
            <td colspan="2" align="center">
                <#include "header.ftl"/>
            </td>
        </tr>
        <tr>
            <td>
                <div class="card">
                    <div class="card-header">
                        <h1 style="font-size: 24px;">Hello, ${name}</h1>
                    </div>
                    <div class="card-body">
                        <p> ${msg} </p>
                    </div>
                </div>
                <p style="margin-top: 5px">
                    Si vous n'avez pas fait de demande, ignorez ce message simplement.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                    Cheers, <br /> <em>QuanPay Team</em>
                </p>
            </td>
        </tr>
        </tr>
        <tr>
            <td colspan="2">
                <#include "footer.ftl"/>
            </td>
        </tr>
    </table>
    </body>
    </html>
</#macro>