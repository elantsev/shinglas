import { DELETE_ITEM } from "./../actions/orderDataActions";

const initialState = [
  {
    id: 1,
    img: "prog/img/1.png",
    name: {
      name: "SHINGLAS многослойная черепица, Ранчо, Коричневый, 2 м2",
      href: "#"
    },
    quantity: { quantity: 78, unit: "уп." },
    price: 589
  },
  {
    id: 2,
    img: "prog/img/2.png",
    name: {
      name: "Черепица конька/карниза  (уп. 12 п.м / 20 п.м)",
      href: "#"
    },
    quantity: { quantity: 3, unit: "уп." },
    price: 4988.0
  },
  {
    id: 3,
    img: "prog/img/3.png",
    name: { name: "Планка карниза, 2 м", href: "#" },
    quantity: { quantity: 15, unit: "шт." },
    price: 595
  },
  {
    id: 4,
    img: "prog/img/4.png",
    name: { name: "Планка ветровая, 2 м", href: "#" },
    quantity: { quantity: 10, unit: "шт." },
    price: 780
  },
  {
    id: 5,
    img: "prog/img/5.png",
    name: { name: "Ковер подкладочный, рулон 15 м2", href: "#" },
    quantity: { quantity: 11, unit: "шт." },
    price: 595
  },
  {
    id: 6,
    img: "prog/img/6.png",
    name: { name: "Лист OSB, 2500×1250×9 мм", href: "#" },
    quantity: { quantity: 54, unit: "шт." },
    price: 595
  },
  {
    id: 7,
    img: "prog/img/7.png",
    name: { name: "Аэратор коньковый AIRIDGE FELT", href: "#" },
    quantity: { quantity: 26, unit: "шт." },
    price: 595
  },
  {
    id: 8,
    img: "prog/img/8.png",
    name: { name: "Вентилятор скатный Huopa KTV", href: "#" },
    quantity: { quantity: 3, unit: "уп." },
    price: 1050
  },
  {
    id: 9,
    img: "prog/img/9.png",
    name: { name: "Мастика битумная, 3 л", href: "#" },
    quantity: { quantity: 5, unit: "шт." },
    price: 2380
  },
  {
    id: 10,
    img: "prog/img/10.png",
    name: { name: "Гвозди кровельные ершеные (упаковка 5 кг)", href: "#" },
    quantity: { quantity: 4, unit: "уп." },
    price: 750
  }
];

export function orderData(state = initialState, action) {
  switch (action.type) {
    case DELETE_ITEM:
      return { ...state };

    default:
      return state;
  }
}
