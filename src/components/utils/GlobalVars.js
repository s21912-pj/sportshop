import './../utils/Base64Images'
global.base64 = "";
global.disablebutton = true;
global.count = 0;
global.message = 'Still loading...'

global.Categories = [
    { key: 1, value: 'Sports' },
    { key: 2, value: 'Man' },
    { key: 3, value: 'Woman' },
    { key: 4, value: 'Kids' },
]


global.product_types_sports=[]

global.product_types_woman = [
    {id: 1, name: 'T-Shirt'},
    {id: 2, name: 'Long Sleeve'},
    {id: 3, name: 'Sport Bra'},
    {id: 4, name: 'Hoodie'},
    {id: 5, name: 'Shoes'},
    {id: 6, name: 'Pants'},
    {id: 7, name: 'Shorts'},
    {id: 8, name: 'Leggins'}
]

global.product_types_man = [
    {id: 1, name: 'T-Shirt'},
    {id: 2, name: 'Long Sleeve'},
    {id: 3, name: 'Hoodie'},
    {id: 4, name: 'Shoes'},
    {id: 5, name: 'Pants'},
    {id: 6, name: 'Shorts'},
    {id: 7, name: 'Leggins'}
]

global.product_types_kids = [
    {id: 1, name: 'T-Shirt'},
    {id: 2, name: 'Long Sleeve'},
    {id: 3, name: 'Hoodie'},
    {id: 4, name: 'Shoes'},
    {id: 5, name: 'Pants'},
    {id: 6, name: 'Shorts'},
    {id: 7, name: 'Leggins'},
    {id: 8, name: 'Sport Toys'}
]

