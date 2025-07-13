import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeesDisplay = ({ coffeesData }) => {

  const [coffees, setcoffees] = useState(coffeesData)



  const handleDelete = (id) => {

    const afterDeteleCoffee = coffees.filter(coffee => coffee._id !== id)
    

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {


        //detele to mongodb from here
        fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              setcoffees(afterDeteleCoffee)
          });

      }
    });
  };




  return (
    <div className="py-10 px-4 max-w-6xl mx-auto mb-40">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#331A15]">Our Popular Products</h2>
        <Link to="/addcoffees">
          <button className="btn btn-outline btn-warning mt-4">Add Coffee ☕</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee, index) => (
          <div key={index} className="flex items-center bg-[#F5F4F1] rounded-lg shadow-md p-4">
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src={coffee.photo}
                alt={coffee.name}
                className="w-full h-full rounded object-cover"
              />
            </div>
            <div className="flex-grow ml-4">
              <p><span className="font-semibold">Name:</span> {coffee.name}</p>
              <p><span className="font-semibold">Chef:</span> {coffee.chef}</p>
              <p><span className="font-semibold">Price:</span> 80৳</p>
            </div>
            <div className="flex flex-col gap-2 ml-4">
              <Link to={`/editcoffee/${coffee._id}`}>
                <button className="btn btn-sm btn-outline btn-warning">
                  <FaEdit />
                </button>
              </Link>
              <button onClick={() => handleDelete(coffee._id)} className="btn btn-sm btn-outline btn-error">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeesDisplay;
