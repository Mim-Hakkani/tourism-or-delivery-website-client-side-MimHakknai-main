import React from 'react';
import { useParams,NavLink } from 'react-router';
import { useForm } from "react-hook-form";
import  { useEffect, useState } from 'react';
import useAuth from '../../context/useAuth';
import '../SingleDesc/Singledesc.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Singledec = () => {
    const [service,setService]=useState({})
    const {id} =useParams();
    const {user} = useAuth()
    
    const{name,prices,desc,img,_id}=service

    console.log(service);

    useEffect(()=>{
        fetch(`https://serene-forest-10567.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[id,service])



    console.log(service);

    const { register,reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const orderDetails={
            serviceName :name,
            servicePrice:prices,
            serviceDesc:desc,
            userName:data.name,
            userEmail:data.email,
            address:data.address,
            phone:data.phone,
            date:data.date,
            status:'pending'
        }
        console.log(orderDetails);
        axios.post('https://serene-forest-10567.herokuapp.com/order',orderDetails)
        .then(res =>{
            if(res.data.insertedId){
                alert('added successful')
                reset()
            }
        })
    };
    
    return (
        
        <div>
            
            <div className="container-fluid" style={{backgroundImage:`url('https://www.teahub.io/photos/full/60-604642_wallpaper-couple-walk-top-travel.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'800px'}}>
                
                <div className="row">
                
                <div className="col-md-6 col-sm-6 col-xs-12" >
                    <div class="card">
                        <img src={img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{desc}</p>
                            <Link to="/services" class="btn btn-primary">Back to Services</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 mt-5 pt-5" >
              
                    <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input defaultValue={user.displayName} {...register("name")} className="form-control"/> <br/>
                    <input type="email" defaultValue={user.email} {...register("email")}  className="form-control"/> <br/>
                    <input type="number" defaultValue="" {...register("phone")} placeholder="Phone" className="form-control"/> <br/>
                    <input defaultValue="" {...register("address")} placeholder="where you go ? " className="form-control"/> <br/>
                    <input defaultValue="" {...register("date")} placeholder="set date" className="form-control" type="date" /> <br/>
                  
                    
                    
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <input type="submit"  className="btn btn-danger px-4"/>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Singledec;