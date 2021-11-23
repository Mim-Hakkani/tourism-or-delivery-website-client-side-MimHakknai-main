import { Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Nf404 from './Components/Notfound/Nf404';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Services from './Components/Services/Services';
import Singledec from './Components/SingleDesc/Singledec';
import Manageorder from './Components/ManageOrder/Manageorder';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Regintration';
import Myorder from './Components/MyOders/Myorder';
import AddNeworder from './Components/AddNeworder/AddNeworder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <div>
      
      

        <Switch>
        

          <Route exact path="/">
            
             <Header></Header>
             <Banner></Banner>
             <Services></Services>
             <Gallery></Gallery>
             <Footer></Footer>
             
             
             
          </Route>

          <Route exact path="/about">

             <Header></Header>
             <About></About>
             <Footer></Footer>

          </Route>

          <Route exact path="/home">

             <Header></Header>
             <Banner></Banner>
             <Services></Services>
             <Gallery></Gallery>
             <Footer></Footer>

          </Route>

          <Route exact path="/blog">
               <Header></Header>
               <Blog></Blog>
               <Footer></Footer>
          </Route>

          <Route exact path="/services">
              <Header></Header>
              <Services></Services>
              <Footer></Footer>
          </Route>

          <Route exact path ="/manageorder">
            <Header></Header>
            <Manageorder></Manageorder> 
            <Footer></Footer>
          </Route>

          <Route exact path ="/myorder">
           <Header></Header> 
           <Myorder></Myorder>
           <Footer></Footer>
          </Route>

          <Route exact path ="/addservices">
           <Header></Header> 
           <AddNeworder></AddNeworder>
           <Footer></Footer>
          </Route>

          {/* <Route exact path="/service/:id">
                     
          </Route> */}

             <PrivateRoute exact path="/booking/:id">
                      
                <Header></Header>        
                <Singledec></Singledec>
                <Footer></Footer> 
                    
              </PrivateRoute>

          <Route exact path="/gallery">
            
             <Header></Header>
             <Gallery></Gallery>
             <Footer></Footer>
             
          </Route>

          <Route exact path="/login">
                
                <Header></Header> <Login></Login> <Footer></Footer>
                
          </Route>

          <Route exact path="/registration">
              <Header></Header> <Registration></Registration> <Footer></Footer>
          </Route>

          <Route exact path="*">
             <Header></Header><Nf404></Nf404> <Footer></Footer>
          </Route>

         
            </Switch>
          </div>
       </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
