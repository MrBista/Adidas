import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ImPencil2 } from 'react-icons/im';
import getProducts from '../redux/fnFetch/getProducts';
const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading, errMsg } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  if (isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <div class='mt-4'>
        <div class='flex justify-between items-center'>
          <h3>Shoes</h3>
          <Link
            to={'/add-product'}
            class='flex items-center bg-gray-300 rounded-lg px-4 py-2 shadow-lg'
          >
            <span class='material-symbols-outlined'> add </span>
            <span>New Shoes</span>
          </Link>
        </div>
        <table class='border-collapse text-left table-auto w-full mt-6'>
          <thead>
            <tr class='bg-gray-300'>
              <th class='px-4 py-2 text-center w-12'>No.</th>
              <th class='px-4 py-2'>Title</th>
              <th class='px-4 py-2'>Category</th>
              <th class='px-4 py-2'>Main Image</th>
              <th class='px-4 py-2'>Images</th>
              <th class='px-4 py-2'>Price</th>

              <th class='px-4 py-2'>Author</th>
              <th class='px-4 py-2 text-center'>Update</th>
            </tr>
          </thead>
          <tbody class='[&>*:nth-child(even)]:bg-gray-50'>
            {products.map(
              (
                {
                  id,
                  name,
                  mainImg,
                  User: { email },
                  Category,
                  Images,
                  description,
                  price,
                },
                i
              ) => {
                return (
                  <>
                    <tr>
                      <td class='text-center w-12'>{++i}</td>
                      <td>
                        <p>{name}</p>
                      </td>
                      <td className='text-left'>
                        <p>{Category.name}</p>
                      </td>
                      <td className='text-left'>
                        <div class='h-24 w-36 aspect-video'>
                          <img
                            src={mainImg}
                            class='h-[100%] w-[100%] object-contain'
                            alt=''
                          />
                        </div>
                      </td>
                      <td class=''>
                        <button class='px-4 py-2 border border-black'>
                          Show Images
                        </button>
                      </td>

                      <td>
                        <p>{price}</p>
                      </td>
                      <td>
                        <p>{email}</p>
                      </td>

                      <td class='text-center'>
                        <a href=''>
                          <span class='material-symbols-outlined'> edit </span>
                        </a>
                      </td>
                    </tr>
                  </>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
