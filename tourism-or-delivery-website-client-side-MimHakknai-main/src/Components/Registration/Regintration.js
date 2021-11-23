import React from 'react';
import { Form,Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../context/useAuth';


const Registration = () => {
    const {signUpuser}=useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => signUpuser(data.email,data.password,data.name);
    return (
        <Container>
            <Row>
                <Col>
                <div className="my-5 py-2 border border-1 border-muted px-2">

                        <div className="authentication-site ">
                            <h1 className="py-2 text-center ">Create An Account</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Enter Name" defaultValue="" {...register("name")} className="w-100 my-2 py-2 border border-muted" /> <br/>

                            <input type="email" placeholder="Enter Email" defaultValue="" {...register("email")}  className="w-100 my-2 py-2 border border-muted"/><br/>
                
                            <input type="password" placeholder="Enter Password" {...register("password", { required: true })} className="w-100 my-2 py-2 border border-muted" /><br/>

                            {errors.exampleRequired && <span>This field is required</span>}
                
                            <input type="submit"  className="mt-2 btn btn-primary d-outline-block"/>
                        </form>

                                
                            
                            
                        </div>
                   </div>
                </Col>
            </Row>
        </Container>
        
    );
};

export default Registration;