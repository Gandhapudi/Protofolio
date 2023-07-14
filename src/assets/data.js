import cryptoimg from "./Screenshot 2023-04-13 165617.png"
import basestoreimg from "./Screenshot 2023-04-13 165724.png"
import aws from "./AWS Cloud Practioner Essentials_page-0001.jpg"
import java from "./p_G Anil Kumar_Java Nano Degree Course_page-0001.jpg"
import dbms from "./DBMS_page-0001.jpg"
import python from "./python.png"
import protofolio from "./protofoli2.png"

export const data={
    project:[
        {title:"CRYPTO",
        img:cryptoimg,
        description:`An App with Cryto currency details.Fetching the data through API of coingecko.Consists of details Like Exchange,Coins And detail description of Each coins along with Chart
                     along with Loginform and signup form.Able to fetch curreny details in all reputed currencies in the world with comparison of crypto currency `
        ,date:"20 March 2023",
        url:"https://crptocurrency-gandhapudi.vercel.app/"
                    },
        {title:"basestore",
                    img:basestoreimg,
                    description:`An App of simple store where having the features of add to cart and the app runs through the Redux Operations  `
                    ,date:"1 April 2023",
                    url:"https://reduxbasics.vercel.app"
                                },
        {title:"Protofolio",
                    img:protofolio,
                    description:`An App of basic protofolio of mine just like a resume  `
                    ,date:"10 April 2023",
                    url:"#"
                                }
    ],
    images:[{name:"AWS",img:aws}, {name:"Java",img:java}, {name:"DBMS",img:dbms}, {name:"Python",img:python}]
}