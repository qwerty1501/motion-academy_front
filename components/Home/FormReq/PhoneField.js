import {useField} from "formik";
import PhoneInput from "react-phone-number-input";
import React from "react";


const PhoneField = () => {
    const [field, meta, actions] = useField({name: 'phone'});

    const handleChange = (value) => {
        actions.setValue(value);
    }

    return (
        <div className="relative w-[95%]  mt-4 mb-4  ">
            <span className=" text-[#9099A3]">Телефон *</span>
            <PhoneInput
                name="phone"
                enableAreaCodes={true}
                dropdownClass="dropdown-class"
                {...field}
                onChange={handleChange}
                international
                countryCallingCodeEditable={true}
                defaultCountry="KG"
            />

            <h1 className="text-white">
                {meta.error && meta.touched && meta.error}
            </h1>
        </div>
    )
}

export default PhoneField;