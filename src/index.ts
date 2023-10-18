export const getPrice = (enterDate: Date, exitDate: Date) => {
	const diffInMs = exitDate.getTime() - enterDate.getTime();
	const diffInHours = diffInMs / (1000 * 60 * 60);
	return Math.ceil(diffInHours);
};
