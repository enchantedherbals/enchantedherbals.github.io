function initMap() {
	var mapcenter = {lat: 19.625671, lng: -155.473567};
	var makuu = {lat: 19.538189, lng: -154.972218};
	var uncle = {lat: 19.360985, lng: -154.970829};
	var hilo = {lat: 19.723434, lng: -155.084772};
	var kona = {lat: 19.640116, lng: -155.996282};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: mapcenter,
		fullscreenControl: false,
		streetViewControl: false,
		mapTypeControl: false,

	});
	var logo_sm = {
		url: 'img/logo_sm.png',
		//size: new google.maps.Size(20, 32),
		origin: new google.maps.Point(0, 0)//,
		//anchor: new google.maps.Point(0, 32)
	};

	var windowInfo = new google.maps.InfoWindow({
		maxWidth: 200
	});
	var markerMakuu = new google.maps.Marker({
		position: makuu,
		map: map,
		title: 'Maku\'u Farmers Market',
		animation: google.maps.Animation.DROP,
		icon: logo_sm
	});
	var markerUncle = new google.maps.Marker({
		position: uncle,
		map: map,
		title: 'Uncle Roberts Awa Market',
		animation: google.maps.Animation.DROP,
		icon: logo_sm
	});
	var markerHilo = new google.maps.Marker({
		position: hilo,
		map: map,
		title: 'Hilo Farmers Market',
		animation: google.maps.Animation.DROP,
		icon: logo_sm
	});
	var markerKona = new google.maps.Marker({
		position: kona,
		map: map,
		title: 'Kokua Kailua Village Stroll',
		animation: google.maps.Animation.DROP,
		icon: logo_sm
	});
	markerMakuu.addListener('click', function() {
		windowInfo.setContent('<div class="GMtitle">Maku\'u Farmers Market</div><div class="GMtext">Sundays: 8am-2pm</div>');
		windowInfo.open(map, markerMakuu);
	});
	markerUncle.addListener('click', function() {
		windowInfo.setContent('<div class="GMtitle">Uncle Robert\'s Awa Farmers Market</div><div class="GMtext">Wednesdays: 4pm-9pm</div>');
		windowInfo.open(map, markerUncle);
	});
	markerHilo.addListener('click', function() {
		windowInfo.setContent('<div class="GMtitle">Hilo Farmers Market</div><div class="GMtext">Saturdays: 8am-2pm</div>');
		windowInfo.open(map, markerHilo);
	});
	markerKona.addListener('click', function() {
		windowInfo.setContent('<div class="GMtitle">Kokua Kailua Village Stroll</div><div class="GMtext">2018 Stroll dates are: March 18, April 15, May 20, June 10, July 15, August 19, September 16, October 21, November 18, December 16.<br><br>1pm-6pm</div>');
		windowInfo.open(map, markerKona);
	});
}