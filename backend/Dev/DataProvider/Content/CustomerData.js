class CustomerData {

    getCustomer() {
        return JSON.parse({
            'email': 'Camisa-Verde-AA1',
            'name': 'Camisa Verde',
            'birth_date': 100.00,
            'created_at': '2025-03-22',
            'type': 'pf'
        })
    }

    getCustomers() {
        return JSON.parse([{
            'email': 'john_doe@gmail.com',
            'name': 'John Doe',
            'birth_date': '2003-04-16',
            'created_at': '2025-03-22',
            'type': 'pf'
        },
        {
            'email': 'willy@walker.com',
            'name': 'Willy Walker',
            'birth_date': 100.00,
            'created_at': '2025-03-22',
            'type': 'pj'
        },
        {
            'email': 'Camisa-Verde-AA1',
            'name': 'Camisa Verde',
            'birth_date': 100.00,
            'created_at': '2025-03-22',
            'type': 'pf'
        }
        ]);
    }

}