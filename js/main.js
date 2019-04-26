$(document).ready(function() {

	$('.logo').delay(2000).show('fast').animate({'top': 0}, 600, 'easeOutBack');
	$('.fade1').delay(200).fadeIn(1000);
	$('.fade2').delay(600).fadeIn(1000);
	$('.fade3').delay(1000).fadeIn(1000);
	$('.fade4').delay(4000).fadeIn(1500);

	new cbpScroller(document.getElementById('cbp-so-scroller'));

	$('.button, .chevron').click(function(e){
		$('html,body').scrollTo(this.hash,this.hash);
		e.preventDefault();
	});

        $('form').submit(function() {
                var email = $('input[name=email]').attr('value');
                if (validateEmail(email)) {
                        $.post('//formspree.io/subscribe@' + 'secretpad.com', {domain: 'secretpad.ru', email: email}, function(response) {
				$('p.result').text(response.success ? "Спасибо, ожидайте хороших новостей!" : "Ошибка :(");
                        }, 'json');
                        $('button[name=send]').prop('disabled', true);
                } else {
			$('p.result').text('Пожалуйста, укажите правильный e-mail').effect("pulsate", { times:3 }, 1000);
                }
                return false;
        });

	function validateEmail(email) {
		// http://stackoverflow.com/a/46181/11236
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

});
