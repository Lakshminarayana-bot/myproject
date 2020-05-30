import React from 'react'
import {Link} from 'react-router-dom'


function MainPage() {
    return (
        <div className="container-fluid">
            <div className="row">

            <div class="cols-xs-12" class="col-sm-6" class="col-md-6" class="col-lg-4">
                    <Link to="praveenbro"><label>PraveenVatmbi</label></Link>
                    <img className="image" src="/team.jpg"/>
                </div>
                <div class="cols-xs-12" class="col-sm-6" class="col-md-6" class="col-lg-4">                  <Link to="/darshubro">  <label>HemaDharshan</label></Link>
                    <img className="image" src="/team.jpg"/>
                </div>

                <div class="cols-xs-12" class="col-sm-6" class="col-md-6" class="col-lg-4">                   <Link to="/leebro"> <label>LeelaPrasad</label></Link>
                    <img className="image" src="/team.jpg"/>
                </div>


            </div>

            
        </div>
    )
}

export default MainPage
