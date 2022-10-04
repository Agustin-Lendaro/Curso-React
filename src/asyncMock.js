const products = [
    { 
        id: '1', 
        name: 'Ejemplo llavero', 
        price: 200, 
        category: 'llavero', 
        img: "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg", 
        stock: 25, 
        description:'Llavero impreso en 3D'
    },
    { id: '2', name: 'Ejemplo muñeco', price: 1500, category: 'muñeco', src: "https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg", stock: 16, description:'Muñeco impreso en 3D'},
    { id: '3', name: 'Ejemplo otro', price: 1000, category: 'otros', img:"https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg", stock: 10, description:'Otras cosas impresas en 3D'}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}