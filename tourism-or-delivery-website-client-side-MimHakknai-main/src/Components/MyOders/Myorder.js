import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../context/useAuth';

const Myorder = () => {
    const [orders,setOrders]=useState([])
    const{user}=useAuth()

    useEffect(()=>{
        fetch('https://serene-forest-10567.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[orders])


    const handleDelete=(id)=>{
        const proceed=window.confirm('Are You Sure to Delete')
        if(proceed){
            fetch(`https://serene-forest-10567.herokuapp.com/orders/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('delete successful')
                    const remainingOrders=orders.filter(order=>order._id !== id)
                    setOrders(remainingOrders)
                }
            })
        }
    }
    

    return (
        <div>
           <Table responsive="sm">
            <thead>
            <tr>
                <th>ProductId</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Address</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
           {
               orders.filter(order=>order.userEmail===user.email).map(order=> <tr>
                <td>{order._id}</td>
                <td>{order.serviceName}</td>
                <td>{order.servicePrice}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td><button onClick={()=>handleDelete(order._id)} className="btn btn-danger">Cancel</button></td>
            </tr>)
           }
            </tbody>
        </Table>
        </div>
    );
};

export default Myorder;