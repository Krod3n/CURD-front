import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import People from '../Model/Poeple';


const AddPeople = () => {

// VALIDATION FORMIK
const validationSchema = Yup.object().shape ({
    fistname: Yup.string()
    .min(2,'too short')
    .max(50, 'too Long')
    .required('Required')
    lastname: Yup.string()
    .min(2,'too short')
    .max(50, 'too Long')
    .required('Required')
    email: Yup.string()
    .min(10,'too short')
    .max(100, 'too Long')
    .required('Required')
    country: Yup.string()
    .min(6,'too short')
    .max(50, 'too Long')
    .required('Required')
    number: Yup.string()
    .min(10,'too short')
    .max(100, 'too Long')
    .required('Required')
    });

    const formik

  return (

    <div>AddPeople</div>
  )
}

export default AddPeople