import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './CatFacts.module.css';

const CatFacts = () => {

    const [facts, setFacts] = useState([]);

    useEffect(() => {
        console.log("Running useEffect");

        let url = 'https://cat-fact.herokuapp.com/facts';
        const localFacts = localStorage.getItem('facts');
        if (localFacts) {
            setFacts(JSON.parse(localFacts));
        }
        else {
            axios.get(url)
                .then(({ data }) => {
                    console.log(data);
                    setFacts(data);
                    localStorage.setItem('facts', JSON.stringify(data));
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [])

    return (
        facts.map((d, indx) => <div className={styles['fact']} key={indx}>{d.text}</div>)
    )
}

export default CatFacts