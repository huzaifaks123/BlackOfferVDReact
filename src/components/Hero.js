// import styles from style modules
import styles from '../styles/pages.module.css'

export default function Hero(){
    const data = [
        {
            title: "Market Analytics",
            titleCaption: "Total 35.2% Conversion Rate",
            subtitle: "Sessions",
            info:
            {
                content1: "2.5k Sessions",
                content2: "4.1k Page Views",
                content3: "1.8k Leads",
                content4: "15% Conversions",
            }
        },
        {
            title: "Customer Insights",
            titleCaption: "Total 42.8% Customer Satisfaction",
            subtitle: "Feedbacks",
            info:
            {
                content1: "3.2k Feedbacks",
                content2: "2.1k Positive",
                content3: "1.2k Neutral",
                content4: "0.8k Negative",
            }
        },
        {
            title: "Sales Performances",
            titleCaption: "Total 58.9% Growth Rate",
            subtitle: "Performance",
            info:
            {
                content1: "$12.4k Revenue",
                content2: "8.2k Units Sold",
                content3: "$8.7k Cost",
                content4: "$3.7k Profit",
            }
        }
    ]


    return (
        <>
            {
                data.map((card, index) => (
                    <div className={`d-flex flex-column p-4 justify-content-start rounded w-100 h-100 ${styles.HeroContainer}`} key={index}>
                        <h4>{card.title}</h4>
                        <p>{card.titleCaption}</p>
                        <div className={styles.elements}>
                            <div className={`mt-5 content ${styles.subcontent}`}>
                                <h6>{card.subtitle}</h6>
                                <div className={`mt-auto ${styles.contentContainer}`}>
                                    <div className='d-flex justify-content-between'>
                                        <span className={`my-3 py-1 text-center rounded mx-auto ${styles.content}`}>{card.info.content1}</span>
                                        <span className={`my-3 py-1 text-center rounded mx-auto ${styles.content}`}>{card.info.content2}</span>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <span className={`my-3 py-1 text-center rounded mx-auto ${styles.content}`}>{card.info.content3}</span>
                                        <span className={`my-3 py-1 text-center rounded mx-auto ${styles.content}`}>{card.info.content4}</span>
                                    </div>
                                </div>
                            </div>
                        <div className={`mx-auto ${styles.imgContainer}`}></div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}