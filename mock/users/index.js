import { name } from 'faker';

import be from './be';
import bff from './bff';

const generate = id => ({
	id,
	firstName: name.firstName(),
	lastName: name.lastName(),
	avatar: `https://placeimg.com/128/128/people/${id}`
});

const randomData = Array(10)
	.fill()
	.map((_, id) => generate(id));

export default bff;
export { be, randomData };
