"use client"
import React from 'react'
import {Canvas} from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei";
import {MainHeader} from "../../../components/ui/mainHeader";
import {MainFooter} from "../../../components/ui/mainFooter";
import {Mine} from "../../../components/three/modelPfm1"

export default function CVPost(){
    return(
        <div className="page" style={{ backgroundColor: "black" }}>

            <div className="header" style={{backgroundImage: "url(/images/maav-mair.png)", aspectRatio: 1673 / 709}}>
                <h1 className="image-title">
                    Blog
                </h1>
            </div>

            <div className="page-header">
                Computer Vision Progress
            </div>

            <div className='page-body'>
                Computer Vision is the science, or art even, of gathering and harnessing information from images
                into our computer through the use of software engineering and application machine learning techniques.
                MAAV intends to compete in the International Aerial Robotics Competition (linked here) this August and one of the main  
                challenges for this year's edition of the competition is to detect pfm-1 mines. A display of the mine is shown below:  
                 
            </div>

            <div className="drone-model">
                <Canvas
                    shadow
                    dpr={[1,2]}
                    camera={{fov: 55, position: [50, 50, 135]}}
                >
                    <Environment files="/images/ashphalt.jpg" />
                    <Mine />

                    <OrbitControls />
                
                </Canvas>
            </div>

            <div className='page-body max-w-[80%]'>
                 

                The end goal for the computer vision team is to be able to detect these mines through images taken  
                by the drone's camera, record each detected mine's location, and finally plot out each one  
                of the mines in order to create a visual map that represents the locations of all of the mines.  
                 
                Thus far in the season, the main goal was to start training an object detection model that could  
                detect the mines in the image and return a location for the mine. Many different models were considered  
                including models like SAM-3, [Swati's Model], and YOLO. The main reason that we chose to use these models  
                was because of their built-in ability to output bounding boxes for detections, which allow us to focus purely  
                on training these models for our mission. We ultimately chose to use YOLO as we had prior experience with it in the past.  
                 
                The first ever test for object detection was run, and the results are shown below:  
                 
            </div>

            <img className="w-[25vw]" src="/images/blog-images/first-test.png"></img>

            <div className='page-body max-w-[80%]'>
                Not off to a great start using raw pre-trained models. All we have to work with is a model that  
                that a drain cover is a bench. However, this is to be expected as the mines are a unique shape and  
                definitely not present in the training set. To improve upon this, we would need to train it with our own  
                images. However, there are two main problems that come up now. Not only do we need lots of these images, we  
                also had a limited number of physical mines and needed access to green grass to create realistic training images  
                which would we difficult as the winter approaches. Our team knew that we would need to take real-world images  
                as we would be running this model on real-world drone images during the competition. However, the process of  
                gathering realistic training images manually would be very difficult and difficult to manage in the winter.  
                 
                 
                This is where our secret weapon came into play. Blender is an open-source 3d graphics tool mainly used to create  
                3d graphics and animations. However, in our case, we planned on using Blender to create many training images with labels.  
                This was possible due to Blender's built-in Python API that we were able to leverage for things like autonamtic picture generation,  
                label creation, and the ability to create thousands of images in a matter of hours.  
                 
                Naturally, there were some lessons to be learned, such as choosing the right render engine and shaping grass to be more realistic.  
                We went through many itertations before starting to generate some photorealistic images. The images are shown below through their iterations:  
            </div>
            
            <div className="flex">
                <img className="w-[20vw]" src="/images/blog-images/7_0.png"></img>
                <img className="w-[20vw]" src="/images/blog-images/18_0.png"></img>
                <img className="w-[20vw]" src="/images/blog-images/eevee_engine.png"></img>
                <img className="w-[20vw]" src="/images/blog-images/cycles_engine_grass_1_noisy.png"></img>
            </div>

            <div className="page-body max-w-[80%]">
                With these images, we are now able to train our native YOLO model. We chose to use our computer generated blender images as pure training data  
                and utilize our few real-world images as testing data as that was the realistic use case for our model. We made sure to hold out our real-world images  
                from our training set as to not bias our model towards overfitting by testing on images that the model trained on. The progression of training can be seen below:  
            </div>

            <div className="flex">
                <img className="w-[17vw]" src="/images/blog-images/second-test.png"></img>
                <img className="w-[17vw]" src="/images/blog-images/third-test.png"></img>
                <img className="w-[17vw]" src="/images/blog-images/fourth-test.png"></img>
                <img className="w-[17vw]" src="/images/blog-images/fifth-test.png"></img>
                <img className="w-[17vw]" src="/images/blog-images/sixth-test.png"></img>
            </div>

            <div className='page-body max-w-[80%]'>
                Across these images, we can see that there confidence level, which is the number labeled next to the bounding box  
                is growing, with the largest growth between the second and third images, as that was when we started mass training and  
                finally were able to generate realistic blender training images. With this progress, the new mission is now to create a networking  
                system that allows the drones to unify their results into one plot where we can see all of the detections across all the drones.  
            </div>
            
        </div>
    );
}