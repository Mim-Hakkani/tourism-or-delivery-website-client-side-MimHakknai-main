import React from 'react';
import { useForm } from "react-hook-form";



const AddNeworder = () => {
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        fetch(`https://serene-forest-10567.herokuapp.com/services`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(result=>{
            if(data.insertedId){
                alert('add services successfully');
                reset()
            }
            
           
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 py-4 border border-primary my-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        
                                <input defaultValue="" {...register("name")} placeholder="Enter services title" className="form-control"/> <br/>
                                <input defaultValue="" {...register("img")} placeholder="Enter  image url" className="form-control"/> <br/>
                                <textarea defaultValue="" {...register("desc")} placeholder="write some description" className="form-control"/> <br/>
                                <input defaultValue="" {...register("prices")} placeholder="prices" className="form-control"/> <br/>
                            
                                {errors.exampleRequired && <span>This field is required</span>}
                                
                                <input type="submit"  className="btn btn-danger px-4"/>
                        </form>
                    </div>
                </div>
            </div>
               
        </div>
    );
};

export default AddNeworder;