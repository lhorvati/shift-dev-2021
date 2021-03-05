$(function() {
  var total = 0;
  
  var tickets = [
    // {
    //   id: 1,
    //   name: 'Virtual',
    //   price: '12.5',
    //   humanPrice: '€10 + VAT',
    //   //time: 'Sales end on January 15th 2020',
    //   time: 'Access all live streamed content, interact & meet all attendees and participate with AMA with all Speakers',
    //   quantity: 0,
    //   slug: 'sil419he9u4' //kod karte - skupit sa ti.to
    // },
    {
      id: 1,
      name: 'Blind Bird Student',
      price: '30',
      humanPrice: '€24 + VAT',
      //time: 'Sales end on January 15th 2020',
      time: 'Access to Stage and Expo',
      quantity: 0,
      slug: 'fusmg7u4uvw' //kod karte - skupit sa ti.to
      
    },
    {
      id: 2,
      name: 'Blind Bird Standard',
      price: '150',
      humanPrice: '€120 + VAT',
      //time: 'Sales end on January 15th 2020',
      time: 'Access to Stage and Expo',
      quantity: 1,
      slug: 'hvdbbh7aud4' //kod karte - skupit sa ti.to
    }
  ];

  // MORAS OVO PROMINIT ZA DODATNE TICKETE
  
  $('#complete').click(function() {
    window.close();
  });

  $('#back-to-home').click(function() {
    window.close();
  });

  var invoiceEmail;
  var company;
  var address;
  var vat;
  var randomNumber;

  if(window.location.href.includes('/#/crypto-checkout')) {
    var first = parseInt(getParameterByName('1'));
    var second = parseInt(getParameterByName('2'));
    // var third = parseInt(getParameterByName('3'));
    // MORAS OVO PROMINIT ZA DODATNE TICKETE

    var firstTicket = tickets[0];
    var secondTicket = tickets[1];
    // var thirdTicket = tickets[2];
    // MORAS OVO PROMINIT ZA DODATNE TICKETE

    firstTicket.quantity = first;
    secondTicket.quantity = second;
    // thirdTicket.quantity = third;
    // MORAS OVO PROMINIT ZA DODATNE TICKETE

    tickets[0] = firstTicket;
    tickets[1] = secondTicket;
    // tickets[2] = thirdTicket;
    // MORAS OVO PROMINIT ZA DODATNE TICKETE


    if(isValid()) {
      for (var i in tickets) {
        total += tickets[i].price * tickets[i].quantity
      }
  
      $('body').addClass('crypto-payment');
  
      var boughtTickets = tickets.filter(ticket => ticket.quantity > 0);
      var summary = '';
      var total = 0;


      for(var i = 0; i < boughtTickets.length; i++) {
        total += boughtTickets[i].quantity * boughtTickets[i].price;
        summary += boughtTickets[i].name + ' x' + boughtTickets[i].quantity + ' - ' + boughtTickets[i].price * boughtTickets[i].quantity + '€' + '<br>';
      }
  
      $("#crypto-summary").loadTemplate($("#summary"),
      {
        summary: summary,
        total: total + '€'
      });
  
      apiRequest.get('https://crypto-payment.shiftconf.co/info/' + total).then(function(response) {
        response.json().then(function(info) {
          $("#crypto-currencies").loadTemplate($("#currencies"),
          {
            'ltc-price': info.ltc.price,
            'btc-price': info.btc.price,
            // 'bch-price': info.bch.price,
            'eth-price': info.eth.price,
            // 'iop-price': info.iop.price
          });
          
          $('.ltc-icon').attr('src', info.ltc.icon);
          $('.btc-icon').attr('src', info.btc.icon);
          // $('.bch-icon').attr('src', info.bch.icon);
          $('.eth-icon').attr('src', info.eth.icon);
          // $('.iop-icon').attr('src', info.iop.icon);

          $('.currency').on('click', function() {
            const currency = $(this).attr('id');
            const email = $('#email').val();
            const order = tickets[0].name + ' x' + tickets[0].quantity + ', ' + tickets[1].name + ' x' + tickets[1].quantity; // MORAS OVO PROMINIT ZA DODATNE TICKETE
            // const order = tickets[0].name + ' x' + tickets[0].quantity + ', ' + tickets[1].name + ' x' + tickets[1].quantity + ', ' + tickets[2].name + ' x' + tickets[2].quantity; 

            $('.currencies').css('display', 'none');
            $('.lds-ring').css('display', 'table');

            setTimeout(function() {
              apiRequest.post('https://crypto-payment.shiftconf.co/crypto-payment/Shift-Dev/2021/' + currency, { email, order, total: info[currency].price + ' ' + currency.toUpperCase() }).then(function(response) {
                response.json().then(function(data) {
                  $('.lds-ring').css('display', 'none');
                  $('.crypto-qr').attr('src', 'https://chart.googleapis.com/chart?chl=' + data.address + '&chs=200x200&cht=qr&chld=H%7C0');
                  $('.crypto-checkout').css('display', 'block');
                  $('.crypto-icon').attr('src', info[currency].icon);
                  $('.crypto-amount').text(info[currency].price + ' ' + currency.toUpperCase());
                  $('.crypto-fiat').text(total + ' EUR');
                  $('#crypto-wallet').text(data.address);
                });
              });
            }, 1000);
          });
        });
      });  
    }
  } else if(window.location.href.includes('/#/invoice-checkout')) {
    var first = parseInt(getParameterByName('1'));
    var second = parseInt(getParameterByName('2'));
    // var third = parseInt(getParameterByName('3'));
    // MORAS OVO PROMINIT ZA DODATNE TICKETE

    var firstTicket = tickets[0];
    var secondTicket = tickets[1];
    // var thirdTicket = tickets[2];
    // MORAS OVO PROMINIT ZA DODATNE TICKETE

    firstTicket.quantity = first;
    secondTicket.quantity = second;
    // thirdTicket.quantity = third;
    // MORAS OVO PROMINIT ZA DODATNE TICKETE

    tickets[0] = firstTicket;
    tickets[1] = secondTicket;
    // tickets[2] = thirdTicket;
    // MORAS OVO PROMINIT ZA DODATNE TICKETE

    if(isValid()) {
      for (var i in tickets) {
        total += tickets[i].price * tickets[i].quantity
      }

      $('body').addClass('invoice-payment');
  
      var boughtTickets = tickets.filter(ticket => ticket.quantity > 0);
      var summary = '';
      var total = 0;


      for(var i = 0; i < boughtTickets.length; i++) {
        total += boughtTickets[i].quantity * boughtTickets[i].price;
        summary += boughtTickets[i].name + ' x' + boughtTickets[i].quantity + ' - ' + boughtTickets[i].price * boughtTickets[i].quantity + '€' + '<br>';
      }
  
      $("#invoice-summary").loadTemplate($("#summary"),
      {
        summary: summary,
        total: total + '€'
      });
    }
  }


  // $('#order, #crypto, #invoice').css({
  //   'opacity': '0.3',
  //   'cursor': 'default',
  //   'pointer-events': 'none'
  // });

  // $('#crypto-checkout, #invoice-checkout').css({
  //   'opacity': '0.3',
  //   'cursor': 'default',
  //   'pointer-events': 'none'
  // });

  $("#ticket-info").loadTemplate($("#template"),
  {
    name1: tickets[0].name,
    humanPrice1: tickets[0].humanPrice,
    time1: tickets[0].time,
    name2: tickets[1].name,
    humanPrice2: tickets[1].humanPrice,
    time2: tickets[1].time,
    // name3: tickets[2].name,
    // humanPrice3: tickets[2].humanPrice,
    // time3: tickets[2].time,
  });

  // MORAS OVO PROMINIT ZA DODATNE TICKETE

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  } 

  function isValid() {
    for(var i in tickets) {
      if(tickets[i].quantity > 0) {
        return true;
      }
    }

    return false;
  }

  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }

  function constructQueryString() {
    var query = '';

    for(var i in tickets) {
      if(tickets[i].quantity > 0) {
        query += tickets[i].slug;

        query += ',';
      }
    }

    query += '?';

    for(var i in tickets) {
      if(tickets[i].quantity > 0) {
        query += tickets[i].slug + '=' + tickets[i].quantity;

        query += '&';
      }
    }

    return query;
  }

  
  $('#order').click(function() {
    if(isValid()) {
      var queryString = constructQueryString();
    
      window.open('https://ti.to/shift-conference/shift-dev-2021/with/' + queryString);  //ubacit novi tito url
    }
  });
  

  $('#email').on('keyup change keydown', function() {
    if(validateEmail($('#email').val()) && $('#email').val().length > 0) {
      $('#crypto-checkout').css({
        'opacity': '1',
        'cursor': 'pointer',
        'pointer-events': 'auto'
      });
    } else {
      $('#crypto-checkout').css({
        'opacity': '0.3',
        'cursor': 'default',
        'pointer-events': 'none'
      });
    }
  });

  $('#invoice-email, #company, #address, #vat').on('keyup change keydown', function() {
    if(validateEmail($('#invoice-email').val()) && $('#invoice-email').val().length > 0 && $('#vat').val().length > 0 && $('#company').val().length && $('#address').val().length) {
      $('#invoice-checkout').css({
        'opacity': '1',
        'cursor': 'pointer',
        'pointer-events': 'auto'
      });
    } else {
      $('#invoice-checkout').css({
        'opacity': '0.3',
        'cursor': 'default',
        'pointer-events': 'none'
      });
    }
  });

  $('select').change(function() {
    var id = $(this).attr('id');
    var quantity = $(this).val();
    var ticket = tickets.find(ticket => ticket.id === id);

    for (var i in tickets) {
      if (tickets[i].id == id) {
         tickets[i].quantity = quantity;
         break;
      }
    }

    if(isValid()) {
      $('#order, #crypto, #invoice').css({
        'opacity': '1',
        'cursor': 'pointer',
        'pointer-events': 'auto'
      });
    } else {
      $('#order, #crypto, #invoice').css({
        'opacity': '0.3',
        'cursor': 'default',
        'pointer-events': 'none'
      });
    }
  });

  $('#crypto-checkout').click(function(e) {
    e.preventDefault();
    $('.crypto__title, .summary__title, #crypto-summary, .form__title, form').css('display', 'none');
    $('.lds-ring').css('display', 'table');

    setTimeout(function() {
      $('.lds-ring').css('display', 'none');
      $('.currencies__title').css('display', 'block');
      $('#crypto-currencies').css('display', 'block');  
    }, 500)
  });

  $('#invoice-checkout').click(function(e) {
    e.preventDefault();
    $('.crypto__title, .summary__title, #invoice-summary, .form__title, form').css('display', 'none');
    $('.lds-ring').css('display', 'table');

    invoiceEmail = $('#invoice-email').val();
    company = $('#company').val();
    address = $('#address').val();
    vat = $('#vat').val();

    randomNumber = Math.floor(Math.random() * 10000);

    apiRequest.post('https://crypto-payment.shiftconf.co/invoice-email/Shift-Dev/2021', { email: invoiceEmail, company, address, vat, boughtTickets, randomNumber });

    $('.invoice-container__code').text('INT/' + randomNumber);
    $('.invoice-container__buyer-title').text(company);
    $('.invoice-container__buyer-address').text(address);
    $('.invoice-container__buyer-vat').text(vat);

    var subtotalAmount = 0;

    boughtTickets.map(function(ticket) {
      subtotalAmount += (ticket.price / 1.25) * ticket.quantity
    });

    var vatAmount = subtotalAmount * 0.25;
    var totalAmount = subtotalAmount + vatAmount;

    $('.invoice-container__subtotal').text(' SUBTOTAL: ' + subtotalAmount + ' EUR / ' + subtotalAmount * 7.4 + ' HRK');
    $('.invoice-container__vat-basis').text('VAT (25%): ' + vatAmount + ' EUR / ' + vatAmount * 7.4 + ' HRK');
    $('.invoice-container__total').text('   TOTAL: ' + totalAmount + ' EUR / ' + totalAmount * 7.4 + ' HRK');

    var items = "";

    boughtTickets.map(function(ticket) {
      items += "<tr><td style='border-bottom: 1px solid black'>" + ticket.name + "</td>";
      items += "<td style='border-bottom: 1px solid black; padding-top: 5px; padding-bottom: 5px;'>" + ticket.quantity + "</td>";
      items += "<td style='border-bottom: 1px solid black; padding-top: 5px; padding-bottom: 5px;'>qty</td>";
      items += "<td style='border-bottom: 1px solid black; padding-top: 5px; padding-bottom: 5px;'>" + ticket.price / 1.25 + " EUR</td>";
      items += "<td style='border-bottom: 1px solid black; padding-top: 5px; padding-bottom: 5px;'>" + ((ticket.price / 1.25) * 0,25) + " EUR</td>";
      items += "<td style='border-bottom: 1px solid black; padding-top: 5px; padding-bottom: 5px;'>" + ticket.quantity * ticket.price + " EUR</td></tr>";
    });

    console.log(items);

    $('#invoice-items').html(items);
    
    setTimeout(function() {
      $('.lds-ring').css('display', 'none');
      $('#invoice-container').css('display', 'block');
      $('#invoice-download').css('display', 'block');
      $('#back-to-home').css('display', 'block');
      $('.invoice-title').css('display', 'block');
      $('.invoice-description').css('display', 'block');
    }, 500)
  });

  
  $('#crypto').click(function() {
    window.open('http://dev.shiftconf.co/#/crypto-checkout?1=' + tickets[0].quantity + '&2=' + tickets[1].quantity); //ako ima jos ticketa treba ovo prominit
    // window.open('http://dev.shiftconf.co/#/crypto-checkout?1=' + tickets[0].quantity + '&2=' + tickets[1].quantity  + '&3=' + tickets[2].quantity);
  });

  $('#invoice').click(function() {
    window.open('http://dev.shiftconf.co/#/invoice-checkout?1=' + tickets[0].quantity + '&2=' + tickets[1].quantity); //ako ima jos ticketa treba ovo prominit
    // window.open('http://dev.shiftconf.co/#/invoice-checkout?1=' + tickets[0].quantity + '&2=' + tickets[1].quantity  + '&3=' + tickets[2].quantity);
  });


  $('#invoice-download').unbind('click').click(function () {  
    apiRequest.post('https://crypto-payment.shiftconf.co/invoice-download/Shift-Dev/2021', { email: invoiceEmail, company, address, vat, boughtTickets, randomNumber })
      .then(response => response.blob())
      .then(blob => {
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = "test.pdf";
          document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
          a.click();
          a.remove();  //afterwards we remove the element again
      });
  });
});