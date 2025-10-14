import React from 'react'

const GenderCheckbox = ({handleCheckboxChange,selectGender}) => {
    return (
        <div className='flex mt-4 gap-2'>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer '>
                    <span className='label-text text-[#ffffff]'>Male</span>
                    <input type="checkbox" className='checkbox bg-white text-white' 
                     onChange={()=>handleCheckboxChange("male")} checked= {selectGender === "male"}/>

                </label>
            </div>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer '>
                    <span className='label-text text-[#ffffff]'>Female</span>
                    <input type="checkbox" className='checkbox bg-white text-white' onChange={()=>handleCheckboxChange("female")} 
                    checked = {selectGender === "female"}/>

                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox