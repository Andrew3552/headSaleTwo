
import { useState } from 'react';
import cn from 'classnames';
import * as Yup from 'yup';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import Modal from '../Modal/Modal';

import './FormWrapper.scss';

export default function FormWrapper(props) {
  const { className, formWay, formTariff, formTariffInput, formTariffSubmit, formInputPhone,formBanner,formDoubtsWrapper, setIsSubmitted } = props;

  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({ name: '', tg: '', phone: '' });


  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Имя должно содержать минимум 2 символа').required('Обязательное поле'),
    phone: Yup.string().min(10, 'Номер телефона должен содержать минимум 10 цифр').required('Обязательное поле'),
  });

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await validationSchema.validate(formValues);
      // Если валидация прошла успешно, продолжаем обработку формы
      document.getElementById('name').value = formValues.name;
      document.getElementById('tg').value = formValues.tg;
      document.getElementById('phone').value = formValues.phone;
      document.getElementById('hiddenForm').submit();

      // Очищаем форму после успешной отправки
      setFormValues({ name: '', tg: '', phone: '' });
      // Очищаем состояние ошибок
      setErrors({});
      
      setIsSubmitted(true);
    } catch (error) {
      // Если валидация не прошла, показываем ошибку и обновляем состояние ошибок
      setErrors({ ...errors, [error.path]: error.message });
      console.log(errors);
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={cn('form', className, { form_way: formWay }, { form_tariff: formTariff }, { form_banner: formBanner }, { form__doubts_wrapper: formDoubtsWrapper })}
      >
        <label className="form__label_name" htmlFor="name">
          <input
            type="text"
            name="name"
            className={cn('form__input', { form__input_tariff: formTariffInput })}
            placeholder="Ваше ім'я"
            value={formValues.name}
            onChange={event => setFormValues({ ...formValues, name: event.target.value })}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </label>

        <label className="form__label_phone" htmlFor="phone">
          <PhoneInput
            country={'ua'}
            placeholder="Ваш номер телефона"
            value={formValues.phone}
            onChange={phone => setFormValues({ ...formValues, phone })}
            containerClass={cn('form__input', { form__input_phone: formInputPhone })}
            buttonClass="my-button-class"
            inputClass="my-input-class"
            dropdownClass="my-dropdown-class"
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </label>

        <label className="form__label_tgName" htmlFor="tg">
          <input
            type="text"
            name="tg"
            className={cn('form__input', { form__input_tariff: formTariffInput })}
            placeholder="Ваш телеграм"
            value={formValues.tg}
            onChange={event => {
              // Добавляем @ в начало введенного значения, если его там еще нет
              const value = event.target.value.startsWith('@') ? event.target.value : `@${event.target.value}`;
              setFormValues({ ...formValues, tg: value });
            }}
          />
        </label>
        <input
          type="submit"
          value="Відправити"
          className={cn('form__input', { form__input_submit: formTariffSubmit })}
        />
      </form>

      {/* <Modal isOpen={isSubmitted} onClick={() => setIsSubmitted(false)} /> */}

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSeFe3MVn-2lclBpVYknvOwH3D4fdBweqjFzsQnbzwYnFz2vuw/formResponse"
        method="post"
        id="hiddenForm"
        target="hiddenFrame"
        style={{ display: 'none' }}
      >
        <input type="text" name="entry.1162085581" id="name" />
        <input type="text" name="entry.984585220" id="phone" />
        <input type="text" name="entry.267472341" id="tg" />
      </form>

      <iframe name="hiddenFrame" style={{ display: 'none' }}></iframe>
    </>
  );
}

{/* <form
  action="https://docs.google.com/forms/d/e/1FAIpQLScs2AgyFt2Fc1zbRvnJArhb29-csmjuFhfe2gUYkGQzooNSmQ/formResponse"
  method="post"
  id="hiddenForm"
  target="hiddenFrame"
  style={{ display: 'none' }}
>
  <input type="text" name="entry.16780750" id="name" />
  <input type="text" name="entry.32131158" id="phone" />
  <input type="text" name="entry.990072308" id="tg" />
</form>; */}
