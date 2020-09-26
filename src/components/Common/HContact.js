import React, {Component} from 'react';
import Fields from './Fields';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
    sections:[
        [
            {name:'name', elementName:'input', type:'text', placeholder:'Your Name *'},
            {name:'email', elementName:'input', type:'text', placeholder:'Your Email ID*'},
            {name:'phone', elementName:'input', type:'text', placeholder:'Your Phone Number *'}
        ],
        [
            {name:'message', elementName:'textarea', type:'text', placeholder:'Your Message *'},
        ]
    ]
}


class HContact extends Component{
    
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate">
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, index)=>{
                                return (
                                    <div className="col-md-6" key={index}>
                                        {section.map((field, i)=>{
                                            return <Fields 
                                                        {...field} 
                                                        key={i}
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}   
                                                        onBlur={this.props.handleBlur}
                                                        touched={this.props.touched[field.name]}
                                                        errors={this.props.errors[field.name]}
                                                    />
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button 
                                className="btn btn-primary btn-xl text-uppercase" 
                                id="sendMessageButton" 
                                type="submit"
                                //onClick={e => this.submitForm(e)}
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "Your name should be longer than this name").required("You must give us your name"),
        email: Yup.string().email("Please Enter Valid Email Id").required("We need your email"),
        phone: Yup.string().min(10, "Phone number must be 10 digit").max(10, 'Phone number must be 10 digit').required("Please Provide your contact number."),
        message: Yup.string().min(100, "Message must be 100 charater long").required("Please Provide your message")
    }),
    handleSubmit: (values, {setSubmitting}) =>{
        alert("Your've submitted the form", JSON.stringify(values));
    }
})(HContact);