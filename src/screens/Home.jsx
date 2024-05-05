import React from "react";

import Visual from "../../public/Visual.png";
import Cylinder from "../../public/cylinder.png";
import logos from "../../public/Logos.png";
import HalfTorus from "../../public/half-torus_1.png";
import Product from "../../public/Product Image.png";
import Pyramid from "../../public/pyramid 1.png";
import Torus from "../../public/torus 1.png";
import leaf from "../../public/leaf.png";
import Bell from "../../public/bell.png";
import Aim from "../../public/aim.png";
import lock from "../../public/lock.png";
import CubeHelix2 from "../../public/cube-helix 2.png";
import CubeHelix1 from "../../public/cube-helix 1.png";
import Ellipse1 from "../../public/Ellipse 1.png";
import Spring from "../../public/helix2 1.png";
import Star from "../../public/emojistar 1.png";

import Button from "../components/Button";
import FeaturesGrid from "../components/FeaturesGrid";
import NeedToKnowCard from "../components/NeedToKnowCard";
import SubscriptionCard from "../components/SubscriptionCard";
import Testimonials from "../components/TestimonialsCard";

const Home = () => {
    return (
        <div>
            <div className="home-gradient flex justify-center items-center min-h-[90vh] px-5 relative flex-col md:flex-row">
                <div className=" space-y-16 md:w-1/2">
                    <Button type="secondary">Version 2.0 is here</Button>

                    <h1 class="head-text-1 leading-none text-lg">
                        Pathway to
                        <span class=" gradient-text"> productivity</span>
                    </h1>
                    <p className="body-large text-primary-2 ">
                        Celebrate the joy of accomplishment with an app designed
                        to track your progress, motivate your efforts, and
                        celebrate your successes.
                    </p>
                    <div
                        className="flex  items-center gap-2
                    "
                    >
                        <Button type="primary">Get for free</Button>
                        <Button styles="flex justify-center items-center">
                            Learn more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>

                <div className=" flex items-center md:h-[80vh] w-full">
                    <img
                        src={Cylinder}
                        className="absolute top-2 left-[40%] hidden md:flex"
                    />
                    <img
                        src={Visual}
                        className="object-contain w-full h-full my-10 md:my-0"
                    />
                    <img
                        src={HalfTorus}
                        className="absolute -bottom-28 right-0 hidden md:flex"
                    />
                </div>
            </div>
            <div className="flex justify-center p-5   ">
                <img src={logos} className="object-contain min-w-[850px]" />
            </div>
            <div className="pt-36 pb-28 bg-gradient-to-t from-light-2 to-light ">
                <div className="flex justify-center items-center flex-col space-y-8">
                    <h2 className="tag text-center border p-1 rounded-xl border-light-2 px-5">
                        Boost your productivity
                    </h2>
                    <h1 className="head-text-2 leading-none text-center">
                        A more effective way <br />
                        <span className="gradient-text">to track progress</span>
                    </h1>
                    <p className="body-large text-primary-2 text-center max-w-[570px]">
                        Effortlessly turn your ideas into a fully functional,
                        responsive, no-code SaaS website in just minutes with
                        the set of free components for Framer.
                    </p>
                </div>
                <div className="relative">
                    <img
                        src={Pyramid}
                        className="absolute right-0 top-52 hidden md:flex"
                    />
                    <img src={Product} className="object-cover w-full h-full" />
                    <img
                        src={Torus}
                        className="absolute left-0 bottom-48 hidden md:flex"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4 px-10 gap-y-10 lg:gap-y-0">
                    {" "}
                    <FeaturesGrid
                        image={leaf}
                        heading={"Integration ecosystem"}
                        text={
                            "Track your progress and motivate your efforts everyday."
                        }
                    />
                    <FeaturesGrid
                        image={Aim}
                        heading={"Integration ecosystem"}
                        text={
                            "Track your progress and motivate your efforts everyday."
                        }
                    />
                    <FeaturesGrid
                        image={lock}
                        heading={"Integration ecosystem"}
                        text={
                            "Track your progress and motivate your efforts everyday."
                        }
                    />
                    <FeaturesGrid
                        image={Bell}
                        heading={"Integration ecosystem"}
                        text={
                            "Track your progress and motivate your efforts everyday."
                        }
                    />
                </div>
            </div>
            <div className="p-10">
                <div className="flex justify-center items-center flex-col space-y-8">
                    <h2 className="tag text-center border p-1 rounded-xl border-light-2 px-5">
                        Everything you need
                    </h2>
                    <h1 className="head-text-2 leading-none text-center">
                        Streamlined for easy <br />
                        <span className="gradient-text">management</span>
                    </h1>
                    <p className="body-large text-primary-2 text-center max-w-[570px]">
                        Enjoy customizable lists, team work tools, and smart
                        tracking all in one place. Set tasks, get reminders, and
                        see your progress simply and quickly.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-10 mt-20">
                    <NeedToKnowCard
                        image={CubeHelix1}
                        title="Integration ecosystem"
                        text="Enhance your productivity by connecting with your favorite tools, keeping all your
                        essentials in one place."
                    />
                    <NeedToKnowCard
                        image={CubeHelix2}
                        title="Goal setting and tracking"
                        text="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
                    />
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center flex-col space-y-8">
                    <h2 className="tag text-center border p-1 rounded-xl border-light-2 px-5">
                        Boost your productivity
                    </h2>
                    <h1 className="head-text-2 leading-none text-center">
                        A more effective way <br />
                        <span className="gradient-text">to track progress</span>
                    </h1>
                    <p className="body-large text-primary-2 text-center max-w-[570px]">
                        Effortlessly turn your ideas into a fully functional,
                        responsive, no-code SaaS website in just minutes with
                        the set of free components for Framer.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-10 mt-20">
                    <SubscriptionCard
                        plane="Free"
                        price="0"
                        buttonText="Get started for free"
                        features={[
                            "Up to 5 project members",
                            "Up to 5 project members",
                            "2GB storage",
                            "Integrations",
                            "Basic support",
                        ]}
                        theme="light"
                    />
                    <SubscriptionCard
                        plane="Pro"
                        price="9"
                        buttonText="Sign up now"
                        features={[
                            "Up to 50 project members",
                            "Unlimited tasks and projects",
                            "50GB storage",
                            "Integrations",
                            "Priority support",
                            "Advanced support",
                            "Export support",
                        ]}
                        theme="dark"
                    />
                    <SubscriptionCard
                        plane="Busniess"
                        price="19"
                        buttonText="Sign up now"
                        features={[
                            "Up to 5 project members",
                            "Unlimited tasks and projects",
                            "200GB storage",
                            "Integrations",
                            "Dedicated account manager",
                            "Custom fields",
                            "Advanced analytics",
                            "Export capabilities",
                            "Api access",
                            "Advanced security features",
                        ]}
                        theme="light"
                    />
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center flex-col space-y-8 mt-20">
                    <h2 className="tag text-center border p-1 rounded-xl border-light-2 px-5">
                        Testimonials
                    </h2>
                    <h1 className="head-text-2 leading-none text-center gradient-text">
                        What our users say
                    </h1>
                </div>
                <div className="flex justify-center items-center gap-8 mt-10 ">
                    <div className="hidden rounded-2xl  md:inline space-y-8 ">
                        <Testimonials
                            text={
                                "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention"
                            }
                            name={"Alex Rivera"}
                            userid={"@jamietechguru00"}
                            image={Ellipse1}
                        />
                        <Testimonials
                            text={
                                "Our team's productivity has skyrocketed since we started using this tool."
                            }
                            name={"Jossh Smith"}
                            userid={"@jjmith"}
                            image={Ellipse1}
                        />
                        <Testimonials
                            text={
                                "This app has completely transformed how i manage my projects and deadlines."
                            }
                            name={"Morgan Lee"}
                            userid={"@morganleewhiz"}
                            image={Ellipse1}
                        />
                    </div>
                    <div className="  space-y-8 rounded-2xl">
                        <Testimonials
                            text={
                                "I was amazed at how quickly we were able to integrate this app into our workflow"
                            }
                            name={"Casey Jordan"}
                            userid={"@caseyj"}
                            image={Ellipse1}
                        />
                        <Testimonials
                            text={
                                "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slkps through  the cracks."
                            }
                            name={"Taylor Kim"}
                            userid={"@taylorkimm"}
                            image={Ellipse1}
                        />
                        <Testimonials
                            text={
                                "The customizability and integration capabilities of this app are top-notch"
                            }
                            name={"Rily Smith"}
                            userid={"@rileysmith1"}
                            image={Ellipse1}
                        />
                    </div>
                    <div className="hidden md:inline space-y-8 rounded-2xl">
                        <Testimonials
                            text={
                                "Adopting this app for oru team has streamined our project management and improved communication accross the board"
                            }
                            name={"Jordan Patels"}
                            userid={"@jpatelsdesign"}
                            image={Ellipse1}
                        />
                        <Testimonials
                            text={
                                "With this app, we can easily assign tasks, track progress, and manage documents all in one place."
                            }
                            name={"Sam Dawson"}
                            userid={"@dawsontechtips"}
                            image={Ellipse1}
                        />
                        <Testimonials
                            text={
                                "Its user-friendly interface and roboust features support our diverse needs"
                            }
                            name={"Casey Harper"}
                            userid={"@casey09"}
                            image={Ellipse1}
                        />
                    </div>
                </div>
            </div>
            <div className="relative  h-[600px] bg-gradient-to-t from-[#a1b0e4]  to-light ">
                <img
                    src={Star}
                    alt=""
                    className="absolute top-0 hidden md:inline"
                />
                <div className="flex justify-center items-center flex-col space-y-8 mt-20 h-full">
                    <h1 className="head-text-2 leading-none text-center gradient-text">
                        Sign up for free today
                    </h1>
                    <p className="body-medium text-primary-2 text-center max-w-[570px]">
                        Celebrate the joy of accomplishment with an app designed
                        to track your progress and motivate your efforts.
                    </p>
                    <div className=" flex">
                        <Button type="primary">Get for free</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button styles="flex items-center justify-center">
                            Learn more{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
                <img
                    src={Spring}
                    alt=""
                    className="absolute bottom-0 right-0 hidden md:inline"
                />
            </div>
        </div>
    );
};

export default Home;
