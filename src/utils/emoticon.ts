export const negativeEmoticons = [
	'(`･ω･´)',
	'(´･ω･`)',
	'(*´･ω･`)',
	'(*`Д´)',
	'(  ﾟДﾟ)⊃旦',
] as const;

export function getRandomNegativeEmoticon() {
	// 被る確率を減らすために時間を用いてランダムに選択する
	return negativeEmoticons[new Date().getSeconds() % negativeEmoticons.length];
}
