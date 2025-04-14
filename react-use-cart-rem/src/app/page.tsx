"use client"

import { useCart } from "react-use-cart";
export default function Page() {
    const { addItem,
        // isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem, } = useCart();

    const products = [
        {
            id: 3,
            title: "Nordli",
            price: 16500,
            // description: string;
            category: "furniture",
            // image: string;
            rating: {
                rate: 3.2,
                count: 99,
            }
        },
        {
            id: 2,
            title: "Nordli",
            price: 16500,
            // description: string;
            category: "furniture",
            // image: string;
            rating: {
                rate: 3.2,
                count: 99,
            }
        },
        {
            id: 3,
            title: "Nordli",
            price: 16500,
            // description: string;
            category: "furniture",
            // image: string;
            rating: {
                rate: 3.2,
                count: 99,
            }
        },
        // {
        //     id: 2,
        //     title: "Nordli",
        //     price: 16500,
        //     // quantity: 5
        // },
        // {
        //     id: 3,
        //     title: "Kullen",
        //     price: 4500,
        //     // quantity: 1
        // },

        // {
        //     id: 4,
        //     title: "Ketchup",
        //     price: 4900,
        //     // quantity: 1
        // },
    ];

    return (
        <main className='flex gap-3'>


            {products.map((p) => (
                // we used map function to apply loop
                <div key={p.id} className='prodCd'>
                    <h1>Id: {p.id}</h1>
                    <h2 className='line-clamp-1'>Name: {p.title}</h2>
                    <p>price {p.price}</p>
                    {/* <p>Quantity: {p.quantity}</p> */}
                    <button onClick={() => addItem(p)} className="cart">Add to cart</button>
                </div>
            ))}


            <div>
                <h1>Cart ({totalUniqueItems})</h1>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.quantity} x {item.name} &mdash;
                            <button
                                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
                            >
                                -
                            </button>
                            <button
                                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
                            >
                                +
                            </button>
                            <button onClick={() => removeItem(item.id)}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>


            <div>
                <h1>Cart ({totalUniqueItems})</h1>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.quantity} x {item.name} &mdash;
                            <button
                                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
                            >
                                -
                            </button>
                            <button
                                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
                            >
                                +
                            </button>
                            <button onClick={() => removeItem(item.id)}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>


            <div>
                <h1>Cart ({totalUniqueItems})</h1>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.quantity} x {item.name} &mdash;
                            <button
                                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
                            >
                                -
                            </button>
                            <button
                                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
                            >
                                +
                            </button>
                            <button onClick={() => removeItem(item.id)}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>


            <div>
                <h1>Cart ({totalUniqueItems})</h1>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.quantity} x {item.name} &mdash;
                            <button
                                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
                            >
                                -
                            </button>
                            <button
                                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
                            >
                                +
                            </button>
                            <button onClick={() => removeItem(item.id)}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>

    );
}


