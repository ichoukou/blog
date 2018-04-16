module.exports = model = {
	grant:function(){return '23eef354fr4';},
	generateAuthorizationCode:function(client, user, scope, [callback]){},
	getAuthorizationCode:function(client_id,state,redirect_uri,type,callback){},
	saveAuthorizationCode:function(code, client, user, [callback]){},
	revokeAuthorizationCode:function(code, [callback]){},
	generateAccessToken:function(client, user, scope, [callback]){},
	getAccessToken: function(bearerToken, callback){},
	generateRefreshToken:function(client, user, scope, [callback]){},
	getClient: function(clientId, clientSecret, callback){},
	grantTypeAllowed: function(clientId, grantType, callback){},
	saveToken:function(token, client, user, [callback]){},
	saveAccessToken: function(accessToken, clientId, expires, user, callback){},
	getAuthCode: function(authCode, callback){},
	saveAuthCode: function(authCode, clientId, expires, user, callback){},
	getUser: function(username, password, callback){},
	saveRefreshToken: function(refreshToken, clientId, expires, user, callback){},
	revokeToken:function(token, [callback]){},
	getRefreshToken: function(refreshToken, callback){},
	revokeRefreshToken: function(refreshToken, callback){},
	extendedGrant: function(grantType, req, callback){},
	getUserFromClient: function(clientId, clientSecret, callback){},
	generateToken: function(type, req, callback){}
};