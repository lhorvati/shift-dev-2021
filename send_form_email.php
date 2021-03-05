<?php
if (isset($_POST['email'])) {
    
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to      = "i@send.exchange";
    $email_subject = "Shift Dev 2020 Sponsor form";
    
    function died($error)
    {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error . "<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
    
    
    // validation expected data exists
    if (!isset($_POST['firstName']) || !isset($_POST['lastName']) || !isset($_POST['jobTitle']) || !isset($_POST['jobFunction']) || !isset($_POST['companyName']) || !isset($_POST['companyWebsite']) || !isset($_POST['email'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }


    $firstName      = $_POST['firstName'];
    $lastName       = $_POST['lastName'];
    $jobTitle       = $_POST['jobTitle'];
    $jobFunction    = $_POST['jobFunction'];
    $companyName    = $_POST['companyName'];
    $companyWebsite = $_POST['companyWebsite'];
    $email_from     = $_POST['email'];
    $phone          = $_POST['phone'];

    $error_message = "";
    $email_exp     = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    $string_exp = "/^[A-Za-z .'-]+$/";


    if (!preg_match($email_exp, $email_from)) {
        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    }

    if (!preg_match($string_exp, $firstName)) {
        $error_message .= 'The First Name you entered does not appear to be valid.<br />';
    }

    if (!preg_match($string_exp, $lastName)) {
        $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
    }


    if (strlen($error_message) > 0) {
        died($error_message);
    }

    $email_message = "Form details below.\n\n";


    function clean_string($string)
    {
        $bad = array(
            "content-type",
            "bcc:",
            "to:",
            "cc:",
            "href"
        );
        return str_replace($bad, "", $string);
    }



    $email_message .= "First Name: " . clean_string($firstName) . "\n";
    $email_message .= "Last Name: " . clean_string($lastName) . "\n";
    $email_message .= "Email: " . clean_string($email_from) . "\n";
    $email_message .= "Job Title: " . clean_string($jobTitle) . "\n";
    $email_message .= "Job Function: " . clean_string($jobFunction) . "\n";
    $email_message .= "Company Name: " . clean_string($companyName) . "\n";
    $email_message .= "Company Website: " . clean_string($companyWebsite) . "\n";
    $email_message .= "Phone: " . clean_string($phone) . "\n";

    // create email headers
    $headers = 'From: ' . $email_from . "\r\n" . 'Reply-To: ' . $email_from . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

<!-- include your own success html here -->

<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>Developer Conference : Shift DEV 2020</title>
    <link href='/apple-touch-icon.png?v=QEMrJgwEaY' rel='apple-touch-icon' sizes='180x180'>
    <link href='favicon-32x32.png?v=QEMrJgwEaY' rel='icon' sizes='32x32' type='image/png'>
    <link href='favicon-16x16.png?v=QEMrJgwEaY' rel='icon' sizes='16x16' type='image/png'>
    <link href='manifest.json?v=QEMrJgwEaY' rel='manifest'>
    <link color='#5bbad5' href='safari-pinned-tab.svg?v=QEMrJgwEaY' rel='mask-icon'>
    <link href='favicon.ico?v=QEMrJgwEaY' rel='shortcut icon'>
    <meta content='#ffffff' name='theme-color'>
    <meta charset='UTF-8'>
    <meta content='Shift, 2019, developer, developer conference, conference, dev' name='keywords'>
    <meta content='The biggest Developer Conference in Southeast Europe. This event, Shift 2019 is the seventh and will bring together more than 1300 attendees. During the two conference days, Shift becomes a meeting place for developers in the most beautiful city in the world.' name='description'>
    <meta content='horvaticluka@gmail.com' name='author'>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover' id='meta' name='viewport'>
    <meta content='https://dev.shiftconf.co/img/backgrounds/dev2019-bg.svg' property='og:image'>
    <meta content='Developer Conference : Shift DEV 2019' property='og:title'>
    <meta content='The biggest Developer Conference in Southeast Europe. This event, Shift 2019 is the seventh and will bring together more than 1300 attendees. During the two conference days, Shift becomes a meeting place for developers in the most beautiful city in the world.' property='og:discription'>
    <meta content='https://dev.shiftconf.co/' property='og:url'>
    <link href='css/main.css' rel='stylesheet'>
    <!-- Slick slider -->
    <link href='slick/slick.css' rel='stylesheet' type='text/css'>
    <link href='slick/slick-theme.css' rel='stylesheet' type='text/css'>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async='' src='https://www.googletagmanager.com/gtag/js?id=UA-113486610-2'></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', 'UA-113486610-2');
    </script>
    <!-- Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '687667491600360');
      fbq('track', 'PageView');
    </script>
    <noscript>
      <img height='1' src='https://www.facebook.com/tr?id=687667491600360&amp;ev=PageViewrn&amp;noscript=1' width='1'>
    </noscript>
    <!-- End Facebook Pixel Code -->
  </head>
  <body>
    <!-- NAVBAR SECTION ************************************** -->
    <div class='navBar'>
      <div class='container'>
        <a class='navBar__logo' href='index.html'>
          <svg height='' viewbox='0 0 435 367' width='' xmlns='http://www.w3.org/2000/svg'>
            <path d='M57.17 325.35v34.3h8.96c3.85 0 6.65-1.19 8.33-3.57 1.75-2.45 2.59-6.93 2.59-13.58-.28-13.86-3.29-17.15-10.92-17.15h-8.96zM66.13 367H49.47v-49h16.66c11.48 0 18.62 7.49 18.62 24.5 0 17.08-7.14 24.5-18.62 24.5zm59.5 0H95.32v-49h30.31v7.35h-22.61v12.18h20.58v7.35h-20.58v14.77h22.61V367zm31.29 0h-7.91l-16.94-49h8.33l12.6 38.5 12.74-38.5h8.33l-17.15 49zM435 293.71H0V0h435v293.71zM15.4 278.367h404.185V15.322H15.4v263.045zm29.457-168.852l13.52-12.295c4.697 6.2 11.125 9.442 18.508 9.442 6.042 0 9.778-2.099 9.778-5.624 0-3.43-1.915-4.862-8.248-6.195l-8.628-1.909c-13.14-2.859-19.753-10.008-19.753-21.255 0-12.867 10.739-20.682 28.096-20.682 11.41 0 21.383 3.524 28.191 10.197l-11.41 12.678c-4.701-5.146-11.794-8.293-18.317-8.293-5.277 0-8.533 1.81-8.533 4.768 0 3.147 2.206 4.669 9.203 6.195l9.78 2.187c12.944 2.86 18.607 9.154 18.607 20.494 0 14.106-11.22 22.687-29.553 22.687-13.235-.005-24.74-4.485-31.241-12.395zm68.15-58.335h19.373v29.642c3.066-6.373 8.053-9.52 14.956-9.52 10.36 0 15.631 6.572 15.631 19.35v29.643H143.6V92.65c0-4.763-1.726-7.15-5.278-7.15-3.836 0-5.947 3.048-5.947 8.676v26.118h-19.368V51.18zm59.829-.288h19.753v16.014h-19.753V50.892zm.19 21.732h19.373v47.66h-19.373v-47.66zm63.1 12.2h-10.554v35.46h-19.368v-35.46h-7.098v-12.2h7.098v-2.86c0-12.772 7.193-19.156 21.478-19.156 2.84.03 5.67.35 8.444.955v13.25c-1.453-.287-2.93-.445-4.412-.472-3.931 0-6.137 1.999-6.137 5.434v2.86h10.554v12.2l-.005-.01zm5.262-12.2h7.958V61.76l19.373-7.244v18.108h11.029v12.2h-11.03V99.03c0 4.386 2.497 6.861 7.003 6.861 1.348.014 2.695-.082 4.027-.288v14.687c-4.312.666-6.903.955-9.589.955-14.1 0-20.808-5.434-20.808-16.786V84.825h-7.963V72.624zM93.84 235.648v10.008H46.656v-10.008H93.84z' fill-rule='evenodd' fill='#ffffff'></path>
          </svg>
        </a>
        <div class='navBar__btn'></div>
        <div class='navBar__nav'>
          <div class='navBar__close'></div>
          <ul>
            <li>
              <a class='nav__link' href='index.html#about'>About</a>
            </li>
            <li>
              <a class='nav__link' href='index.html#speakers'>Speakers</a>
            </li>
            <li>
              <a class='nav__link' href='index.html#schedule'>Schedule</a>
            </li>
            <li>
              <a class='nav__link' href='index.html#tickets'>Tickets</a>
            </li>
            <li>
              <a class='nav__link' href='index.html#location'>Location</a>
            </li>
            <li>
              <a class='nav__link' href='index.html#sponsors'>Partners</a>
            </li>
            <li>
              <a class='nav__link' href='index.html#footer'>Contact</a>
            </li>
            <li>
              <a class='btn gradient' href='index.html#tickets'>
                <span>Get Tickets</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- NOTE SECTION ************************************** -->
    <div class='section' id='note'>
      <div class='container'>
        <h2 class='large'>Thank you for contacting us</h2>
        <br>
        <br>
        <br>
        <p>We will be in touch with you very soon.</p>
        <br>
        <p>If you like, here is the link to get back to <a href="https://dev.shiftconf.co/">Shift Dev web</a></p>
        </p>
      </div>
    </div>
    <!-- FOOTER SECTION ************************************** -->
    <div class='section' id='footer'>
      <div class='container'>
        <div class='footer__row'>
          <div class='footer__logo'></div>
        </div>
        <div class='footer__row'>
          <div class='footer__wrap'>
            <div class='footer__col'>
              <p>May 30 & 31 2019 — Split, Croatia</p>
              <p>Shift Dev is a two-day single stage developer event, consisting of a balance of educational and inspirational talks, delivered with a side of workshops and networking events located on the beautiful Mediterranean coast.</p>
            </div>
            <div class='footer__col'>
              <h3>Our Events</h3>
              <div class='footer-previous'>
                <a href='https://money.shiftconf.co/' target='_blank'>Shift Money 2019</a>
                <a href='https://money.shiftconf.co/2018' target='_blank'>Shift Money 2018</a>
                <a href='https://dev.shiftconf.co/2018' target='_blank'>Shift Dev 2018</a>
                <a href='https://dev.shiftconf.co/2017' target='_blank'>Shift Dev 2017</a>
                <a href='https://dev.shiftconf.co/2016' target='_blank'>Shift Dev 2016</a>
              </div>
            </div>
            <div class='footer__col'>
              <div class='footer__row footer__row--info'>
                <div class='footer__item'>
                  <div class='footer__icon'>
                    <svg height='31' viewbox='0 0 31 31' width='31' xmlns='http://www.w3.org/2000/svg'>
                      <g fill-rule='evenodd' fill='none'>
                        <path d='M30.06 15.03C30.06 6.729 23.33 0 15.03 0 6.73 0 0 6.729 0 15.03c0 8.3 6.73 15.029 15.03 15.029 8.3 0 15.03-6.728 15.03-15.03' fill='#005DF2' opacity='.2'></path>
                        <path d='M15.03 16.03c-1.029-.846-1.717-1.89-2.078-2.483l-.269-.508c.094-.102.813-.87 1.123-1.288.392-.525-.175-.997-.175-.997s-1.596-1.597-1.96-1.913c-.364-.318-.783-.142-.783-.142-.764.494-1.557.924-1.604 2.989-.002 1.934 1.466 3.929 3.054 5.473 1.59 1.744 3.772 3.49 5.883 3.489 2.066-.047 2.495-.84 2.99-1.603 0 0 .175-.42-.142-.783-.316-.364-1.913-1.961-1.913-1.961s-.474-.567-.997-.175c-.392.292-1.093.94-1.262 1.099 0 0-1.173-.626-1.868-1.196' fill='#FFF'></path>
                      </g>
                    </svg>
                  </div>
                  <div class='footer__text'>+385 98 954 4199</div>
                </div>
                <div class='footer__item'>
                  <div class='footer__icon'>
                    <svg height='31' viewbox='0 0 31 31' width='31' xmlns='http://www.w3.org/2000/svg'>
                      <g fill-rule='evenodd' fill='none'>
                        <path d='M30.65 15.03C30.65 6.729 23.921 0 15.621 0S.591 6.729.591 15.03c0 8.3 6.73 15.029 15.03 15.029 8.3 0 15.03-6.728 15.03-15.03' fill='#005DF2' opacity='.2'></path>
                        <path d='M21.065 9.65H10.176c-.859 0-1.555.672-1.555 1.5v7.5c0 .829.696 1.5 1.555 1.5h10.89c.858 0 1.555-.671 1.555-1.5v-7.5c0-.828-.697-1.5-1.556-1.5zm0 3l-5.444 3.75-5.445-3.75v-1.5l5.445 3.75 5.444-3.75v1.5z' fill='#FFF'></path>
                      </g>
                    </svg>
                  </div>
                  <a class='footer__text' href='mailto:shift@shiftconf.co'>shift@shiftconf.co</a>
                </div>
              </div>
              <div class='footer__row'>
                <div class='footer-social'>
                  <a href='https://twitter.com/shiftconf_co' target='_blank'>
                    <svg height='18' viewbox='0 0 22 18' width='22' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M6.749 18c8.107 0 12.543-6.927 12.543-12.924 0-.195 0-.39-.009-.585.86-.638 1.608-1.444 2.2-2.356-.79.363-1.641.602-2.535.717.911-.558 1.607-1.452 1.943-2.515-.851.522-1.797.894-2.803 1.098C17.28.549 16.137 0 14.873 0c-2.433 0-4.41 2.037-4.41 4.544 0 .355.043.7.111 1.037C6.912 5.395 3.662 3.579 1.487.833 1.11 1.506.894 2.285.894 3.118c0 1.577.782 2.968 1.96 3.783-.722-.027-1.401-.23-1.994-.567v.062c0 2.197 1.521 4.039 3.533 4.455-.37.107-.756.16-1.16.16-.284 0-.56-.027-.826-.08.559 1.807 2.192 3.118 4.118 3.154-1.513 1.222-3.413 1.948-5.476 1.948-.353 0-.705-.017-1.049-.062C1.943 17.247 4.264 18 6.749 18' fill-rule='nonzero' fill='#FFF'></path>
                    </svg>
                  </a>
                  <a href='https://www.facebook.com/shiftsplit' target='_blank'>
                    <svg height='21' viewbox='0 0 22 21' width='22' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M22 3.5C22 1.661 20.26 0 18.333 0H3.667C1.739 0 0 1.661 0 3.5v14C0 19.339 1.74 21 3.667 21H11v-7.933H8.311v-3.5H11V8.203c0-2.352 1.85-4.47 4.125-4.47h2.964v3.5h-2.964c-.324 0-.703.376-.703.94v1.394h3.667v3.5h-3.667V21h3.911C20.261 21 22 19.339 22 17.5v-14z' fill-rule='nonzero' fill='#FFF'></path>
                    </svg>
                  </a>
                  <a href='https://www.youtube.com/user/TheShiftConference' target='_blank'>
                    <svg height='21' viewbox='0 0 32 21' width='32' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M30.64 2.024C29.772.55 28.83.279 26.912.176 24.996.052 20.178 0 16.004 0 11.822 0 7.002.052 5.088.174 3.174.279 2.23.548 1.354 2.024.46 3.496 0 6.03 0 10.494v.016c0 4.444.46 6.998 1.354 8.455.876 1.474 1.818 1.741 3.732 1.865 1.916.107 6.736.17 10.918.17 4.174 0 8.992-.063 10.91-.168 1.918-.124 2.86-.391 3.728-1.865C31.544 17.51 32 14.956 32 10.51v-.01-.005c0-4.465-.456-7-1.36-8.472zM12 16.227V4.773L22 10.5l-10 5.727z' fill-rule='nonzero' fill='#FFF'></path>
                    </svg>
                  </a>
                  <a href='https://www.flickr.com/photos/shiftsplit/sets/' target='_blank'>
                    <svg height='21' viewbox='0 0 22 21' width='22' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M20.79 1.155C19.983.385 19.012 0 17.875 0H4.125C2.989 0 2.017.385 1.21 1.155.403 1.925 0 2.853 0 3.937v13.125c0 1.085.403 2.012 1.21 2.783C2.017 20.615 2.99 21 4.125 21h13.75c1.136 0 2.108-.385 2.915-1.155.807-.77 1.21-1.698 1.21-2.783V3.937c0-1.084-.403-2.012-1.21-2.782zM9.11 12.551c-.593.565-1.309.848-2.149.848-.84 0-1.556-.283-2.148-.848-.592-.565-.888-1.249-.888-2.051s.295-1.486.888-2.05C5.404 7.883 6.12 7.6 6.96 7.6c.84 0 1.556.283 2.149.848.591.565.887 1.249.887 2.05 0 .803-.296 1.487-.887 2.052zm8.077 0c-.591.565-1.307.848-2.148.848-.84 0-1.556-.283-2.149-.848-.591-.565-.888-1.249-.888-2.051s.297-1.486.888-2.05c.593-.566 1.309-.849 2.149-.849.84 0 1.556.283 2.148.848.592.565.889 1.249.889 2.05 0 .803-.297 1.487-.889 2.052z' fill-rule='nonzero' fill='#FFF'></path>
                    </svg>
                  </a>
                  <a href='https://www.instagram.com/shiftconf.co/' target='_blank'>
                    <svg height='18' viewbox='0 0 18 18' width='18' xmlns='http://www.w3.org/2000/svg'>
                      <g fill-rule='nonzero' fill='none'>
                        <path d='M12.638 0H5.362C2.406 0 0 2.406 0 5.362v7.276C0 15.594 2.406 18 5.362 18h7.276C15.594 18 18 15.594 18 12.638V5.362C18 2.406 15.594 0 12.638 0zm3.551 12.638c0 1.961-1.59 3.551-3.551 3.551H5.362c-1.961 0-3.551-1.59-3.551-3.551V5.362c0-1.961 1.59-3.551 3.551-3.551h7.276c1.961 0 3.551 1.59 3.551 3.551v7.276z' fill='url(#a)'></path>
                        <path d='M9 4.39C6.458 4.39 4.39 6.458 4.39 9c0 2.542 2.068 4.61 4.61 4.61 2.542 0 4.61-2.068 4.61-4.61 0-2.542-2.068-4.61-4.61-4.61zm0 7.427c-1.556 0-2.817-1.261-2.817-2.817 0-1.556 1.261-2.817 2.817-2.817 1.556 0 2.817 1.261 2.817 2.817 0 1.556-1.261 2.817-2.817 2.817z' fill='url(#b)'></path>
                        <circle cx='13.829' cy='4.171' fill='url(#c)' r='1.098'></circle>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div class='footer__row footer__row--right'>
                <a class='btn gradient' href='index.html#tickets'>
                  <span>Get Tickets</span>
                </a>
              </div>
              <div class='footer__row'>
                <div class='footer__copyright'>
                  <a href='press.html'>Press</a>
                  <span>&#124;</span>
                  <a href='note.html'>Founder's note</a>
                  <span>&#124;</span>
                  <a href='code.html'>Code of Conduct</a>
                  <span>&#124;</span>
                  <a href='sponsor.html'>Become a sponsor</a>
                  <br>
                  <span>© 2019 Shift</span>
                </div>
                <div class='contact hide'>
                  Shift Conference
                  <br>
                  <br>
                  114. brigade 8,
                  <br>
                  21000 Split, Croatia
                  <br>
                  <br>
                  <a href='mailto: shift@shiftconf.co'>shift@shiftconf.co</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  <script src='https://code.jquery.com/jquery-3.3.1.min.js' type='text/javascript'></script>
  <script src='js/script.js' type='text/javascript'></script>
</html>

<?php

}
?>