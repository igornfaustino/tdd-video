export const getPrice = (enterDate: Date, exitDate: Date) => {
	const diffInMs = exitDate.getTime() - enterDate.getTime();
	const diffInHours = diffInMs / (1000 * 60 * 60);
	if (diffInHours > 5) return 10;
	return Math.ceil(diffInHours);
};
