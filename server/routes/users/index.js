/* eslint-disable new-cap */
/* eslint-disable camelcase */
import { Router } from 'express';
import fetch from 'node-fetch';

import API from '@API';
import APIBE from '@APIBE';

const router = Router();

const converter = ({ first_name, last_name, ...user }) => ({
	firstName: first_name,
	lastName: last_name,
	...user
});

router.get(API.USERS, async (req, res) => {
	const response = await fetch(APIBE.USERS);
	const { data } = await response.json();
	res.status(200).send(data.map(converter));
});

export default router;
