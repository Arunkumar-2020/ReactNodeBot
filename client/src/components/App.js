import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Courses from './shop/Shop';
import Chatbot from './chatbot/Chatbot';
import Contact from './pages/Contact';

const App = () =>  (
    <div>
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/courses' component={Courses}/>
                    <Route exact path='/contact' component={Contact}/> 
                    <Chatbot/>
            </div>
        </BrowserRouter>  
    </div>
    )

export default App;