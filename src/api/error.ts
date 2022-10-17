export function resolveAPIError(error: any) {
	if (error instanceof Response)
		return new Error(`HTTP Error (${error.status}):  ${error.statusText}`);

	if (error instanceof Error) return error;

	return Error('Unknown error');
}
