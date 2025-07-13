import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffees = () => {

    const handleCoffeeAddForm = (e) => {
        e.preventDefault()

        //get value form form 
        const form = new FormData(e.target)

        const name = form.get('name')
        const chef = form.get('chef')
        const supplier = form.get('supplier')
        const taste = form.get('taste')
        const category = form.get('category')
        const details = form.get('details')
        const photo = form.get('photo')

        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        

        //sent coffee data to server 
        fetch(`http://localhost:5000/coffee`, {
            method: 'POST',
            body: JSON.stringify(newCoffee),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "success",
                        text: "Your file has been added success.",
                        icon: "success"
                    });
                }
            })

    }




    return (
        <div className="bg-[#F4F3F0] min-h-screen p-6 flex flex-col items-center">
            <div className="w-full max-w-5xl bg-white shadow-md rounded text-black  p-2-md p-8 mt-6">
                <Link to={'/'} className="text-2xl text-black w-full p-2 mb-4 inline-block ">&larr; Back to Home</Link>
                <h2 className="text-3xl font-bold text-center text-[#374151] mb-4">Add New Coffee</h2>
                <p className="text-center text-gray-600 mb-8">
                    It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters.
                </p>
                <form onSubmit={handleCoffeeAddForm} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input name="name" placeholder="Enter coffee name" className="mt-1 border-2 border-black rounded text-black w-full p-2 " />
                    </div>
                    <div>
                        <label className="block text-gray-700">Chef</label>
                        <input name="chef" placeholder="Enter coffee chef" className="mt-1 border-2 border-black rounded text-black w-full p-2" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Supplier</label>
                        <input name="supplier" placeholder="Enter coffee supplier" className="mt-1 border-2 border-black rounded text-black w-full p-2" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Taste</label>
                        <input name="taste" placeholder="Enter coffee taste" className="mt-1 border-2 border-black rounded text-black w-full p-2" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Category</label>
                        <input name="category" placeholder="Enter coffee category" className="mt-1 border-2 border-black rounded text-black w-full p-2" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Details</label>
                        <input name="details" placeholder="Enter coffee details" className="mt-1 border-2 border-black rounded text-black w-full p-2" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-gray-700">Photo Url</label>
                        <input name="photo" placeholder="Enter photo URL" className="mt-1 border-2 border-black rounded text-black w-full p-2" />
                    </div>
                    <div className="md:col-span-2 flex justify-center">
                        <button className="bg-[#f0a748]  hover:bg-[#c4a974] px-10 py-2 rounded text-black w-full p-2">Add Coffee</button>
                    </div>
                </form>
            </div>
            <section className="mt-60">
            </section>
        </div>
    );
};

export default AddCoffees;