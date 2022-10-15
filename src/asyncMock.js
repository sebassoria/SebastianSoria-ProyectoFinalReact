
const products = [
    {
        id: '1',
        name:'Vino Angelica Zapata Malbec Alta X 750cc',
        img: '/img/Angelicazapata.webp',
        stock:14,
        price:7046,
        varietal:'Malvec',
        description:'Vino Angelica Zapata Malbec Alta X 750cc',
        category:'tinto',
    },
    {
        id: '2',
        name:'Vino Dv Catena Cabernet Malbec X 750cc.',
        img: '/img/Catenazapata.webp',
        stock:3,
        price:2326,
        varietal:'Cabernet',
        description:'Vino Dv Catena Cabernet Malbec X 750cc.',
        category:'tinto',
    },
    {
        id: '3',
        name:'Vino Nicolas Catena Zapata Blend X750cc',
        img: '/img/Nicolaszapata.webp',
        stock:8,
        price:17500,
        varietal:'Blend',
        description:'Vino Nicolas Catena Zapata Blend X750cc',
        category:'tinto',
    },
    {
        id: '4',
        name:'Vino Alma Gemela Mourvedre Rose 2019 ',
        img: '/img/Almagemela.webp',
        stock:2,
        price:3499,
        varietal:'Mourvedre',
        description:'Vino Alma Gemela Mourvedre Rose 2019 - Onofri Wines',
        category:'rosado',
    },
    {
        id: '5',
        name:'Vino El Gran Enemigo Corte Cabernet Franc Malbec 750cc',
        img: '/img/Enemigo.webp',
        stock:10,
        price:8641,
        varietal:'Cabernet Franc',
        description:'Vino El Gran Enemigo Corte Cabernet Franc Malbec 750cc',
        category:'tinto',
    },
    {
        id: '6',
        name:'Flaneur Sv Orange Chardonnay Magnum X1,5 Lts',
        img: '/img/Orange.webp',
        stock:6,
        price:6199,
        varietal:'Blanco',
        description:'Flaneur Sv Orange Chardonnay Magnum X1,5 Litros Vino Naranjo',
        category:'blanco',
    },
    {
        id: '7',
        name:'Vino Mascota Unánime Gran Vino Tinto',
        img: '/img/Unanime.webp',
        stock:4,
        price:5390,
        varietal:'Tinto',
        description:'Vino Mascota Unánime Gran Vino Tinto',
        category:'tinto',
    },
    {
        id: '8',
        name:'Vino Rutini Malbec 750cc Full',
        img: '/img/Rutini.webp',
        stock:10,
        price:5700,
        varietal:'Malbec',
        description:'Vino Rutini Malbec 750cc Full',
        category:'tinto',
    },
    {
        id: '9',
        name:'Vino Trapiche Gran Medalla Chardonnay X750cc',
        img: '/img/Granmedalla.webp',
        stock:11,
        price:6373,
        varietal:'Chardonnay',
        description:'Vino Trapiche Gran Medalla Chardonnay X750cc',
        category:'blanco',
    },
    {
        id: '10',
        name:'Vino Gran Enemigo El Cepillo Cab Franc 97+ Ptos Parker',
        img: '/img/Granenemigo.webp',
        stock:6,
        price:8999,
        varietal:'Cabernet Franc',
        description:'Vino Gran Enemigo El Cepillo Cab Franc 97+ Ptos Parker',
        category:'tinto',
    },
    {
        id: '11',
        name:'Vino tinto Malbec Dante Reserva bodega D. Robino 750 ml',
        img: '/img/Dante.webp',
        stock:13,
        price:1600,
        varietal:'Malbec',
        description:'Vino tinto Malbec Dante Reserva bodega D. Robino 750 ml',
        category:'tinto',
    },
    {
        id: '12',
        name:'Zuccardi Fosil Chardonnay',
        img: '/img/Fosil.webp',
        stock:3,
        price:15600,
        varietal:'Chardonnay',
        description:'Zuccardi Fosil Chardonnay - Vino Blanco De Guarda San Pablo',
        category:'blanco',
    },
    {
        id: '13',
        name:'Vino Zorzal Terroir Único Pinot Noir Rosé Jpmichelini',
        img: '/img/Zorzal.webp',
        stock:8,
        price:1299,
        varietal:'Pinot noir',
        description:'Vino Zorzal Terroir Único Pinot Noir Rosé Jpmichelini',
        category:'rosado',
    },
    {
        id: '14',
        name:'Vino Blanchard & Lurton Grand Vin Corte X 750cc',
        img: '/img/Blanchard.webp',
        stock:4,
        price:3000,
        varietal:'blend',
        description:'Vino Blanchard & Lurton Grand Vin Corte X 750cc',
        category:'blanco',
    },
    {
        id: '15',
        name:'Vino Chacra Nacha Pinot Noir Rosé 750ml.',
        img: '/img/Nacha.webp',
        stock:6,
        price:5999,
        varietal:'Pinot noir',
        description:'Vino Chacra Nacha Pinot Noir Rosé 750ml. Bodega Chacra',
        category:'rosado',
    },
]

const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(products)
        },2000)
    })

}
export default getProducts


export const getItem = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(products.find(element=>element.id===id))
        },2000)
})
}

export const getCategory = (categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(products.filter(categ=>categ.category===categoryId))
     
        },2000)
})
}


