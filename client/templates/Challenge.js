/*global FB*/
Template.Challenge.events ({
	'click .button__challenge': function() {
		var currentUrl = Router.current().url;
		if (currentUrl.indexOf('http') === -1) {
			currentUrl = Meteor.absoluteUrl(currentUrl.substring(1)); //substring to remove the initial /
		}

		console.log('FB URL to share:', currentUrl);

		FB.ui({
			method: 'feed',
			//href: currentUrl, //share from current URL of the app
			link: currentUrl,
			caption: 'Reference Documentation',
			description: 'Lorem ipsum dolor sit amet, consectetur arum aliquam reprehenderit laudantium disti. Dicta.'
		}, function(response) {
			if (response && response.post_id) {
				console.log('Post was published.');
			} else {
				console.log('Post was not published.');
			}
		});
	},


});

Template.Challenge.helpers ({
	'inMapMaster': function() {
		var isHidden = '';
		if (Session.get('showGame')) {
			isHidden= 'hidden-smartphone';
		}
		return isHidden;
	}
});