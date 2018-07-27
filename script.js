function myFirstApp(name, age) {

	//alert('Привет, меня зовут ' + name + ' и это моя первая программа!');

	function showSkills() {
		let skills = ['html', 'css', 'jquery', 'sass', 'less', 'gulp', 'photoshop',  'bootstrap', 'flexbox', 'jekyll'];
		for (let i = 0; i < skills.length; i++) {
			// Я владею html <br>
			document.write('Я владею ' + '<strong>' + skills[i] + '</strong>' + '<br>');
		}
	}
	showSkills();

	function checkAge() {
		if (age > 18) {
			// Вывести сообщение
			document.write('<br> Вы указали, что Ваш возраст — ' + age +  '. Поздравляю! Вы совершеннолетний :)');
		} else {
			document.write('<br> Вы указали, что Ваш возраст — ' + age +  '. Вы еще очень молоды, наслаждайтесь моментом :)');
		}
	}
	checkAge();

	function calcPow(num) {
		document.write('<br><br> Вы ввели число — ' + num + '<br>');
		document.write(num + ' ² ' + ' = ' + num * num + '<br>');	
		document.write(num + ' * ' + num + ' = ' + num * num);					
	}
	calcPow(8);

}

myFirstApp('Vitalii', 24);