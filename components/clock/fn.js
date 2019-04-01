const pad = n => (n < 10 ? `0${n}` : n);

export const format = t =>
	`${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;
