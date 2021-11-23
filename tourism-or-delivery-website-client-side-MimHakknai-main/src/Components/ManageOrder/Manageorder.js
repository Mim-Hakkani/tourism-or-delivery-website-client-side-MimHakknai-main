import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../context/useAuth';

const Manageorder = () => {

    const [orders,setOrders]=useState([])
    const [statusId,setStatusId]=useState()
    const{user}=useAuth()

    useEffect(()=>{
        fetch('https://serene-forest-10567.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[orders,statusId])


    const handleUpdate=(id)=>{
        fetch(`https://serene-forest-10567.herokuapp.com/orders/${id}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Approved Successful')
            setStatusId(id)
        })
        
    }


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
                <th>User Name</th>
                <th>User Email</th>
                <th>Service Name</th>
                <th>Phone</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
           {
              orders.map(order=> <tr>
                <td>{order.userName}</td>
                <td>{order.userEmail}</td>
                <td>{order.serviceName}</td>
                <td>{order.phone}</td>
                <td>{order.servicePrice}</td>
                <td>{order.status}</td>
                <td>
                    
                    <button onClick={()=>handleDelete(order._id)} className="btn btn-danger me-2">Cancel</button>

                    {order.status==="pending" ? <button onClick={()=>handleUpdate(order._id)} className="btn btn-danger">Pending</button>
                        :
                        <button onClick={()=>handleUpdate(order._id)} className="btn btn-success">Approve</button>
                    }
                    
                    </td>
            </tr>)
           }
            </tbody>
        </Table>
        </div>
    );
};

export default Manageorder;