// форматирование: 2 знака после запятой, группирует по тысячам.

export const numberFormatter = number =>
  String(number.toFixed(2)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
