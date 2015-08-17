// See: https://atmospherejs.com/ongoworks/security
// Clients may insert posts only if a user is logged in
Posts.permit('insert').ifLoggedIn().apply();