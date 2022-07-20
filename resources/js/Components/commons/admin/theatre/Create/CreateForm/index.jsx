import React, {useState} from 'react';
import {useForm} from "@inertiajs/inertia-react";

// Styles
import styles from './createForm.module.scss';

const CreateForm = () => {
    const { data, setData, post, progress, errors, reset} = useForm({
        name: null,
        date: null,
        image: null,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('admin.theatre.store'));
    }

    return (
        <div className={styles.form__container} onSubmit={handleSubmit}>
            <form className={styles.form} encType="multipart/form-data">
                <div className={styles.form__item}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={data.name ?? ""} onChange={e => setData('name', e.target.value)} />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
                <div className={styles.form__item}>
                    <label htmlFor="date">Date</label>
                    <input type="datetime-local" id="date" name="date" value={data.date ?? ""} onChange={e => setData('date', e.target.value)} />
                    {errors.date && <p className={styles.error}>{errors.date}</p>}
                </div>
                <div className={styles.form__item}>
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image" name="image" onChange={e => setData('image', e.target.files[0])} />
                    {errors.image && <p className={styles.error}>{errors.image}</p>}
                </div>

                <button className={styles.form__btn} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateForm;
