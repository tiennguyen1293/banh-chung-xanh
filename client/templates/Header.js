/**
 * @NauStudio
 * Thang Kieu
 */
Template.Header.helpers({
	isActive: function() {
		var isActive = '';

		if (Session.get('show-menu')) {
			isActive = 'active';
		}

		return isActive;
	}
});

Template.Header.events({
	'click .header__menu-btn': function() {
		Session.set('show-menu', !Session.get('show-menu'));
	}
});