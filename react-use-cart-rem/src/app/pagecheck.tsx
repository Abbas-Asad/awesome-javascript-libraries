// import Image from 'next/image';
// import React from 'react'

// const page = async () => {
//   interface IMenCloth {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: {
//       rate: number;
//       count: number;
//     }
//   }
//   let response = await fetch(`https://fakestoreapi.com/products/category/electronics`)
//   let data: IMenCloth[] = await response.json()  // converting data from json to js object
//   // Type is IMenCloth[] because data is in array and by using datatype now we will also get suggestions
//   return (
//     <main className='flex gap-3'>
//       {data.map((menCloth) => (
//         // we used map function to apply loop
//         <div key={menCloth.id} className='prodCd'>
//           {/* <h1>Id: {menCloth.id}</h1> */}
//           <Image src={menCloth.image} height={'200'} width={'200'} alt='image not found' className='w-36'/>
//           <h2 className='line-clamp-1'>Name: {menCloth.title}</h2>
//           <p>Price: {menCloth.price}</p>
//           <button>Add to cart</button>
//         </div>
//       ))}
//     </main>
//   )
// }

// export default page

