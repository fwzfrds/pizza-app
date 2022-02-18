import styles from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" alt="" layout="fill" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
                    <p className={styles.text}>
                        16A Cimanuk Street #304
                        <br /> Garut, 44119
                        <br /> (+62) 8515-6140-217
                    </p>
                    <p className={styles.text}>
                        07B Sudirman Street #235
                        <br /> Garut, 44118
                        <br /> (+62) 8515-6140-217
                    </p>
                    <p className={styles.text}>
                        129A Ahmad Yani Street #104
                        <br /> Garut, 44109
                        <br /> (+62) 8515-6140-217
                    </p>
                    <p className={styles.text}>
                        97 Tarogong Street #304
                        <br /> Garut, 44219
                        <br /> (+62) 8515-6140-217
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer