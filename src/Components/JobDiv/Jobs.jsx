import React from 'react'

//Imported Icons ========>
import {BiTimeFive} from 'react-icons/bi'

//Imported Images =========>
import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'


//For all the jobs, we are going to use high order array method called Map...
//In this case we shall list all the jobs into an array called Data...

const Data = [
    {
        id:1,
        image:logo1,
        title:'Web Developer',
        time:'Now',
        location:'Canada', 
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        company:'Novac Linus Co.'
    },
    {
        id:2,
        image:logo2,
        title:'UI Designer',
        time:'14Hrs',
        location:'USA', 
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        company:'Liquid Accessments'
    },
    {
        id:3,
        image:logo3,
        title:'Software engineer',
        time:'10Hrs',
        location:'Australia', 
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        company:'Web Tech Agency'
    },
    {
        id:4,
        image:logo4,
        title:'Product Designer',
        time:'5Hrs',
        location:'UK', 
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        company:'Nilocon-UK'
    }
    
]

//This is a single company, lets see how to map it...

const Jobs = () => {
  return (

    <div>
<div className='jobContainer flex gap-10 justify-center flex wrap items-center py-10'>

{
    Data.map(({id,image,title,time,location,desc,company}) =>{
        return(
            //This will return a single job post based on ID
            <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

    <span className='flex justify-between items-center gap-4'>
        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
        <span className='flex items-center text-[#ccc] gap-1'>
            <BiTimeFive/>{time}
        </span>
    </span>
    <h6 className='text-[#ccc]'>{location}</h6>

    <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>

<div className='company flex items-center gap-2'>
<img src={image} alt="Company logo" className='w-[10%]' />
<span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
</div>

<button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-red'>
    Apply Now
</button>

</div>
        )
    })
}
      </div>

    </div>
  )
}

export default Jobs;
