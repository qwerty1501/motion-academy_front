import {Formik} from "formik";
import api from "../axiosAPI/api";
import PhoneField from "../Home/FormReq/PhoneField";
import * as yup from "yup";

export default function ClubApplication() {
    const validationSchema = yup.object({
        full_name: yup.string().required('Атыңызды жазыңыз'),
        phone: yup.string().required('Номериңизди жазыңыз'),
        email: yup.string().email('Бул жерге email жазыңыз'),
    })
    return (
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 mt-4">
                    <div className="lg:p-10 p-4">
                        <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6">Тандоого жардам беребиз</h1>
                        <p className="text-[#9099A3] leading-[24px] w-[100%] lg:w-[60%] ">Катталуу учун номеринизди жана атынызды калтырыныз биздин мененджерлер байланышат</p>
                    </div>
                    <div className="mt-4 sm:mt-8">
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
                                actions.setStatus('Ийгиликтуу жиберилди')
                                } catch (e) {
                                    actions.setStatus('Серверден ката кетти')
                                }
                                console.log(values)
                            }}
                        >
                            {(formik,) => (
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
                                    <PhoneField />
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
                                    {!!formik.status && (
                                        <h1 className="text-white mt-7 text-[20px]">{formik.status}</h1>
                                    )}
                                    <button className="btn" type="submit">Жонотуу</button>
                                </form>
                            )}
                        </Formik>
                    </div>

                </div>
            </div>

    )
}
