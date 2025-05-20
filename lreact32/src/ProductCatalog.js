import React from 'react';
import './ProductCatalog.css';

const productsData = [
    { id: 1, name: 'Смартфон', price: 100, quantity: 5 },
    { id: 2, name: 'Компьютер', price: 200, quantity: 0 },
    { id: 3, name: 'Монитор', price: 150, quantity: 2 },
    { id: 4, name: 'Мотоцикл', price: 300, quantity: 10 },
    { id: 5, name: 'Клавиатура', price: 50, quantity: 1 },
];

class ProductCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: productsData,
            sortColumn: 'id',
            sortDirection: 'asc',
        };
    }

    handleSort = (column) => {
        const { sortColumn, sortDirection } = this.state;
        let newDirection = 'asc';

        if (sortColumn === column && sortDirection === 'asc') {
            newDirection = 'desc';
        }

        const sortedProducts = [...this.state.products].sort((a, b) => {
            if (a[column] < b[column]) return newDirection === 'asc' ? -1 : 1;
            if (a[column] > b[column]) return newDirection === 'asc' ? 1 : -1;
            return 0;
        });

        this.setState({
            products: sortedProducts,
            sortColumn: column,
            sortDirection: newDirection,
        });
    }

    getTotalQuantity = () => {
        return this.state.products.reduce((total, product) => total + product.quantity, 0);
    }

    getTotalValue = () => {
        return this.state.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    }

    render() {
        const { products } = this.state;

        return (
            <div className="product-catalog">
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => this.handleSort('id')}>№</th>
                            <th onClick={() => this.handleSort('name')}>Название товара</th>
                            <th onClick={() => this.handleSort('price')}>Цена</th>
                            <th onClick={() => this.handleSort('quantity')}>Количество</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr 
                                key={product.id} 
                                className={`
                                    ${product.quantity === 0 ? 'out-of-stock' : ''}
                                    ${product.quantity < 3 && product.quantity > 0 ? 'low-stock' : ''}
                                `}
                            >
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price} ₽</td>
                                <td>{product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="summary">
                    <p>Общее количество товаров: {this.getTotalQuantity()}</p>
                    <p>Общая стоимость товаров: {this.getTotalValue()} ₽</p>
                </div>
            </div>
        );
    }
}

export default ProductCatalog;