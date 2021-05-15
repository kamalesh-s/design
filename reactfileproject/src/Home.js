import React from 'react'
import "./Home.css";

function Home() {
    return (
        <div className="home">
        <div className="home_page">
            <div className="home_textright">
            <h2>Lorem <br/> Ipsum</h2>
            <ul>About</ul>
            <ul>Services</ul>
            <ul>Cusine</ul>
            <ul>Gallery</ul>
            <ul>Contact</ul>
            <ul>Book</ul>
           <ul><button>Cart</button></ul>
           </div>

            <div className="home_text">
            <h1>What are you <br/> having for Lunch?</h1>
            </div>

            <div className="home_textleft">
                <h3>Lorem ipsum dolor sit amet,<br/>
                consectetur adipiscing elit,<br/>
                sed do eiusmod tempor <br/>
                incididunt ut labore et.</h3>
            </div>
            </div>
            
          
        
            
           
           <div className="card_container">
            <div className="card">
                <img src="https://previews.123rf.com/images/nadianb/nadianb1708/nadianb170800121/83673153-mexican-taco-with-meat-beans-and-vegetables-at-black-slate-table-latin-american-food-top-view-square.jpg"/>
            <h3>Mexican Tao</h3>
            </div>

            <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GeWcUY9PTfS1-h_LJyq5EIxRJnuyFSHIUA&usqp=CAU"/>
            <h3>Farmhouse Pizza</h3>
            </div>

            <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWcGX2nAI0svyiNQgCGAVaWZ1fxFOyfvNeg&usqp=CAU"/>
            <h3>Chicken Burger</h3>
            </div>

            <div className="card">
            <img src="https://profusioncurry.com/wp-content/uploads/2020/09/Healthy-Apple-Nachos-Close-up-square-image.jpg"/>

            <h3>Loaded Nachos</h3>
            </div>

            <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGXb4vvb1tDTCbJOSRaLZGYk_OBaQL3hEkA&usqp=CAU"/>
            <h3>Hakka Noodles</h3>
             </div>
            </div>
            </div>
            
           
         
           
             

           
            
        
    )
}

export default Home
