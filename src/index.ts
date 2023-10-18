export const getPrice = (enterDate: Date, exitDate: Date) => {
	const diffInMs = exitDate.getTime() - enterDate.getTime();
	const diffInHours = convertMsToHours(diffInMs);
	if (diffInHours > 5) return 10;
	return Math.ceil(diffInHours);
};

const convertMsToHours = (ms: number) => {
	return ms / (1000 * 60 * 60);
};
