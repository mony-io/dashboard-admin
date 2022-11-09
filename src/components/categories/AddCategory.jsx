import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function AddCategory() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className='flex'>
            <h2>Add Category</h2>
        </div>
      </div>
    </>
  )
}

export default AddCategory;