global.products = [
    {id:1, title: 'Puma Cotton T-Shirt', image: global.womansport_tshirt, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis posuere elit, eu maximus erat. Proin quis lorem iaculis, posuere.', price: 49.99, quantity: 50, category: 3, material: 1, brand:2, product_type: 1, size: ['XS','S','M','L','XL'] },
    {id:2, title: 'Reebok Spandex Long Sleeve', image: global.woman_longsleev, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis posuere elit, eu maximus erat. Proin quis lorem iaculis, posuere.', price: 80.00, quantity: 50, category: 3, material: 5, brand:3,product_type: 2,size: ['XS','S','M','L','XL'] },
    {id:3, title: 'Nike Nylon T-Shirt', image: global.woman_whitelongsleev, description: 'Description 2 Bla bla bla XXs', price: 51.22, quantity: 50, category: 3 ,material: 2, brand:1,product_type: 1, size: ['XS','S','M','L','XL']},
    {id:4, title: 'Columbia Shorts Polyester', image: global.shorts_grey, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis posuere elit, eu maximus erat. Proin quis lorem iaculis, posuere.', price: 45, quantity: 50, category: 3,material:3, brand:6,product_type: 7,size: ['XS','S','M','L','XL'] },
    {id:5, title: 'Nike Slim Pants Cotton', image: global.slim_pants, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis posuere elit, eu maximus erat. Proin quis lorem iaculis, posuere.', price: 21.99, quantity: 50, category: 3, material: 1, brand:1,product_type: 6, size: ['XS','S','M','L','XL','XXL']  },
    {id:6, title: 'Puma Leggins Microfiber', image: global.legins, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus eu lorem ultricies laoreet. Suspendisse suscipit nisl ornare, faucibus.', price: 33.0, quantity: 50, category: 3,material: 4, brand:2,product_type: 8,size: ['XS','S','M','L','XL']  },
    {id:7, title: 'Reebok Strappy Bra Nylon', image: global.strappy_bra, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus eu lorem ultricies laoreet. Suspendisse suscipit nisl ornare, faucibus.', price: 75.99, quantity: 50, category: 3,material: 2,brand:3,product_type: 3,size: ['XS','S','L','XL','XXL'] },
    {id:8, title: 'Nike 3 Shoes Spandex', image: global.shoes, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus eu lorem ultricies laoreet. Suspendisse suscipit nisl ornare, faucibus.', price: 110.99, quantity: 50, category: 3,material: 5,brand:1,product_type: 5, size:[]},
    {id:9, title: 'Under Armour Hoodie Cotton', image: global.hoodie, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus eu lorem ultricies laoreet. Suspendisse suscipit nisl ornare, faucibus.', price: 150.99, quantity: 50, category:3,material: 1,brand:5,product_type: 4,size: ['XL','XXL'] },
    {id:10, title: 'Nike Nylon T-Shirt', image: global.man_sport_tshirt, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus eu lorem ultricies laoreet. Suspendisse suscipit nisl ornare, faucibus.', price: 30.99, quantity: 50, category: 2,material: 4,brand:1,product_type: 1,size: ['XS','S','M','L','XL','XXL'] },
    {id:11,title: 'Columbia Nylon Long Sleeve', image: global.man_longsleeve, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus eu lorem ultricies laoreet. Suspendisse suscipit nisl ornare, faucibus.', price: 120.99, quantity: 50, category: 2,material: 3,brand: 6,product_type: 2,size: ['XS','S','M','L','XL','XXL']  },
    {id:12, title: 'Reebok Microfiber Hoodie', image: global.man_hoodie, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus eu lorem ultricies laoreet. Suspendisse suscipit nisl ornare, faucibus.', price: 180.99, quantity: 50, category: 2,material: 4,brand:3,product_type: 3,size: ['XS','S','M','L','XL','XXL']},
    {id:13, title: 'Puma Polyester Shorts', image: global.man_shorts, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus eu lorem ultricies laoreet. Suspendisse suscipit nisl ornare, faucibus.', price: 20.00, quantity: 50, category: 2,material: 3,brand:2,product_type: 6,size: ['XS','S','M','L','XL','XXL'] },
    {id:14, title: 'Adidas Nylon Shoes', image: global.man_shoes, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus eu lorem ultricies laoreet. Suspendisse suscipit nisl ornare, faucibus.', price: 150.00, quantity: 50, category: 2,material: 2,brand:4,product_type: 4,size: [] },
    {id:15, title: 'Adidas Sport Leggins Microfiber', image: global.man_leggins, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus eu lorem ultricies laoreet. Suspendisse suscipit nisl ornare, faucibus.', price: 80.00, quantity: 50, category: 2,material: 4,brand:4,product_type: 7,size: ['XS','S','M','L','XL','XXL'] },
    {id:16, title: 'Under Armour Sport Pants Cotton', image: global.man_pants, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tellus eu lorem ultricies laoreet. Suspendisse suscipit nisl ornare, faucibus.', price: 199.99, quantity: 50, category: 2,material: 1,brand:5,product_type: 5,size: ['XS','S','M','L','XL','XXL'] },
    {id:17, title: 'Nike Cotton T-Shirt', image: global.man_cotton_tshirt, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada odio vel ornare maximus. In blandit lacinia tincidunt. Nullam viverra.', price: 60.00, quantity: 50, category: 2,material: 1,brand:1,product_type: 1,size: ['L','XL','XXL'] },
    {id:18, title: 'Nike T-Shirt Cotton', image: global.kid_tshirt, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada odio vel ornare maximus. In blandit lacinia tincidunt. Nullam viverra.', price: 25, quantity: 50, category: 4,material: 1,brand:1,product_type: 1,size: ['XS','S','M','L'] },
    {id:19, title: 'Puma Hoodie Nylon', image: global.kid_hoodie, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada odio vel ornare maximus. In blandit lacinia tincidunt. Nullam viverra.', price: 11, quantity: 50, category: 4,material: 2,brand:2,product_type: 3,size: ['XS','S','M','L'] },
    {id:20, title: 'Columbia Shoes Polyester', image: global.kid_shoes, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada odio vel ornare maximus. In blandit lacinia tincidunt. Nullam viverra.', price: 11, quantity: 50, category: 4,material: 3,brand:6,product_type: 4,size: [] },
];



global.updateGlobal=()=>{
    global.womanproducts = global.products.filter(x=>x.category===3);
    return global.products.filter(x=>x.category===3);
}


global.womanproducts = global.products.filter(x=>x.category===3);
global.manproducts = global.products.filter(x=>x.category===2);
global.kidsproducts = global.products.filter(x=>x.category===4);

global.sportwearMaterialType = [
    {id: 1,name: 'Cotton'},
    {id: 2,name: 'Nylon'},
    {id: 3,name: 'Polyester'},
    {id: 4,name: 'Microfiber'},
    {id: 5,name: 'Spandex'}
]

global.brand=[
    {id:1,name: 'Nike'},
    {id:2,name: 'Puma'},
    {id:3,name: 'Reebok'},
    {id:4,name: 'Adidas'},
    {id:5,name: 'Under Armour'},
    {id:6,name: 'Columbia'}
]
global.allSizes = ['XS','S','M','L','XL','XXL']

global.shopcart=[]


global.backup_status = false;
global.backup=[]





