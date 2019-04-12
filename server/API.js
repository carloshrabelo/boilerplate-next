const developmentAPI = {
	USERS: 'https://reqres.in/api/users'
};

export default Object.keys(developmentAPI).reduce((obj, key) => {
	obj[key] = process.env[key] || developmentAPI[key];
	return obj;
}, {});
