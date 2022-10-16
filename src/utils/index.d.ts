type Enumerate<
	N extends number,
	R extends number[] = [],
> = R['length'] extends N ? R[number] : Enumerate<N, [R['length'], ...R]>;

type IntRange<F extends number, T extends number> = Exclude<
	Enumerate<T>,
	Enumerate<F>
>;
