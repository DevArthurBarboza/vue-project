class CustomerController {

    getProduct() {
        return JSON.parse({
            'sku': 'Camisa-Verde-AA1',
            'name': 'Camisa Verde',
            'price': 100.00,
            'created_at': '2025-03-22',
            'attributes': {
                'color': 'green'
            }
        })
    }

    getProducts() {
        return JSON.parse([{
            'sku': 'Camisa-Verde-AA1',
            'name': 'Camisa Verde',
            'price': 100.00,
            'created_at': '2025-03-22',
            'attributes': {
                'color': 'green'
            }
        },
        {
            'sku': 'Camisa-Azul-AB1',
            'name': 'Camisa Azul',
            'price': 100.00,
            'created_at': '2024-03-22',
            'attributes': {
                'color': 'blue'
            }
        },
        {
            'sku': 'Camisa-Roxa-CA3',
            'name': 'Camisa Roxa',
            'price': 100.00,
            'created_at': '2025-01-22',
            'attributes': {
                'color': 'purple'
            }
        }
        ]);
    }

}