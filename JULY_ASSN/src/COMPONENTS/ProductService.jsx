export const ProductService = {
    getProductsData() {
        return [           
            {
                id: '1027',
                code: 'acvx872gc',
                name: 'rex',
                description: 'Product Description',
                image: 'https://www.svgrepo.com/show/217771/shopping-logo.svg',
                price: 89,
                category: 'Electronics',
                quantity: 35,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1027-0',
                        productCode: 'acvx872gc',
                        date: '2020-01-29',
                        amount: 89,
                        quantity: 1,
                        customer: 'Veronika Inouye',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1027-1',
                        productCode: 'acvx872gc',
                        date: '2020-06-11',
                        amount: 89,
                        quantity: 1,
                        customer: 'Willard Kolmetz',
                        status: 'DELIVERED'
                    }
                ]
            },
            
           
        ],
        [           
            {
                id: '1027',
                code: 'acvx872gc',
                name: 'rex',
                description: 'Product Description',
                image: 'https://www.svgrepo.com/show/217771/shopping-logo.svg',
                price: 89,
                category: 'Electronics',
                quantity: 35,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1027-0',
                        productCode: 'acvx872gc',
                        date: '2020-01-29',
                        amount: 89,
                        quantity: 1,
                        customer: 'Veronika Inouye',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1027-1',
                        productCode: 'acvx872gc',
                        date: '2020-06-11',
                        amount: 89,
                        quantity: 1,
                        customer: 'Willard Kolmetz',
                        status: 'DELIVERED'
                    }
                ]
            },
            
           
        ]
        [           
            {
                id: '1027',
                code: 'acvx872gc',
                name: 'rex',
                description: 'Product Description',
                image: 'https://www.svgrepo.com/show/217771/shopping-logo.svg',
                price: 89,
                category: 'Electronics',
                quantity: 35,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1027-0',
                        productCode: 'acvx872gc',
                        date: '2020-01-29',
                        amount: 89,
                        quantity: 1,
                        customer: 'Veronika Inouye',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1027-1',
                        productCode: 'acvx872gc',
                        date: '2020-06-11',
                        amount: 89,
                        quantity: 1,
                        customer: 'Willard Kolmetz',
                        status: 'DELIVERED'
                    }
                ]
            },
            
           
        ]
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};


