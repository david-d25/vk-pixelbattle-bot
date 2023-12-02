export function hexToRgb(hex: string) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    }: null;
}

const colorNames: {[key: string]: string } = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dodgerblue": "#1e90ff",
    "feldspar": "#d19275",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgrey": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslateblue": "#8470ff",
    "lightslategray": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370d8",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#d87093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "violetred": "#d02090",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32",

    "алисовый": "#f0f8ff",
    "античныйбелый": "#faebd7",
    "античнобелый": "#faebd7",
    "аква": "#00ffff",
    "аквамарин": "#7fffd4",
    "аквамариновый": "#7fffd4",
    "лазурный": "#f0ffff",
    "бежевый": "#f5f5dc",
    "бисквитный": "#ffe4c4",
    "черный": "#000000",
    "миндальный": "#ffebcd",
    "синий": "#0000ff",
    "синефиолетовый": "#8a2be2",
    "коричневый": "#a52a2a",
    "деревянный": "#deb887",
    "кадетскосиний": "#5f9ea0",
    "шартрез": "#7fff00",
    "шоколадн": "#d2691e",
    "шоколадный": "#d2691e",
    "коралловый": "#ff7f50",
    "васильковый": "#6495ed",
    "кукурузный": "#fff8dc",
    "малиновый": "#dc143c",
    "циан": "#00ffff",
    "голубой": "#00ffff",
    "темносиний": "#00008b",
    "темноголубой": "#008b8b",
    "темнозолотой": "#b8860b",
    "темносерый": "#a9a9a9",
    "темнозеленый": "#006400",
    "темныйхаки": "#bdb76b",
    "темномаджента": "#8b008b",
    "темномаджентовый": "#8b008b",
    "темнопурпурный": "#8b008b",
    "темнооливковый": "#556b2f",
    "темнооранжевый": "#ff8c00",
    "темнаяорхидея": "#9932cc",
    "темноорхидеевый": "#9932cc",
    "темнокрасный": "#8b0000",
    "темнолососевый": "#e9967a",
    "темноморской": "#8fbc8f",
    "темносланцевосиний": "#483d8b",
    "темносланцевосерый": "#2f4f4f",
    "темнобирюзовый": "#00ced1",
    "темнофиолетовый": "#9400d3",
    "насыщенно-розовый": "#ff1493",
    "глубокийнебесный": "#00bfff",
    "тусклосерый": "#696969",
    "яркосиний": "#1e90ff",
    "полевойшпат": "#d19275",
    "кирпичный": "#b22222",
    "цветочнобелый": "#fffaf0",
    "лесной": "#228b22",
    "фуксия": "#ff00ff",
    "гейнсборо": "#dcdcdc",
    "призрачнобелый": "#f8f8ff",
    "золотой": "#ffd700",
    "золотистый": "#daa520",
    "серый": "#808080",
    "зеленый": "#008000",
    "зеленожелтый": "#adff2f",
    "дынный": "#f0fff0",
    "яркорозовый": "#ff69b4",
    "индийскокрасный": "#cd5c5c",
    "индиго": "#4b0082",
    "слоновокостный": "#fffff0",
    "хаки": "#f0e68c",
    "лавандовый": "#e6e6fa",
    "лавандоворумянцевый": "#fff0f5",
    "газонный": "#7cfc00",
    "лимонношифоновый": "#fffacd",
    "светлосиний": "#add8e6",
    "светлокоралловый": "#f08080",
    "светлоциан": "#e0ffff",
    "светлозолотой": "#fafad2",
    "светлосерый": "#d3d3d3",
    "светлозеленый": "#90ee90",
    "светлорозовый": "#ffb6c1",
    "светлолососевый": "#ffa07a",
    "светломорской": "#20b2aa",
    "светлонебесный": "#87cefa",
    "светлосинесланцевый": "#8470ff",
    "светлосеросланцевый": "#778899",
    "светлостальной": "#b0c4de",
    "светложелтый": "#ffffe0",
    "лаймовый": "#00ff00",
    "лаймовожелтый": "#32cd32",
    "льняной": "#faf0e6",
    "маджента": "#ff00ff",
    "мажента": "#ff00ff",
    "темнобордовый": "#800000",
    "среднеаквамариновый": "#66cdaa",
    "среднесиний": "#0000cd",
    "среднеорхидеевый": "#ba55d3",
    "среднефиолетовый": "#9370d8",
    "среднеморской": "#3cb371",
    "среднесланцевоголубой": "#7b68ee",
    "средневесенний": "#00fa9a",
    "среднебирюзовый": "#48d1cc",
    "среднефиолетовокрасный": "#c71585",
    "полуночный": "#191970",
    "мятнокремовый": "#f5fffa",
    "туманнорозовый": "#ffe4e1",
    "мокасиновый": "#ffe4b5",
    "навахобелый": "#ffdead",
    "морской": "#000080",
    "старокружевый": "#fdf5e6",
    "оливковый": "#808000",
    "тусклооливковый": "#6b8e23",
    "оранжевый": "#ffa500",
    "оранжевокрасный": "#ff4500",
    "орхидеевый": "#da70d6",
    "бледнозолотой": "#eee8aa",
    "бледнозеленый": "#98fb98",
    "бледнобирюзовый": "#afeeee",
    "бледнофиолетовокрасный": "#d87093",
    "папайевый": "#ffefd5",
    "персиковый": "#ffdab9",
    "перу": "#cd853f",
    "розовый": "#ffc0cb",
    "сливовый": "#dda0dd",
    "пудровый": "#b0e0e6",
    "пурпурный": "#800080",
    "красный": "#ff0000",
    "розоватокоричневый": "#bc8f8f",
    "королевскойсиний": "#4169e1",
    "седлокоричневый": "#8b4513",
    "лососевый": "#fa8072",
    "песочный": "#f4a460",
    "морскозеленый": "#2e8b57",
    "раковинный": "#fff5ee",
    "сиеновый": "#a0522d",
    "серебряный": "#c0c0c0",
    "небесный": "#87ceeb",
    "сланцевосиний": "#6a5acd",
    "сленцевосерый": "#708090",
    "снежный": "#fffafa",
    "весеннезеленый": "#00ff7f",
    "стальносиний": "#4682b4",
    "загар": "#d2b48c",
    "чирок": "#008080",
    "чертополох": "#d8bfd8",
    "томатный": "#ff6347",
    "бирюзовый": "#40e0d0",
    "фиолетовый": "#ee82ee",
    "фиолетовокрасный": "#d02090",
    "пшеничный": "#f5deb3",
    "белый": "#ffffff",
    "дымный": "#f5f5f5",
    "желтый": "#ffff00",
    "желтозеленый": "#9acd32",
    "лиловый": "#822680",
    "лимонный": "#cfef65",
    "лимоновый": "#cfef65",
    "лимон": "#cfef65",
}

export function resolveColorToRgb(color: string): {r: number, g: number, b: number} | null {
    color = color.replaceAll('ё', 'е').replaceAll('-', '').replaceAll(' ', '').toLowerCase();
    if (colorNames[color])
        color = colorNames[color];
    if (color.startsWith('#'))
        return hexToRgb(color);
    return null;
}