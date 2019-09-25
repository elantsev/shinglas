import { DELETE_ITEM, CHANGE_QUANTITY } from "../actions/orderDataActions";

const initialState = [
  {
    id: 1,
    img: "http://shinglas.epizy.com/static/img/1.png",
    name: {
      name: "SHINGLAS многослойная черепица, Ранчо, Коричневый, 2 м2",
      href: "#"
    },
    quantity: 78,
    quantityUnit: "уп.",
    price: 589
  },
  {
    id: 2,
    img: "http://shinglas.epizy.com/static/img/2.png",
    name: {
      name: "Черепица конька/карниза  (уп. 12 п.м / 20 п.м)",
      href: "#"
    },
    quantity: 3,
    quantityUnit: "уп.",
    price: 4988.0
  },
  {
    id: 3,
    img: "http://shinglas.epizy.com/static/img/3.png",
    name: { name: "Планка карниза, 2 м", href: "#" },
    quantity: 15,
    quantityUnit: "шт.",
    price: 595
  },
  {
    id: 4,
    img: "http://shinglas.epizy.com/static/img/4.png",
    name: { name: "Планка ветровая, 2 м", href: "#" },
    quantity: 10,
    quantityUnit: "шт.",
    price: 780
  },
  {
    id: 5,
    img: "http://shinglas.epizy.com/static/img/5.png",
    name: { name: "Ковер подкладочный, рулон 15 м2", href: "#" },
    quantity: 11,
    quantityUnit: "шт.",
    price: 595
  },
  {
    id: 6,
    img: "http://shinglas.epizy.com/static/img/6.png",
    name: { name: "Лист OSB, 2500×1250×9 мм", href: "#" },
    quantity: 54,
    quantityUnit: "шт.",
    price: 595
  },
  {
    id: 7,
    img: "http://shinglas.epizy.com/static/img/7.png",
    name: { name: "Аэратор коньковый AIRIDGE FELT", href: "#" },
    quantity: 26,
    quantityUnit: "шт.",
    price: 595
  },
  {
    id: 8,
    img: "http://shinglas.epizy.com/static/img/8.png",
    name: { name: "Вентилятор скатный Huopa KTV", href: "#" },
    quantity: 3,
    quantityUnit: "уп.",
    price: 1050
  },
  {
    id: 9,
    img: "http://shinglas.epizy.com/static/img/9.png",
    name: { name: "Мастика битумная, 3 л", href: "#" },
    quantity: 5,
    quantityUnit: "шт.",
    price: 2380
  },
  {
    id: 10,
    img: "http://shinglas.epizy.com/static/img/10.png",
    name: { name: "Гвозди кровельные ершеные (упаковка 5 кг)", href: "#" },
    quantity: 4,
    quantityUnit: "уп.",
    price: 750
  }
];

export function orderData(state = initialState, action) {
  switch (action.type) {
    case DELETE_ITEM: {
      let orderData = state.filter(item => item.id !== action.id);

      return [...orderData];
    }

    case CHANGE_QUANTITY: {
      let orderData = state.map(item => {
        if (item.id === action.id) {
          item.quantity = action.quantity;
        }
        return item;
      });

      return [...orderData];
    }

    default:
      return state;
  }
}
