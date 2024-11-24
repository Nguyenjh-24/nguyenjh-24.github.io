import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styles from '../styles/style.module.css';
import { DesignOne } from '../components/DesignOne';
import { DesignTwo } from '../components/DesignTwo';
import { DesignThree } from '../components/DesignThree';
import { DesignFour } from '../components/DesignFour';
import { DesignFive } from '../components/DesignFive';
import { DesignSix } from '../components/DesignSix';
import { DesignSeven } from '../components/DesignSeven';
import { DesignEight } from '../components/DesignEight';
import { DesignNine } from '../components/DesignNine';
import { DesignTen } from '../components/DesignTen';
import { DesignEleven } from '../components/DesignEleven';
import { DesignTwelve } from '../components/DesignTwelve';
import { DesignThirteen } from '../components/DesignThirteen';
import { DesignFourteen } from '../components/DesignFourteen';
import { DesignFifteen } from '../components/DesignFifteen';

const index = () => {
  return (
    <div className={styles.container}>
      <div me={styles.topThing}>
       <h1 className={styles.bigTitle}>Luxe Vert Élégant</h1>
       <img className={styles.headerImage} src="EcoImage.jpg" />
      </div>
      <div className={styles.containerMain}>
        <title>Upcycling and Waste Management</title>
        <meta name="description" content="Website of Luxe Vert Élégant" />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Leading the Packaging Revolution  <br></br> One Package at a Time</h1>
          <p className={styles.description}>
            In a world increasingly driven by sustainability and conscious consumerism, our motto, &quot;Eco-Friendly Material, Earth Friendly Results,&quot; encapsulates our commitment to redefining packaging for the modern era. Our innovative designs seamlessly blend eco-conscious principles with a touch of luxury, proving that sustainability need not compromise on elegance or functionality. As the demand for greener solutions grows, we envision a future where packaging is not only mass-producible but also crafted from materials that are readily accessible, biodegradable, and environmentally harmonious. By prioritizing the planet without sacrificing quality or aesthetic appeal, we aim to inspire confidence in consumers and businesses alike, showing that responsible choices can lead to exceptional outcomes. This forward-thinking approach positions us at the forefront of an industry transformation, where practicality, sustainability, and sophistication converge. 
          </p>
        </div>
  
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
          <h3>Design 1</h3>
          <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignOne />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 2</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignTwo />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 3</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignThree />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 1 Description</h3>
            <p>
            Can be used while packing clothes or even shoes. Can be a literal 2 way opened box like opening both the sides (a closet like) More can occupy a standard of a lot of items.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 2 Description</h3>
            <p>
            Can be used as a compartment divider. Can occupy many products by dividing its compartments. Mainly aimed for cosmetics which can be placed in small spaces. More of a reach to modern abstract design with reference to a honeycomb.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 3 Description</h3>
            <p>
            Aims to be a compartment divider. Can be used to keep small accessories like watches, jewelry and many more. More of an inspiration from traditional compartment divider.
            </p>
          </div>
          <div className={styles.serviceCard}>
          <h3>Design 4</h3>
          <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignFour />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 5</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignFive />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 6</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignSix />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 4 Description</h3>
            <p>
            Aims both to be a compartment divider and a shock absorber packaging. Mainly for long items, like bottles, cylindrical rolled clothes or umbrellas. Gives modular and aesthetic look
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 5 Description</h3>
            <p>
            Double decker packaging box. With insides having two compartments to give more space and add more things. Nice design, so can be used for sale or limited advertisement
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 6 Description</h3>
            <p>
            Double Decker compartment holder. Mainly aimed for cosmetics. The top can be kept for foundation and compact powders. The down one would be used for different other makeup products.
            </p>
          </div>
          <div className={styles.serviceCard}>
          <h3>Design 7</h3>
          <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignSeven />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 8</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignEight />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 9</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignNine />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 7 Description</h3>
            <p>
            Modern Aesthetic shock absorber cum compartment divider inspired from shoes. More of a shoe holder which can also be used to keep delicate items. Gives a more modern approach to daily shock absorbers.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 8 Description</h3>
            <p>
            A compartment divider cum Space box which can be used for various products. More to be used like a box to keep more items.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 9 Description</h3>
            <p>
            Mainly for Towels, clothes and handkerchiefs. Gives a beautiful look and attracts a lot of people. Gives a lot of space inside the box to keep more products.
            </p>
          </div>
          <div className={styles.serviceCard}>
          <h3>Design 10</h3>
          <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignTen />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 11</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignEleven />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 12</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignTwelve />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 10 Description</h3>
            <p>
            A look of how the compartment divider, shock absorber and the box would look all in one together. Must be given importance. How the packaging can look all together good.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 11 Description</h3>
            <p>
            It’s a set compartment divider. Mainly can be used for compartments if they want to sell something in a set like crockery or jewelry Extra additional space to keep more products inside it. 
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 12 Description</h3>
            <p>
            Single product Shock absorbers. These are aimed for delicate terracotta or glass sculptures or small items while shipping. Gives a unique look
            </p>
          </div>
          <div className={styles.serviceCard}>
          <h3>Design 13</h3>
          <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignThirteen />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 14</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignFourteen />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 15</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignFifteen />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 13 Description</h3>
            <p>
            Hexagonal divider box. Mainly aimed to divide your jewelry and organize it properly. Can be also used as a compartment divider or as place to keep the things inside the packaging.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 14 Description</h3>
            <p>
            A look of how the compartment divider, shock absorber and the box would look all in one together. Must be given importance.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 15 Description</h3>
            <p>
            Box packaging with ribbon packaging. There will be a compartment divider as per the needed use and can be then used for shipping. More of a box packaging with down layer for promotion advertisements.
            </p>
          </div>
        </div>

        <div className={styles.uniqueSection}>
          <h2>What Materials We Used</h2>
          <p>
          As for the design aspect of our project, we intend to create a template based on sustainable modular packaging for luxury brands to use. We aim to develop a bi-layer, moldable, and biodegradable material that can package all sorts of goods.
	Currently, many brands try to go eco-friendly by adopting plant-based packaging such as seaweed and bamboo fibers or using recycled materials like trash or scrap material. While this approach is viable, we found that these materials tend to degrade quickly and lack a long shelf life without the addition of unnatural additives. Furthermore, these materials do not emphasize the luxury aspect that brands represent.
After extensive research, we decided to incorporate mycelium, which are mushroom roots that are incredibly beneficial to the environment with advantages such as carbon sequestration, biodegradability, and durability. It’s ideal for a molded protective box alternative or uniquely shaped inserts that align with the luxury appeal.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
          <h3>What is the purpose of the project?</h3>
          <div>
            <p>
            As for the design aspect of our project, we intend to create a template based on sustainable modular packing for luxury brands to use. We intend to create a bi-layer, moldable, and biodegradable material that can be used to package all sorts of goods. Currently, many brands try to go eco-friendly by adopting the use of plant-based packaging such as seaweed and bamboo fibers or using recycled material such as trash or scrap material. While this approach is viable, we found that these materials tend to degrade fast and don’t have a long shelf life without other unnatural additives. Plus, these materials do not emphasize the luxury aspect that brands represent.
            </p>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Why is mycelium the chosen material for this project?</h3>
            <p>So after extensive research, we decided to incorporate mycelium, which are mushroom roots that are incredibly beneficial to the environment, with benefits such as carbon sequestration, biodegradability, and durability. It’s ideal for a molded protective box alternative or unique-shaped inserts that align with the luxury appeal. Mycelium can be grown in a lab or on agricultural waste; however, since we want it to mold, we designed a procedure in which a strain of mycelium is first harvested and incubated in a lab to induce growth to the desired length or thickness. Then the mycelium is placed in molds where it grows to fit into a certain shape. To then stop the mold from growing, the mycelium is placed in high temperatures so it stabilizes into a cohesive form.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>How does the bi-layer function enhance the material?</h3>
            <p>As I mentioned earlier, we wanted to incorporate a bilayer function into the material. So, the next step after the mycelium is dried and finished, we can press other natural materials for an elevated appearance and customization factor. These natural materials can include seaweed, kelp, dried flowers, cork, bamboo fibers, or even organic cotton linings. By infusing these two layers, you get an amazing packaging material to use for a variety of products.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Why were other materials considered but not used?</h3>
            <p>There were other materials we could have considered, such as recyclable craft paper or PLA blends; however, those did not align with our aim as we were targeting luxury brands and wanted something unique and modular, which could adjust to the size of the product. Furthermore, we wanted a material that could last a while as some people enjoy collecting the packaging of their luxury product. We also ensured it was biodegradable so in case one wanted to throw it away, we’d be able to give back to the environment in a safe manner.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>What challenges or limitations did the project encounter?</h3>
            <p>I feel like our prototype was built on a lot of preexisting information and studies, and we drew inspiration from other sustainable packaging brands right now. Therefore, I wished we had gotten to dive deeper into synthetic materials or maybe create our own synthetic material. We could've also tested the material by putting it into a computer-modeled simulation to see which conditions our packing adhered to. However, the simulations would have been lengthy, time-consuming, and expensive for our project.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>What are the next steps for improving the project?</h3>
            <p>Yet, this research can become a project if we change our methodology a bit; for example, if we compile our research and use a mixed-methods approach where we survey the luxury market—both consumers and businesses—about their preferences regarding sustainable packing and incorporate polls into our app so we constantly receive feedback. I believe the next step for us would be incorporating all of our ideas into our web-based application so our services can be accessible and well-known.</p>
          </div>
        </div>

        <div className={styles.uniqueSection}>
          <h2>Self-healing materials</h2>
          <p>
          The first material we researched was self-healing polymers.These polymers can autonomously repair cracks or other physical damages when exposed to specific triggers like heat, light, or certain chemicals. They offer a high degree of customization and control over the self-healing process.But the reason to reject this material was because self-healing polymers that are fully biodegradable and cost-effective are almost impossible to find. The existing polymers which are popularly used in many industries and have a good reputation in the market are either made from petrochemicals or aren’t biodegradable. Furthermore, they were very expensive to use in our product.
          </p>
        </div>
  
        <div className={styles.additionalSection}>
          <h2>Self-healing materials part 2</h2>
          <p>
          The second material we researched was Geo Materials. Certain geo-materials, like clay-based materials, have inherent self-healing properties. They can repair cracks through hydration and mineral precipitation. But the self-healing process of geo-materials is very slow and may not be suitable for all packaging applications. This makes it almost impossible to use due to its slow repairing process. In addition to that, due to its fragile nature  it would certainly lower the shelf life of the product and make it more vulnerable to rupture. Also, availability of these materials would be almost impossible in the urban metro cities due to complex extraction from the sources.
          </p>
        </div>

        <div className={styles.additionalSection}>
          <h2>Self-healing materials part 3</h2>
          <p>
          Finally we chose Bacterial based self Healing Material and tested it, which gave the results we needed by certainly fitting in all our criteria needed to make the product commercially, socially and environmentally viable. We mainly put our focus on Mycelium, it fits the criterias of being a natural, fast and innovative repairing material.The concept of using mycelium, the root-like structure of fungi, to create sustainable packaging is truly innovative.
          </p>
        </div>

        <div className={styles.additionalSection}>
          <h2>Detailed breakdown</h2>
          <p>
          Here's a more detailed breakdown of the process and its potential benefits. Detailing on the Harvesting and Incubation method, A specific strain of mycelium is harvested from a controlled environment. This harvested mycelium is then incubated in a lab setting to stimulate growth and development. With the help of Moulding. The grown mycelium is carefully placed into molds of desired shapes and sizes.The mycelium is then fed a nutrient-rich substrate, allowing it to grow and intertwine, filling the mold completely. By the process of Stabilization. Once the mycelium has grown to the desired shape and thickness, it is subjected to a heat treatment process. This process kills the mycelium and stabilizes its structure, transforming it into a durable material. While researching this part we kept this part of Environmental Benefits and Luxury Appeal in our mind. 
          </p>
        </div>

        <div className={styles.additionalSection}>
          <h2>Why Choose Us?</h2>
          <p>
            We stand out because of our commitment to quality, our dedication to our clients, and our ability to deliver exceptional results. Our team works tirelessly to ensure your success, providing you with the tools and strategies you need to thrive. We are here to help you achieve your goals and take your business to the next level. If you have any questions, feel free to contact either CEO. We are always happy to help you.
          </p>
        </div>
        
        <div className={styles.uniqueSection}>
          <h2>Our Unique Approach</h2>
          <p>
            At D1Serve, we prioritize your success. Our unique approach to digital services ensures that your business receives the attention and care it deserves. We work closely with you to understand your goals and develop customized strategies to help you achieve them. Our team is dedicated to providing you with the tools and support you need to succeed. We thorougly analyze your business and provide you with the best solutions personalized to your needs. The D1 Method is proven to deliver results and help you reach your full potential.
          </p>
        </div>
        
        </div>
      </div>
      
      
  )
}
export default index