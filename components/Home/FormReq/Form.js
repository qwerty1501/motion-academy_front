import 'react-phone-input-2'
import {Formik} from "formik";
import React from "react";
import * as yup from 'yup'
import api from "../../axiosAPI/api";
import PhoneField from "./PhoneField";

const validationSchema = yup.object({
    full_name: yup.string().required('Атыңызды жазыңыз'),
    phone: yup.string().required('Номериңизди жазыңыз'),
    email: yup.string().email('Бул жерге email жазыңыз'),
})
export default function MainForm() {

    return (
        <section id="subscribe" className="mt-10 mb-12">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2">
                    <div>
                        <h1 className="text-white kaizenForm-tit font-bold text-[22px] sm:text-[30px] lg:text-[36px]">
                            Тандоого жардам беребиз
                        </h1>
                        <p className="text-white kaizenForm-desc text-[#9099A3] sm:text-[18px] md:w-[88%] lg:w-[50%]">

                            Катталуу учун номеринизди жана атынызды калтырыныз биздин мененджерлер байланышат
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0">

                        <Formik
                            initialValues={{
                                full_name: '',
                                phone: '',
                                email: ''
                            }}
                            validationSchema={validationSchema}
                            onSubmit={ async (values, actions) => {
                                try {
                                    await api.post('ru/api/v2/create-help-in-choosing/', values)
                                    actions.setStatus('Сиздин буйрутмаңыз ийгиликтүү кетти, жакын арада биздин менеджерлер сизге  байланышат')
                                } catch (e) {
                                    actions.setStatus('Серверден ката кетти')
                                }

                            }}
                        >
                            {(formik) => (
                                <form
                                    onSubmit={formik.handleSubmit}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[#9099A3]">ФИО *</span>
                                        <input
                                            className="kaizen-form text-white"
                                            name="full_name"
                                            value={formik.values.full_name}
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            type="name"
                                            placeholder="ФИО"/>
                                        <h1 className="text-white">
                                            {formik.errors.full_name && formik.touched.full_name && formik.errors.full_name}
                                        </h1>
                                    </div>
                                    <PhoneField/>
                                    <div className="flex flex-col">
                                        <span className=" text-[#9099A3]">E-mail *</span>
                                        <input
                                            className="kaizen-form text-white"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            type="email"
                                            placeholder="Почта"
                                        />
                                        <h1 className="text-white">
                                            {formik.errors.email && formik.touched.email && formik.errors.email}
                                        </h1>
                                    </div>
                                    <button className="btn" type="submit">Жөнөтүү</button>
                                    {!!formik.status && (
                                        <h1 className="text-white">{formik.status}</h1>
                                    )}
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}
