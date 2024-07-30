import AnimatedSection from "../../../components/Animator";
import CustomSlider from "../../../components/CustomSlider";

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Alice Brown',
            feedback: 'I had a great experience at IYK Motors. The staff was friendly and helped me find the perfect car!',
        },
        {
            name: 'Robert White',
            feedback: 'I-Kay Motors provided excellent service and a fantastic selection of cars. Highly recommend!',
        },
    ];

    return (
        <section className="bg-custom-white py-12">
            <AnimatedSection>
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Customer <span className="text-custom-blue">Testimonials</span> </h2>
                    <div className="flex flex-row justify-center items-center space-x-8 ">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white shadow-md p-6 items-start rounded-lg">
                                <p className="text-lg italic">"{testimonial.feedback}"</p>
                                <p className="mt-4 text-custom-blue font-semibold">{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Testimonials;
