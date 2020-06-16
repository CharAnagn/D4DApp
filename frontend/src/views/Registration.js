import React, { useState } from 'react';



export default function Registration() {
    const [state, setState] = useState({ Name: '', Lname: '' , Username: '', Password: '', Conpassword: '', Birth_date: '', Place_of_birth: '', Home_adress: '', Phone_number: '', Email: '', Workplace: '', Sport: '', Education: '', Photo: '' });
    
    
    function changeHandler(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    function submitHandle(e) {

        e.preventDefault();


        if (state.Conpassword !== state.Password) {
            alert('Your Password and Reenter password should be dessime')
        }
        else {

    /////////////////////////////////////////// POST REQUEST TO API ////////////////////////////////////////

            fetch('http://localhost:80/api/registration', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            }).then(res => alert(res.json()))
        
    }
    

    return ( 

        /////////////////////////////////////////// FORM ////////////////////////////////////////


        <div>
            <br />
            <br />
            <section className="container-fluid">
                <section className="row justify-content-center">
                    <section className="col-12 col-sm-6 col-md-3">
                        <form action="" className="form-container" onSubmit={submitHandle} >
                            <h4 className="text-center font-weight-bold">Registration form</h4>
                            <hr />
                            <div className="form-group">

                                <div className="input-group-addon">Name</div>

                                <input name='Name' className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" required placeholder="Your name" placeholder="Your last name" required onChange={changeHandler} />
                            </div>
                            <div className="form-group">
                                <div className="input-group-addon">Last name</div>

                                <input name='Lname' type="text" className="form-control"  required placeholder="Last name" required onChange={changeHandler} />
                            </div>

                            <div className="form-group">
                                <div className="input-group-addon">Username</div>

                                <input name='Username' type="text" className="form-control"  required placeholder="Choose a username" required onChange={changeHandler} />
                            </div>

                            <div className="form-group">
                                <div className="input-group-addon">Password</div>

                                <input name='Password' type="password" className="form-control"  required placeholder="Chosse a password" required onChange={changeHandler} />
                            </div>

                            <div className="form-group">
                                <div className="input-group-addon">Reenter password</div>

                                <input name='Conpassword' type="password" className="form-control"  required placeholder="Verify password" onChange={changeHandler} />
                            </div>


                            <div className="form-group">
                                <div className="input-group-addon">Birth date</div>

                                <input name='Birth_date' type="date" className="form-control"  required placeholder="Your birth date" onChange={changeHandler} />
                            </div>
                            <div className="form-group">
                                <div className="input-group-addon">Place of birth</div>

                                <input name='Place_of_birth' type="text" className="form-control"  required placeholder="Your birth place" onChange={changeHandler} />
                            </div>
                            <div className="form-group">
                                <div className="input-group-addon">Home Adress</div>

                                <input name='Home_adress' type="text" className="form-control"  required placeholder="Your Home adress" onChange={changeHandler} />
                            </div>
                            <div className="form-group">
                                <div className="input-group-addon">Phone number</div>

                                <input name='Phone_number' type="text" className="form-control"  required placeholder="Your phone number" onChange={changeHandler} />
                            </div>
                            <div className="form-group">
                                <div className="input-group-addon">E-mail</div>

                                <input name='Email' type="email" className="form-control"  required placeholder="Your E-mail adress" onChange={changeHandler} />
                            </div>
                            <div className="form-group">
                                <div className="input-group-addon">Workplace</div>

                                <input name='Workplace' type="text" className="form-control"  required placeholder="Your Workplace" onChange={changeHandler} />
                            </div>
                            <div className="form-group">
                                <div className="input-group-addon">Sport</div>
                                <select defaultValue='Not Set' name="Sport" className="custom-select" onChange={changeHandler}>

                                    <option selected>Select a sport</option>

                                    <option value="Football">Football</option>

                                    <option value="Cricket">Cricket</option>

                                    <option value="Field Hockey">Field Hockey</option>

                                    <option value="Tennis">Tennis</option>

                                    <option value="Volleyball">Volleyball</option>

                                    <option value="Table Tennis">Table Tennis</option>

                                    <option value="Baseball">Baseball</option>

                                    <option value="Americal Football">Americal Football</option>

                                    <option value="Rugby">Rugby</option>

                                    <option value="Golf">Golf</option>

                                    <option value="Lacrosse">Lacrosse</option>

                                    <option value="Boxing">Boxing</option>

                                    <option value="Gymnastics">Gymnastics</option>

                                    <option value="Bowling">Bowling</option>

                                    <option value="Swimming">Swimming</option>

                                    <option value="Cycling">Cycling</option>

                                    <option value="Parkour">Parkour</option>


                                </select>
                            </div>
                            <div className="form-group">
                                <div className="input-group-addon ">Education</div>

                                <input name='Education' type="text" className="form-control"  required placeholder="Your Education" onC onChange={changeHandler} />
                            </div>


                            {/* <div className="form-group">
                                <div className="input-group-addon">Photo</div>
                                <input name='Photo' required type="file" accept="image/*" className="form-control" id="inlineFormInputGroupUsername" placeholder="Upload a photo from yourself" onChange={changeHandler} />
                            </div> */}




                            <button type="submit" className="btn btn-primary btn-block">submit</button>
                        </form>
                    </section>
                </section>
            </section>
        </div>
    )
}




//      <div>
// <br />
// <br />
// <section className="container-fluid">
// <section className="row justify-content-center">
// <section className="col-12 col-sm-6 col-md-3">
// <form action="" className="form-container">
// <h4 className="text-center font-weight-bold">Registration form</h4>
// <hr />
// <div className="form-group">

//   <div className="input-group-addon">Name</div>

//   <input className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" required placeholder="Your name" placeholder="Your last name" required onChange={changeHandler}/>
// </div>
// <div className="form-group">
//   <div className="input-group-addon">Last name</div>

//   <input type="text"className="form-control"  required placeholder="Last name" required onChange={changeHandler} />
// </div>

// <div className="input-group mb-3">
// <div className="input-group-prepend">
// <span className="input-group-text" id="basic-addon1">@</span>
// </div>
// <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  required on onChange={changeHandler}/>
// </div>

// <div className="form-group">
//   <div className="input-group-addon">Password</div>

//   <input type="password" className="form-control"  required placeholder="Chosse a password" required on onChange={changeHandler} />
// </div>

// <div className="form-group">
//   <div className="input-group-addon">Reenter password</div>

//   <input type="password" className="form-control"  required placeholder="Verify password" />
// </div>


// <div className="form-group">
//   <div className="input-group-addon">Birth date</div>

//   <input type="date"className="form-control"  required placeholder="Your birth date" onCh onChange={changeHandler} />
// </div>
// <div className="form-group">
//   <div className="input-group-addon">Place of birth</div>

//   <input type="text"className="form-control"  required placeholder="Your birth place" onChange onChange={changeHandler} />
// </div>
// <div className="form-group">
//   <div className="input-group-addon">Home Adress</div>

//   <input type="text"className="form-control"  required placeholder="Your Home adress" onCha onChange={changeHandler} />
// </div>
// <div className="form-group">
//   <div className="input-group-addon">Phone number</div>

//   <input type="text"className="form-control"  required placeholder="Your phone number" onChan onChange={changeHandler} />
// </div>
// <div className="form-group">
//   <div className="input-group-addon">E-mail</div>

//   <input type="email"className="form-control"  required placeholder="Your E-mail adress" onChange={changeHandler} />
// </div>
// <div className="form-group">
//   <div className="input-group-addon">Workplace</div>

//   <input type="text"className="form-control"  required placeholder="Your Workplace" onC onChange={changeHandler} />
// </div>
// <div className="form-group">
// <div className="input-group-addon">Sport</div>
// <select name="cars" className="custom-select" onChange={changeHandler}>

// <option selected>Select a sport</option>

// <option value="Football">Football</option>

// <option value="Cricket">Cricket</option>

// <option value="Field Hockey">Field Hockey</option>

// <option value="Tennis">Tennis</option>

// <option value="Volleyball">Volleyball</option>

// <option value="Table Tennis">Table Tennis</option>

// <option value="Baseball">Baseball</option>

// <option value="Americal Football">Americal Football</option>

// <option value="Rugby">Rugby</option>

// <option value="Golf">Golf</option>

// <option value="Lacrosse">Lacrosse</option>

// <option value="Boxing">Boxing</option>

// <option value="Gymnastics">Gymnastics</option>

// <option value="Bowling">Bowling</option>

// <option value="Swimming">Swimming</option>

// <option value="Cycling">Cycling</option>

// <option value="Parkour">Parkour</option>


// </select>
// </div>
// <div className="form-group">
//   <div className="input-group-addon ">Education</div>

//   <input type="text"className="form-control"  required placeholder="Your Education" onC onChange={changeHandler} />
// </div>


// <div className="form-group">                
// <div className="input-group-addon">Photo</div>
// <input required type="file" name="img" accept="image/*" className="form-control" id="inlineFormInputGroupUsername" placeholder="Upload a photo from yourself" onChange=arget.files})}} />
// </div>




// <button type="submit" className="btn btn-primary btn-block">submit</button>
// </form>
// </section>
// </section>
// </section>
// </div>
