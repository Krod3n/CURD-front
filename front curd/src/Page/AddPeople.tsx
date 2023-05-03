import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import People from "../Model/Poeple";
import ReturnButton from "../Component/ReturnButton";
import PeopleService from "../Service/PeopleService";
import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  isEdit: boolean;
};

const AddPeople = ({ isEdit }: Props) => {
  const navigate = useNavigate();

  const params = useParams();

  const [people, setPeople] = useState<People | null>(null);

  useEffect(() => {
    PeopleService.PeopleById(Number(params.id)).then((people) =>
      setPeople(people)
    );
  }, [params]);

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Le fournisseur est trop court")
      .max(50, "Le fournisseur est trop long")
      .required("Le fournisseur est obligatoire"),
    lastname: Yup.string()
      .min(2, "La description est trop courte")
      .max(50, "La description est trop longue")
      .required("Le fournisseur est obligatoire"),
    email: Yup.string()
      .min(2, "Le fournisseur est trop court")
      .max(100, "Le fournisseur est trop long")
      .required("Le fournisseur est obligatoire"),
    country: Yup.string()
      .min(2, "Le fournisseur est trop court")
      .max(50, "Le fournisseur est trop long")
      .required("Le fournisseur est obligatoire"),
    phone: Yup.string()
      .min(8, "Le fournisseur est trop court")
      .max(15, "Le fournisseur est trop long")
      .required("Le fournisseur est obligatoire"),
  });

  const updatePeople = (values: any) => {
    PeopleService.updatePeople(values);
    alert("update bidule : " + JSON.stringify(values));
  };

  const addPeople = (values: any) => {
    PeopleService.addPeople(values);
    alert("add movement : " + JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: {
      id: people?.id,
      firstname: people?.firstname,
      lastname: people?.lastname,
      email: people?.email,
      country: people?.country,
      phone: people?.phone,
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      navigate("/");
      isEdit ? updatePeople(values) : addPeople(values);
    },
  });

  return (
    <div>
      <ReturnButton />
      {!isEdit && <h1 className="">Création d'un people</h1>}
      {isEdit && <h1 className="text-center">Modification d'un people</h1>}
      
      {/* FORM */}
      <div className="flex justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col my-5 gap-5 w-60"
        >
          <TextField
            type="text"
            id="firstname"
            name="firstname"
            label="Firstname"
            InputLabelProps={{ shrink: true }}
            variant="filled"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
          />
          <TextField
            type="text"
            id="lastname"
            name="lastname"
            label="lastname"
            InputLabelProps={{ shrink: true }}
            variant="filled"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
          />
          <TextField
            type="text"
            id="country"
            name="country"
            label="country"
            InputLabelProps={{ shrink: true }}
            variant="filled"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
          <TextField
            type="email"
            id="email"
            name="email"
            label="email"
            InputLabelProps={{ shrink: true }}
            variant="filled"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            type="text"
            id="phone"
            name="phone"
            label="phone"
            InputLabelProps={{ shrink: true }}
            variant="filled"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <Button
            variant="contained"
            color="primary"
            className="movementFormValid"
            type="submit"
          >
            VALIDER
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddPeople;
